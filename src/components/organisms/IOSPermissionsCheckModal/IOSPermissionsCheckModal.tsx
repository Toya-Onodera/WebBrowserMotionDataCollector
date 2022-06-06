import React from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

// Hooks
import { useIOSPermissionsCheckModal } from "./IOSPermissionsCheckModal.hooks";

export const IOSPermissionsCheckModal: React.VFC = () => {
  const { isOpen, handleClose, handleCheckPermissions } =
    useIOSPermissionsCheckModal();

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
