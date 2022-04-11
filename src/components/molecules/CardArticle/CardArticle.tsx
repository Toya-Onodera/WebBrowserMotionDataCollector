import React from "react";
import styled from "styled-components";

// components
import { H2 } from "../../atoms/Heading";

type Props = {
  heading: string;
};

export const CardArticle: React.FC<Props> = ({ children, heading }) => (
  <Wrapper>
    <H2>{heading}</H2>

    {children}
  </Wrapper>
);

const Wrapper = styled.article`
  padding: 16px;
  background-color: #fafafa;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
