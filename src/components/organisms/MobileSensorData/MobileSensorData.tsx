import React, { useEffect, useState } from "react";
import { CardArticle } from "../../molecules/CardArticle";
import { Section } from "../../molecules/Section";
import { List } from "../../molecules/Lists";

type Props = {
  accelerationIncludingGravityLists: string[];
  accelerationLists: string[];
  deviceorientationLists: string[];
  deviceUseLists: string[];
  rotationRateLists: string[];
};

export const MobileSensorData: React.VFC<Props> = ({
  accelerationIncludingGravityLists,
  accelerationLists,
  deviceorientationLists,
  deviceUseLists,
  rotationRateLists,
}) => {
  const [deviceOrientation, setDeviceOrientation] =
    useState<DeviceOrientationEvent | null>(null);
  const [acceleration, setAcceleration] =
    useState<DeviceMotionEventAcceleration | null>(null);
  const [accelerationIncludeGravity, setAccelerationIncludeGravity] =
    useState<DeviceMotionEventAcceleration | null>(null);
  const [rotationRate, setRotationRate] =
    useState<DeviceMotionEventRotationRate | null>(null);

  useEffect(() => {
    const orientationHandler = (event: DeviceOrientationEvent) => {
      setDeviceOrientation(event);
    };

    const motionHandler = (event: DeviceMotionEvent) => {
      setAcceleration(event.acceleration);
      setAccelerationIncludeGravity(event.accelerationIncludingGravity);
      setRotationRate(event.rotationRate);
    };

    window.addEventListener("devicemotion", motionHandler);
    window.addEventListener("deviceorientation", orientationHandler);
  }, []);

  return (
    <>
      <CardArticle heading="端末情報">
        <List values={deviceUseLists} />
      </CardArticle>

      <CardArticle heading="センサ情報">
        <Section heading="デバイスの向き">
          <List values={deviceorientationLists} />
        </Section>

        <Section heading="加速度(重力を含まない)">
          <List values={accelerationLists} />
        </Section>

        <Section heading="加速度(重力を含む)">
          <List values={accelerationIncludingGravityLists} />
        </Section>

        <Section heading="加速度(重力を含まない)">
          <List values={rotationRateLists} />
        </Section>
      </CardArticle>
    </>
  );
};
