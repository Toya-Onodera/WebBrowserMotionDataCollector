import React, { Dispatch, SetStateAction } from "react";

// FontAwesome
import SensorsIcon from "@mui/icons-material/Sensors";
import SensorsOffIcon from "@mui/icons-material/SensorsOff";

// components
import { FloatingButton } from "../../atoms/FloatingButton";

// Hooks
import { useMotionSensorFloatingButton } from "./MotionSensorFloatingButton.hooks";

type Props = {
  isSensorUse: boolean;
  setIsSensorUse: Dispatch<SetStateAction<boolean>>;
};

export const MotionSensorFloatingButton: React.VFC<Props> = ({
  isSensorUse,
  setIsSensorUse,
}) => {
  const { setIsClickedFalseOnClick, setIsClickedTrueOnClick } =
    useMotionSensorFloatingButton(setIsSensorUse);

  return isSensorUse ? (
    <FloatingButton icon={SensorsOffIcon} onClick={setIsClickedFalseOnClick} />
  ) : (
    <FloatingButton icon={SensorsIcon} onClick={setIsClickedTrueOnClick} />
  );
};
