import { Dispatch, SetStateAction, useCallback } from "react";

export const useMotionSensorFloatingButton = (
  setIsSensorUse: Dispatch<SetStateAction<boolean>>,
) => {
  const setIsClickedFalseOnClick = useCallback(() => {
    setIsSensorUse(false);
  }, [setIsSensorUse]);

  const setIsClickedTrueOnClick = useCallback(() => {
    setIsSensorUse(true);
  }, [setIsSensorUse]);

  return {
    setIsClickedFalseOnClick,
    setIsClickedTrueOnClick,
  };
};
