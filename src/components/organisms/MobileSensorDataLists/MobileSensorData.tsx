import React, { useContext } from "react";

// Components
import { CardArticle } from "../../molecules/CardArticle";
import { Section } from "../../molecules/Section";
import { List } from "../../molecules/Lists";
import { IOSPermissionsCheckModal } from "../IOSPermissionsCheckModal";

// Hooks
import { useMobileSensorDataLists } from "./MobileSensorData.hooks";

// Contexts
import { MobileSensorContext } from "../../templates/MobileSensorContext";

export const MobileSensorDataLists: React.VFC = () => {
  const mobileSensorContext = useContext(MobileSensorContext);

  const {
    deviceUseLists,
    deviceorientationLists,
    accelerationLists,
    accelerationIncludingGravityLists,
    rotationRateLists,
  } = useMobileSensorDataLists(mobileSensorContext);

  return (
    <>
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

      <IOSPermissionsCheckModal />
    </>
  );
};
