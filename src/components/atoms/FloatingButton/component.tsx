import React from "react";
import styled from "styled-components";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
  icon: IconProp;
};

export const FloatingButton: React.VFC<Props> = ({ icon }) => (
  <Wrapper>
    <FontAwesomeIcon icon={icon} />
  </Wrapper>
);

const Wrapper = styled.div`
  position: fixed;
  padding: 24px;
  bottom: 16px;
  right: 16px;
  background-color: #4299e1;
`;
