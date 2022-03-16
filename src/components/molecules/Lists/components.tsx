import React from "react";
import styled from "styled-components";

// components
import { ListChildren } from "../../atoms/ListChildren";

type Props = {
  values: string[];
};

export const List: React.VFC<Props> = ({ values }) => (
  <Wrapper>
    {values &&
      values.map((value, i) => (
        <ListChildren key={`ListChildren-${i}`}>{value}</ListChildren>
      ))}
  </Wrapper>
);

const Wrapper = styled.ul``;
