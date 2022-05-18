import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

// Context
import {
  Acceleration,
  AccelerationIncludingGravity,
  MobileSensorContext,
  Orientation,
  RotationRate,
} from "../../templates/MobileSensorContext";

// Firebase
import { database } from "../../../firebase";
import { child, ref, push, set } from "firebase/database";

// Lodash
import _ from "lodash";

export type MobileSensorCollectData = {
  orientation: Orientation[];
  acceleration: Acceleration[];
  accelerationIncludingGravity: AccelerationIncludingGravity[];
  rotationRate: RotationRate[];
};

const SENSOR_INITIALIZE_VALUE = {
  orientation: [],
  acceleration: [],
  accelerationIncludingGravity: [],
  rotationRate: [],
};

// stop の動作も組み込んだ setInterval
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export const useMotionSensorFloatingButton = (
  setIsSensorUse: Dispatch<SetStateAction<boolean>>,
) => {
  const mobileContext = useContext(MobileSensorContext);
  const [mobileSensors, setMobileSensors] = useState<MobileSensorCollectData>(
    SENSOR_INITIALIZE_VALUE,
  );

  const [isTimerStart, setIsTimerStart] = useState<boolean>(false);

  const setIsClickedFalseOnClick = useCallback(async () => {
    if (window.confirm("センサデータの収集を終了しますか？")) {
      setIsSensorUse(false);

      try {
        // Firebase にデータを格納する
        await writeSensorData(mobileSensors);

        alert("データを保存しました。");
      } catch (e) {
        console.error(e);
        alert(e);
        // alert("データの保存に失敗しました。");
      } finally {
        // 取得していたセンサ値の時系列データを削除する
        setMobileSensors(SENSOR_INITIALIZE_VALUE);

        // タイマーを停止する
        setIsTimerStart(false);
      }
    }
  }, [mobileSensors, setIsSensorUse]);

  const setIsClickedTrueOnClick = useCallback(() => {
    if (window.confirm("センサデータの収集を開始しますか？")) {
      setIsSensorUse(true);

      // タイマーを開始する
      setIsTimerStart(true);
    }
  }, [setIsSensorUse]);

  // センサ値を 100ms ごとに保存する部分
  useInterval(
    () => {
      setMobileSensors((prevMobileSensors) => {
        return {
          orientation: _.cloneDeep([
            ...prevMobileSensors.orientation,
            mobileContext.orientation,
          ]),
          acceleration: _.cloneDeep([
            ...prevMobileSensors.acceleration,
            mobileContext.acceleration,
          ]),
          accelerationIncludingGravity: _.cloneDeep([
            ...prevMobileSensors.accelerationIncludingGravity,
            mobileContext.accelerationIncludingGravity,
          ]),
          rotationRate: _.cloneDeep([
            ...prevMobileSensors.rotationRate,
            mobileContext.rotationRate,
          ]),
        };
      });
    },
    isTimerStart ? 1000 : null,
  );

  return {
    setIsClickedFalseOnClick,
    setIsClickedTrueOnClick,
    mobileSensors,
  };
};

const writeSensorData = (
  sensorData: MobileSensorCollectData,
): Promise<void> => {
  const newPostKey = push(child(ref(database), "/spe")).key;
  return set(ref(database, `/spe/${newPostKey}`), sensorData);
};
