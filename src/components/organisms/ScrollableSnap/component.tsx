import React from "react";
import styled from "styled-components";

// molecules
import { Snap } from "../../molecules/Snap";

export type Props = {
  sources: string[];
};

export const ScrollableSnap: React.VFC<Props> = ({ sources }) => {
  return (
    <Wrapper>
      {sources &&
        sources.map((source, i) => <Snap key={`snap-${i}`} src={source} />)}
    </Wrapper>
  );
};

const Wrapper = styled.div``;
