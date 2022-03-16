import React from "react";
import styled from "styled-components";

// components
import { H3 } from "../../atoms/Heading";

type Props = {
  heading: string;
};

export const Section: React.FC<Props> = ({ children, heading }) => (
  <Wrapper>
    <H3>{heading}</H3>

    {children}
  </Wrapper>
);

const Wrapper = styled.section``;
