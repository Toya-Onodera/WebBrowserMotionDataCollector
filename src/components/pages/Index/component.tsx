import React from "react";
import { styled } from "twin.macro";

// component
import { ScrollableSnap } from "../../organisms/ScrollableSnap";

// hooks
import { useIndexHooks } from "./index";

export const IndexPage: React.VFC = () => {
  const { dummySnapSources } = useIndexHooks();

  return (
    <Wrapper>
      <ScrollableSnap sources={dummySnapSources} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
