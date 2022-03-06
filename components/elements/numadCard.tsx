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
      filter: brightness(0%);
      &:hover {
        filter: brightness(100%);
      }
    }
  `,
]);

const NumadsCard: React.FC<any> = (props: any) => {
  return (
    <div
      css={tw`relative w-full h-full flex flex-col items-center text-center`}
    >
      <ImageContainer>
        <Image
          src="/images/luke.png"
          layout="fill"
          objectFit="contain"
          className="image-filter"
        />
      </ImageContainer>

      <div css={tw`mt-5`}>
        <Typography as="h3" isColor css={tw`font-normal leading-6!`}>
          Luke
        </Typography>
        <Typography as="p" isColor css={tw`font-normal`} type="body-3">
          Founder, CEO
        </Typography>
      </div>
    </div>
  );
};

export default NumadsCard;
