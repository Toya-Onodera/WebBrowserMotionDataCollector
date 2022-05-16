import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useCallback,
  useContext,
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

export const useMotionSensorFloatingButton = (
  setIsSensorUse: Dispatch<SetStateAction<boolean>>,
) => {
  const mobileContext = useContext(MobileSensorContext);
  const [mobileSensors, setMobileSensors] = useState<MobileSensorCollectData>(
    SENSOR_INITIALIZE_VALUE,
  );

  const timerRef: MutableRefObject<number | null> = useRef(null);

  const setIsClickedFalseOnClick = useCallback(() => {
    if (
      timerRef.current &&
      window.confirm("センサデータの収集を終了しますか？")
    ) {
      setIsSensorUse(false);

      // タイマーを停止する
      clearInterval(timerRef.current);
      timerRef.current = null;
      setMobileSensors(SENSOR_INITIALIZE_VALUE);
    }
  }, [setIsSensorUse]);

  const setIsClickedTrueOnClick = useCallback(() => {
    if (window.confirm("センサデータの収集を開始しますか？")) {
      setIsSensorUse(true);

      // タイマーを開始する
      // Ref を使ってタイマー ID を保持する
      timerRef.current = window.setInterval(() => {
        setMobileSensors((prevMobileSensors) => {
          return {
            orientation: [
              ...prevMobileSensors.orientation,
              mobileContext.orientation,
            ],
            acceleration: [
              ...prevMobileSensors.acceleration,
              mobileContext.acceleration,
            ],
            accelerationIncludingGravity: [
              ...prevMobileSensors.accelerationIncludingGravity,
              mobileContext.accelerationIncludingGravity,
            ],
            rotationRate: [
              ...prevMobileSensors.rotationRate,
              mobileContext.rotationRate,
            ],
          };
        });
      }, 1000);
    }
  }, [mobileContext, setIsSensorUse]);

  return {
    setIsClickedFalseOnClick,
    setIsClickedTrueOnClick,
    mobileSensors,
  };
};
