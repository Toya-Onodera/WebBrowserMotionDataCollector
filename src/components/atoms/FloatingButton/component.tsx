import React from "react";

import { Fab } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

type Props = {
  icon: SvgIconComponent;
  onClick: () => void;
};

export const FloatingButton: React.VFC<Props> = ({ icon: Icon, onClick }) => (
  <Fab
    color="primary"
    sx={{
      position: "fixed",
      padding: "24px",
      bottom: "16px",
      right: "16px",
    }}
    onClick={onClick}
  >
    <Icon />
  </Fab>
);
