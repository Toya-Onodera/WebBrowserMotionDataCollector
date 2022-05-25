import React, { createContext, useEffect, useState } from "react";
import { isIOS } from "react-device-detect";

// ua-parser-js
import { UAParser } from "ua-parser-js";

// DeviceOrientationEvent だと余計なプロパティも取り扱ってしまう
export type Orientation = {
  absolute: boolean;
  alpha: number | null;
  beta: number | null;
  gamma: number | null;
} | null;

export type Acceleration = DeviceMotionEventAcceleration | null;
export type AccelerationIncludingGravity = DeviceMotionEventAcceleration | null;
export type RotationRate = DeviceMotionEventRotationRate | null;

export type Platform = {
  name: string | undefined;
  version: string | undefined;
  product: string | undefined;
  os: string | undefined;
} | null;

export type MobileSensorContextValue = {
  orientation: Orientation;
  acceleration: Acceleration;
  accelerationIncludingGravity: AccelerationIncludingGravity;
  rotationRate: RotationRate;
  platform: Platform;
};

export const MobileSensorContext = createContext<MobileSensorContextValue>(
  {} as MobileSensorContextValue,
);

// Android と iOS でセンサ値が違うので補正をかける
// 向きを Android に合わせる
// https://misohena.jp/blog/2014-10-28-js_deviceorientation.html
const sensorAccelerationValueAboutOsBetweenDifferenceAbsorb = (
  sensorData: DeviceMotionEventAcceleration,
) => {
  if (sensorData.x && sensorData.y && sensorData.z && isIOS) {
    const { x, y, z } = sensorData;
    const [correctionX, correctionY, correctionZ] = [-x, -y, -z];

    return {
      x: correctionX,
      y: correctionY,
      z: correctionZ,
    } as DeviceMotionEventAcceleration;
  }

  return sensorData;
};

export const MobileSensorContextProvider: React.FC = ({ children }) => {
  const [orientation, setDeviceOrientation] = useState<Orientation>(null);
  const [acceleration, setAcceleration] = useState<Acceleration>(null);
  const [accelerationIncludingGravity, setAccelerationIncludingGravity] =
    useState<AccelerationIncludingGravity>(null);
  const [rotationRate, setRotationRate] = useState<RotationRate>(null);
  const [platform, setPlatform] = useState<Platform>(null);

  useEffect(() => {
    const orientationHandler = ({
      absolute = false, // Webkit(Safari) では undefined 扱いになるのを防ぐ
      alpha,
      beta,
      gamma,
    }: DeviceOrientationEvent) => {
      setDeviceOrientation({
        absolute,
        alpha,
        beta,
        gamma,
      });
    };

    const motionHandler = ({
      acceleration,
      accelerationIncludingGravity,
      rotationRate,
    }: DeviceMotionEvent) => {
      if (acceleration) {
        const { x, y, z } =
          sensorAccelerationValueAboutOsBetweenDifferenceAbsorb(acceleration);

        setAcceleration({ x, y, z });
      }

      if (accelerationIncludingGravity) {
        const { x, y, z } =
          sensorAccelerationValueAboutOsBetweenDifferenceAbsorb(
            accelerationIncludingGravity,
          );

        setAccelerationIncludingGravity({ x, y, z });
      }

      if (rotationRate) {
        const { alpha, beta, gamma } = rotationRate;
        setRotationRate({ alpha, beta, gamma });
      }
    };

    window.addEventListener("devicemotion", motionHandler);
    window.addEventListener("deviceorientation", orientationHandler);

    // userAgentの取得
    const parsedUA = UAParser();
    setPlatform({
      name: parsedUA.browser.name,
      version: parsedUA.browser.version,
      product: parsedUA.device.model,
      os: `${parsedUA.os.name} ${parsedUA.os.version}`,
    });
  }, []);

  return (
    <MobileSensorContext.Provider
      value={{
        orientation: orientation,
        acceleration: acceleration,
        accelerationIncludingGravity: accelerationIncludingGravity,
        rotationRate: rotationRate,
        platform: platform,
      }}
    >
      {children}
    </MobileSensorContext.Provider>
  );
};
