import React, { useEffect } from "react";
import tingle from "tingle.js";

export const IOSPermissionsCheckModal: React.VFC = () => {
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

  return <></>;
};
