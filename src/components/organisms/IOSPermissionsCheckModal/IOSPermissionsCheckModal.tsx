import React, { useCallback, useEffect, useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export const IOSPermissionsCheckModal: React.VFC = () => {
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

  return (
    <Dialog open={isOpen}>
      <DialogTitle id="alert-dialog-title">センサー利用確認</DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          このサイトでは、センサー値を扱います。
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>キャンセル</Button>
        <Button onClick={handleCheckPermissions}>許可</Button>
      </DialogActions>
    </Dialog>
  );
};
