import { useState } from "react";

export const useIndexHooks = () => {
  const [isSensorUse, setIsSensorUse] = useState(false);

  return {
    isSensorUse,
    setIsSensorUse,
  };
};
