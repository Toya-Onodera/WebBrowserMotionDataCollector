import React from "react";
import styled from "styled-components";

// component
import { FloatingInfo } from "../../atoms/FloatingInfo";
import { MotionSensorFloatingButton } from "../../organisms/MotionSensorFloatingButton";
import { MobileSensorData } from "../../organisms/MobileSensorData";

// hooks
import { useIndexHooks } from "./IndexPage.hooks";

// Context
import { MobileSensorContextProvider } from "../../templates/MobileSensorContext";

export const IndexPage: React.VFC = () => {
  const { isSensorUse, setIsSensorUse } = useIndexHooks();

  return (
    <MobileSensorContextProvider>
      <Wrapper>
        <MobileSensorData />
      </Wrapper>

      {isSensorUse && <FloatingInfo text="実行中" />}

      <MotionSensorFloatingButton
        isSensorUse={isSensorUse}
        setIsSensorUse={setIsSensorUse}
      />
    </MobileSensorContextProvider>
  );
};

const Wrapper = styled.div`
  padding: 16px;

  & > article:not(:first-child) {
    margin-top: 24px;
  }
`;
