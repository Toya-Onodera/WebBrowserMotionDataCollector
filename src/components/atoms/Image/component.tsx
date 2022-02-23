import React from "react";
import styled from "styled-components";

export type ImageProps = {
  src: string;
};

export const Image: React.VFC<ImageProps> = ({ src }) => {
  return <Wrapper src={src} />;
};

const Wrapper = styled.img``;
