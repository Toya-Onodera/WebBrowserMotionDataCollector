import React from "react";
import { styled } from "twin.macro";

export type ImageProps = {
  src: string;
};

export const Image: React.VFC<ImageProps> = ({ src }) => {
  return <Wrapper src={src} />;
};

const Wrapper = styled.img``;
