import React, { ReactText } from "react";
import styled from "styled-components";

type Props = {
  children: ReactText;
};

export const H2: React.VFC<Props> = ({ children }) => (
  <H2Wrapper>{children}</H2Wrapper>
);

export const H3: React.VFC<Props> = ({ children }) => (
  <H3Wrapper>{children}</H3Wrapper>
);

const H2Wrapper = styled.h2`
  padding: 16px;
  margin-bottom: 16px;
  font-size: 24px;
  border-left: 4px solid #424242;
`;

const H3Wrapper = styled.h3`
  margin-top: 16px;
  margin-bottom: 16px;
`;
