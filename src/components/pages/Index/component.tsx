import React, { useMemo } from "react";
import styled from "styled-components";

// component
import { ScrollableSnap } from "../../organisms/ScrollableSnap";
import { H2, H3 } from "../../atoms/Heading";
import { CardArticle } from "../../molecules/CardArticle";
import { Section } from "../../molecules/Section";
import { ListChildren } from "../../atoms/ListChildren";
import { List } from "../../molecules/Lists";

// hooks
import { useIndexHooks } from "./index";

export const IndexPage: React.VFC = () => {
  const { dummySnapSources } = useIndexHooks();

  const deviceUseLists = useMemo(() => {
    return [
      "ブラウザ名: platform.name",
      "ブラウザバージョン: platform.version",
      "端末名: platform.product",
      "端末OS名: platform.os.family",
    ];
  }, []);

  const deviceorientationLists = useMemo(() => {
    return [
      "x軸: deviceorientation.alpha",
      "y軸: deviceorientation.beta",
      "z軸: deviceorientation.gamma",
    ];
  }, []);

  const accelerationLists = useMemo(() => {
    return [
      "x軸(西から東へ向かう軸): acceleration.x",
      "y軸(南から北へ向かう軸): acceleration.y",
      "z軸(地面から直立する軸): acceleration.z",
    ];
  }, []);

  const accelerationIncludingGravityLists = useMemo(() => {
    return [
      "x軸: accelerationIncludingGravity.x",
      "y軸: accelerationIncludingGravity.y",
      "z軸: accelerationIncludingGravity.z",
    ];
  }, []);

  const rotationRateLists = useMemo(() => {
    return [
      "alpha軸(西から東へ向かう軸): rotationRate.x",
      "beta軸(南から北へ向かう軸): rotationRate.y",
      "gamma軸(地面から直立する軸): rotationRate.z",
    ];
  }, []);

  return (
    <Wrapper>
      {/*<ScrollableSnap sources={dummySnapSources} />*/}

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
  );
};

const Wrapper = styled.div`
  padding: 16px;
`;
