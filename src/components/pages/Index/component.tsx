import React from "react";
import styled from "styled-components";

// component
import { CardArticle } from "../../molecules/CardArticle";
import { Section } from "../../molecules/Section";
import { List } from "../../molecules/Lists";
import { FloatingInfo } from "../../atoms/FloatingInfo";
import { MotionSensorFloatingButton } from "../../organisms/MotionSensorFloatingButton/component";

// hooks
import { useIndexHooks } from "./hooks";

export const IndexPage: React.VFC = () => {
  const {
    accelerationIncludingGravityLists,
    accelerationLists,
    deviceorientationLists,
    deviceUseLists,
    rotationRateLists,
    isSensorUse,
    setIsSensorUse,
  } = useIndexHooks();

  return (
    <>
      <Wrapper>
        <CardArticle heading="端末情報">
          <List values={deviceUseLists} />
        </CardArticle>

        <CardArticle heading="センサ情報">
          <Section heading="デバイスの向き">
            <List values={deviceorientationLists} />
          </Section>

          <Section heading="加速度(重力を含まない)">
            <List values={accelerationLists} />
          </Section>

          <Section heading="加速度(重力を含む)">
            <List values={accelerationIncludingGravityLists} />
          </Section>

          <Section heading="加速度(重力を含まない)">
            <List values={rotationRateLists} />
          </Section>
        </CardArticle>
      </Wrapper>

      {isSensorUse && <FloatingInfo text="実行中" />}

      <MotionSensorFloatingButton
        isSensorUse={isSensorUse}
        setIsSensorUse={setIsSensorUse}
      />
    </>
  );
};

const Wrapper = styled.div`
  padding: 16px;

  & > article:not(:first-child) {
    margin-top: 24px;
  }
`;
