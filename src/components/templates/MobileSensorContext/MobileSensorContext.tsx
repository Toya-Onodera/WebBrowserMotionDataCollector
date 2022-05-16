import React, { createContext, useEffect, useState } from "react";

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

export type MobileSensorContextValue = {
  orientation: Orientation;
  acceleration: Acceleration;
  accelerationIncludingGravity: AccelerationIncludingGravity;
  rotationRate: RotationRate;
};

export const MobileSensorContext = createContext<MobileSensorContextValue>(
  {} as MobileSensorContextValue,
);

export const MobileSensorContextProvider: React.FC = ({ children }) => {
  const [orientation, setDeviceOrientation] = useState<Orientation>(null);
  const [acceleration, setAcceleration] = useState<Acceleration>(null);
  const [accelerationIncludingGravity, setAccelerationIncludingGravity] =
    useState<AccelerationIncludingGravity>(null);
  const [rotationRate, setRotationRate] = useState<RotationRate>(null);

  useEffect(() => {
    const orientationHandler = ({
      absolute,
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
      setAcceleration(acceleration);
      setAccelerationIncludingGravity(accelerationIncludingGravity);
      setRotationRate(rotationRate);
    };

    window.addEventListener("devicemotion", motionHandler);
    window.addEventListener("deviceorientation", orientationHandler);
  }, []);

  return (
    <MobileSensorContext.Provider
      value={{
        orientation: orientation,
        acceleration: acceleration,
        accelerationIncludingGravity: accelerationIncludingGravity,
        rotationRate: rotationRate,
      }}
    >
      {children}
    </MobileSensorContext.Provider>
  );
};
