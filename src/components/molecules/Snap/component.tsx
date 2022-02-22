import React from "react";
import tw, { styled } from "twin.macro";

// atoms
import { Image, ImageProps } from "../../atoms/Image";

export const Snap: React.VFC<ImageProps> = ({ src }) => {
  return (
    <Wrapper>
      <Image src={src} />
    </Wrapper>
  );
};

// ${tw`snap-center`}
const Wrapper = styled.div``;
