import React from "react";
import styled from "styled-components";

// component
import { ScrollableSnap } from "../../organisms/ScrollableSnap";

// hooks
import { useIndexHooks } from "./index";

export const IndexPage: React.VFC = () => {
  const { dummySnapSources } = useIndexHooks();

  return (
    <Wrapper>
      {/*<ScrollableSnap sources={dummySnapSources} />*/}

      <Article>
        <H2>端末情報</H2>
        <List>
          <ListChildren>ブラウザ名: platform.name</ListChildren>
          <ListChildren>ブラウザバージョン: platform.version</ListChildren>
          <ListChildren>端末名: platform.product</ListChildren>
          <ListChildren>端末OS名: platform.os.family</ListChildren>
        </List>
      </Article>

      <Article>
        <H2>センサ情報</H2>

        <Section>
          <H3>デバイスの向き</H3>
          <List>
            <ListChildren>x軸: deviceorientation.alpha</ListChildren>
            <ListChildren>y軸: deviceorientation.beta</ListChildren>
            <ListChildren>z軸: deviceorientation.gamma</ListChildren>
          </List>
        </Section>

        <Section>
          <H3>加速度(重力を含まない)</H3>
          <List>
            <ListChildren>x軸(西から東へ向かう軸): acceleration.x</ListChildren>
            <ListChildren>y軸(南から北へ向かう軸): acceleration.y</ListChildren>
            <ListChildren>z軸(地面から直立する軸): acceleration.z</ListChildren>
          </List>
        </Section>

        <Section>
          <H3>加速度(重力を含む)</H3>
          <List>
            <ListChildren>x軸: accelerationIncludingGravity.x</ListChildren>
            <ListChildren>y軸: accelerationIncludingGravity.y</ListChildren>
            <ListChildren>z軸: accelerationIncludingGravity.z</ListChildren>
          </List>
        </Section>

        <Section>
          <H3>加速度(重力を含まない)</H3>
          <List>
            <ListChildren>
              alpha軸(西から東へ向かう軸): rotationRate.x
            </ListChildren>
            <ListChildren>
              beta軸(南から北へ向かう軸): rotationRate.y
            </ListChildren>
            <ListChildren>
              gamma軸(地面から直立する軸): rotationRate.z
            </ListChildren>
          </List>
        </Section>
      </Article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 16px;
`;

const Article = styled.article`
  padding: 16px;
  background-color: #fafafa;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const Section = styled.section``;

const H2 = styled.h2`
  padding: 16px;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 24px;
  border-left: 4px solid #424242;
`;

const H3 = styled.h3`
  margin-top: 16px;
  margin-bottom: 16px;
  font-weight: bold;
`;

const List = styled.ul``;

const ListChildren = styled.li`
  margin-top: 12px;
  margin-bottom: 12px;
`;
