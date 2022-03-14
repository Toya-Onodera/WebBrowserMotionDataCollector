import React, { Dispatch, SetStateAction, useCallback } from "react";

// FontAwesome
import SensorsIcon from "@mui/icons-material/Sensors";
import SensorsOffIcon from "@mui/icons-material/SensorsOff";

// components
import { FloatingButton } from "../../atoms/FloatingButton";

type Props = {
  isSensorUse: boolean;
  setIsSensorUse: Dispatch<SetStateAction<boolean>>;
};

export const MotionSensorFloatingButton: React.VFC<Props> = ({
  isSensorUse,
  setIsSensorUse,
}) => {
  const setIsClickedFalseOnClick = useCallback(() => {
    setIsSensorUse(false);
  }, [setIsSensorUse]);

  const setIsClickedTrueOnClick = useCallback(() => {
    setIsSensorUse(true);
  }, [setIsSensorUse]);

  return isSensorUse ? (
    <FloatingButton icon={SensorsOffIcon} onClick={setIsClickedFalseOnClick} />
  ) : (
    <FloatingButton icon={SensorsIcon} onClick={setIsClickedTrueOnClick} />
  );
};
