import { useMemo } from "react";
import { MobileSensorContextValue } from "../../templates/MobileSensorContext";

export const useMobileSensorDataLists = (
  mobileSensorContext: MobileSensorContextValue,
) => {
  const {
    orientation,
    acceleration,
    accelerationIncludingGravity,
    rotationRate,
    platform,
  } = useMemo(() => {
    return mobileSensorContext;
  }, [mobileSensorContext]);

  const deviceUseLists = useMemo(() => {
    if (platform) {
      const { name, version, product, os } = platform;
      return [
        `ブラウザ名: ${name}`,
        `ブラウザバージョン: ${version}`,
        `端末名: ${product}`,
        `端末OS名: ${os}`,
      ];
    }

    return [
      "ブラウザ名: platform.name",
      "ブラウザバージョン: platform.version",
      "端末名: platform.product",
      "端末OS名: platform.os.family",
    ];
  }, [platform]);

  const deviceorientationLists = useMemo(() => {
    if (orientation) {
      const { alpha, beta, gamma } = orientation;
      return [`x軸: ${alpha}`, `y軸: ${beta}`, `z軸: ${gamma}`];
    }

    return [
      "x軸: deviceorientation.alpha",
      "y軸: deviceorientation.beta",
      "z軸: deviceorientation.gamma",
    ];
  }, [orientation]);

  const accelerationLists = useMemo(() => {
    if (acceleration) {
      const { x, y, z } = acceleration;
      return [
        `x軸(西から東へ向かう軸): ${x}`,
        `y軸(南から北へ向かう軸): ${y}`,
        `z軸(地面から直立する軸): ${z}`,
      ];
    }

    return [
      "x軸(西から東へ向かう軸): acceleration.x",
      "y軸(南から北へ向かう軸): acceleration.y",
      "z軸(地面から直立する軸): acceleration.z",
    ];
  }, [acceleration]);

  const accelerationIncludingGravityLists = useMemo(() => {
    if (accelerationIncludingGravity) {
      const { x, y, z } = accelerationIncludingGravity;
      return [`x軸: ${x}`, `y軸: ${y}`, `z軸: ${z}`];
    }

    return [
      "x軸: accelerationIncludingGravity.x",
      "y軸: accelerationIncludingGravity.y",
      "z軸: accelerationIncludingGravity.z",
    ];
  }, [accelerationIncludingGravity]);

  const rotationRateLists = useMemo(() => {
    if (rotationRate) {
      const { alpha, beta, gamma } = rotationRate;
      return [
        `alpha軸(西から東へ向かう軸): ${alpha}`,
        `beta軸(南から北へ向かう軸): ${beta}`,
        `gamma軸(地面から直立する軸): ${gamma}`,
      ];
    }

    return [
      "alpha軸(西から東へ向かう軸): rotationRate.x",
      "beta軸(南から北へ向かう軸): rotationRate.y",
      "gamma軸(地面から直立する軸): rotationRate.z",
    ];
  }, [rotationRate]);

  return {
    deviceUseLists,
    deviceorientationLists,
    accelerationLists,
    accelerationIncludingGravityLists,
    rotationRateLists,
  };
};
