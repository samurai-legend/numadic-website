import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { TextEntryVariant } from "animations";
import Image from "next/image";
import tw from "twin.macro";
import { Typography } from "../typography";
import { ContentWrapper, InnerContentWrapper } from "./common";

const LookingForBlock: React.FC<any> = (props: any) => {
  return (
    <ContentWrapper>
      <InnerContentWrapper padding>
        <div css={tw`grid grid-flow-row grid-cols-2 w-full gap-4`}>
          <ResponsiveImage css={tw`col-span-2`}>
            <Image
              src="/images/team-1.png"
              layout="fill"
              objectFit="cover"
              className="res-image"
              alt="image"
            />
          </ResponsiveImage>
          <ResponsiveImage>
            <Image
              src="/images/team-2.png"
              layout="fill"
              objectFit="cover"
              className="res-image"
              alt="image"
            />
          </ResponsiveImage>
          <ResponsiveImage>
            <Image
              src="/images/team-3.png"
              layout="fill"
              objectFit="cover"
              className="res-image"
              alt="image"
            />
          </ResponsiveImage>
        </div>
      </InnerContentWrapper>
      <InnerContentWrapper padding>
        <Typography
          as="p"
          isColor
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={TextEntryVariant}
          css={tw`font-light max-w-5xl text-heading-2! my-10`}
        >
          We are looking for full-stack humans that can support us, and
          challenge the boundaries of technology and imagination, every day. We
          know you will learn from us and we expect to be taught new things by
          you.
        </Typography>
        <Typography
          as="p"
          isColor
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={TextEntryVariant}
          css={tw`font-light max-w-5xl text-heading-2! my-10`}
        >
          We invite you to bring your personal experience, your knowledge, and
          your creativity to shape the way we enable the future of autonomous
          mobility.
        </Typography>
      </InnerContentWrapper>
    </ContentWrapper>
  );
};

export default LookingForBlock;

const ResponsiveImage = styled.div(() => [
  tw``,
  css`
    div,
    span {
      position: unset !important;
    }

    .res-image {
      object-fit: contain;
      width: 100% !important;
      position: relative !important;
      height: unset !important;
    }
  `,
]);
