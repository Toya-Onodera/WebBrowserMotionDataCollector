import React from "react";
import styled from "styled-components";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

type Props = {
  text: string;
};

export const FloatingInfo: React.VFC<Props> = ({ text }) => (
  <Wrapper>
    <FontAwesomeIcon icon={faCircleInfo} />
    <TextInfo>{text}</TextInfo>
  </Wrapper>
);

const Wrapper = styled.div`
  position: fixed;
  padding: 16px;
  top: 16px;
  left: 0;
  background-color: #f56565;
  color: #fafafa;
`;

const TextInfo = styled.span`
  margin-left: 16px;
  font-weight: bold;
`;
