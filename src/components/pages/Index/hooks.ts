import { useMemo } from "react";

// assets
import Logo from "../../../assets/logo.svg";

export const useIndexHooks = () => {
  const dummySnapSources = useMemo(() => {
    return [Logo, Logo, Logo, Logo, Logo, Logo, Logo];
  }, []);

  return {
    dummySnapSources,
  };
};
