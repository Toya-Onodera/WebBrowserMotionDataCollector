import React, { useEffect, useState, useMemo } from "react";
import tingle from "tingle.js";
import { CardArticle } from "../../molecules/CardArticle";
import { Section } from "../../molecules/Section";
import { List } from "../../molecules/Lists";

type Orientation = DeviceOrientationEvent | null;
type Acceleration = DeviceMotionEventAcceleration | null;
type AccelerationIncludingGravity = DeviceMotionEventAcceleration | null;
type RotationRate = DeviceMotionEventRotationRate | null;

export const MobileSensorData: React.VFC = () => {
  const [orientation, setDeviceOrientation] = useState<Orientation>(null);
  const [acceleration, setAcceleration] = useState<Acceleration>(null);
  const [accelerationIncludingGravity, setAccelerationIncludingGravity] =
    useState<AccelerationIncludingGravity>(null);
  const [rotationRate, setRotationRate] = useState<RotationRate>(null);

  useEffect(() => {
    // FIXME: iOS対応の為必要とする
    // https://qiita.com/Toya-Onodera/items/fe06000a7909797fb5b4
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (
      typeof (DeviceMotionEvent as any).requestPermission === "function" &&
      sessionStorage.getItem("isPermission") === null
    ) {
      const tingleLinkElement = document.createElement("link");
      tingleLinkElement.rel = "stylesheet";
      tingleLinkElement.href =
        "https://cdnjs.cloudflare.com/ajax/libs/tingle/0.15.3/tingle.min.css";
      document.head.appendChild(tingleLinkElement);

      tingleLinkElement.onload = () => {
        const tingleScriptElement = document.createElement("script");
        tingleScriptElement.src =
          "https://cdnjs.cloudflare.com/ajax/libs/tingle/0.15.3/tingle.min.js";
        document.body.appendChild(tingleScriptElement);

        tingleScriptElement.onload = () => {
          const modal = new tingle.modal({
            footer: true,
          });

          modal.setContent("<p>このサイトでは、センサー値を扱います。</p>");
          modal.addFooterBtn(
            "Cancel",
            "tingle-btn tingle-btn--default tingle-btn--pull-right",
            () => modal.close(),
          );
          modal.addFooterBtn(
            "OK",
            "tingle-btn tingle-btn--primary tingle-btn--pull-right",
            () => {
              modal.close();
            },
          );

          document
            .querySelector(
              ".tingle-btn.tingle-btn--primary.tingle-btn--pull-right",
            )
            ?.addEventListener("click", async () => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const isDeviceOrientationEvent = await (
                DeviceOrientationEvent as any
              ).requestPermission();
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const isDeviceMotionEvent = await (
                DeviceMotionEvent as any
              ).requestPermission();

              // 許可したあとはまた許可が必要になるまでポップアップが出ないようにする
              if (isDeviceOrientationEvent && isDeviceMotionEvent) {
                sessionStorage.setItem("isPermission", "true");
              }
            });

          modal.open();
        };
      };
    }
  }, []);

  useEffect(() => {
    const orientationHandler = (orientation: DeviceOrientationEvent) => {
      setDeviceOrientation(orientation);
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

  const deviceUseLists = useMemo(() => {
    return [
      "ブラウザ名: platform.name",
      "ブラウザバージョン: platform.version",
      "端末名: platform.product",
      "端末OS名: platform.os.family",
    ];
  }, []);

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
