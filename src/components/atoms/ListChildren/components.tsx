import React from "react";
import styled from "styled-components";

export const ListChildren: React.FC = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

const Wrapper = styled.li`
  margin-top: 12px;
  margin-bottom: 12px;
`;
