import { useCallback, useEffect, useState } from "react";

export const useIOSPermissionsCheckModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (
      // FIXME: iOS対応の為必要とする
      // https://qiita.com/Toya-Onodera/items/fe06000a7909797fb5b4
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      typeof (DeviceMotionEvent as any).requestPermission === "function" &&
      sessionStorage.getItem("isPermission") === null
    ) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleCheckPermissions = useCallback(async () => {
    handleClose();

    const isDeviceOrientationEvent = await (DeviceOrientationEvent as any) // eslint-disable-line @typescript-eslint/no-explicit-any
      .requestPermission();
    const isDeviceMotionEvent = await (DeviceMotionEvent as any) // eslint-disable-line @typescript-eslint/no-explicit-any
      .requestPermission();

    // 許可したあとはまた許可が必要になるまでポップアップが出ないようにする
    if (isDeviceOrientationEvent && isDeviceMotionEvent) {
      sessionStorage.setItem("isPermission", "true");
    }
  }, [handleClose]);

  return {
    isOpen,
    handleClose,
    handleCheckPermissions,
  };
};
