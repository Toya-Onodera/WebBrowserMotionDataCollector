import React from "react";
import tw, { styled } from "twin.macro";

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

// ${tw`snap-x`}
const Wrapper = styled.div``;
