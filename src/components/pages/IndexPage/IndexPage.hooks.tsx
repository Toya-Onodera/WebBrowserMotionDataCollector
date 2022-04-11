import { useMemo, useState } from "react";

export const useIndexHooks = () => {
  const [isSensorUse, setIsSensorUse] = useState(false);

  const deviceUseLists = useMemo(() => {
    return [
      "ブラウザ名: platform.name",
      "ブラウザバージョン: platform.version",
      "端末名: platform.product",
      "端末OS名: platform.os.family",
    ];
  }, []);

  const deviceorientationLists = useMemo(() => {
    return [
      "x軸: deviceorientation.alpha",
      "y軸: deviceorientation.beta",
      "z軸: deviceorientation.gamma",
    ];
  }, []);

  const accelerationLists = useMemo(() => {
    return [
      "x軸(西から東へ向かう軸): acceleration.x",
      "y軸(南から北へ向かう軸): acceleration.y",
      "z軸(地面から直立する軸): acceleration.z",
    ];
  }, []);

  const accelerationIncludingGravityLists = useMemo(() => {
    return [
      "x軸: accelerationIncludingGravity.x",
      "y軸: accelerationIncludingGravity.y",
      "z軸: accelerationIncludingGravity.z",
    ];
  }, []);

  const rotationRateLists = useMemo(() => {
    return [
      "alpha軸(西から東へ向かう軸): rotationRate.x",
      "beta軸(南から北へ向かう軸): rotationRate.y",
      "gamma軸(地面から直立する軸): rotationRate.z",
    ];
  }, []);

  return {
    accelerationIncludingGravityLists,
    accelerationLists,
    deviceorientationLists,
    deviceUseLists,
    rotationRateLists,
    isSensorUse,
    setIsSensorUse,
  };
};
