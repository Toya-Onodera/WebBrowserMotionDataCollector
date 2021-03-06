import React from "react";
import styled from "styled-components";

// component
import { FloatingInfo } from "../../atoms/FloatingInfo";
import { MotionSensorFloatingButton } from "../../organisms/MotionSensorFloatingButton";
import { MobileSensorDataLists } from "../../organisms/MobileSensorDataLists";

// hooks
import { useIndexHooks } from "./IndexPage.hooks";

// Context
import { MobileSensorContextProvider } from "../../templates/MobileSensorContext";

export const IndexPage: React.VFC = () => {
  const { isSensorUse, setIsSensorUse } = useIndexHooks();

  return (
    <MobileSensorContextProvider>
      <ListStyleWrapper>
        <MobileSensorDataLists />
      </ListStyleWrapper>

      {isSensorUse && <FloatingInfo text="実行中" />}

      <MotionSensorFloatingButton
        isSensorUse={isSensorUse}
        setIsSensorUse={setIsSensorUse}
      />
    </MobileSensorContextProvider>
  );
};

const ListStyleWrapper = styled.div`
  padding: 16px;

  & > article:not(:first-child) {
    margin-top: 24px;
  }
`;
