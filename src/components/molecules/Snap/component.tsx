import React from "react";
import styled from "styled-components";

// atoms
import { Image, ImageProps } from "../../atoms/Image";

export const Snap: React.VFC<ImageProps> = ({ src }) => {
  return (
    <Wrapper>
      <Image src={src} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
