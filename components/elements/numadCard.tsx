import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import tw from "twin.macro";
import { Typography } from "../typography";

const ImageContainer = styled.div(() => [
  tw`relative w-full h-80`,
  css`
    .image-filter {
      ${tw`transition-all duration-200 ease-in-out`}
      filter: brightness(0%) opacity(15%);
      &:hover {
        filter: brightness(100%) opacity(100%);
      }
    }
  `,
]);

const NumadsCard: React.FC<any> = ({ src, name, ocupation }: any) => {
  return (
    <div
      css={tw`relative w-full h-full flex flex-col items-center text-center`}
    >
      <ImageContainer>
        <Image
          src={src}
          layout="fill"
          objectFit="contain"
          className="image-filter"
        />
      </ImageContainer>

      <div css={tw`mt-5`}>
        <Typography as="p" isColor css={tw`font-bold leading-6!`} type="body-1">
          {name}
        </Typography>
        <Typography as="p" isColor css={tw`font-thin`} type="body-3">
          {ocupation}
        </Typography>
      </div>
    </div>
  );
};

export default NumadsCard;
