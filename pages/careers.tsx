import {
  ContentWrapper,
  InnerContentWrapper,
} from "@/components/blocks/common";
import VerticalLine from "@/components/elements/VerticalLine";
import SmoothScroll, {
  ScrollDirection,
} from "@/components/layouts/smoothScroll";
import { Typography } from "@/components/typography";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { TextEntryVariant } from "animations";
import AnimatedCharacters from "animations/animatedCharacters";
import Image from "next/image";
import tw from "twin.macro";
import { CustomPage } from "types/pages";

const Careers: CustomPage = (props: any) => {
  return (
    <SmoothScroll direction={ScrollDirection.vertical}>
      <div css={tw`flex flex-col w-full`}>
        <ContentWrapper>
          <InnerContentWrapper css={tw`gap-y-10 h-[120vh]`}>
            <div css={tw`flex flex-col gap-y-10`}>
              <Typography
                as="p"
                isColor
                type="quote"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={TextEntryVariant}
                css={tw`font-light max-w-5xl`}
              >
                We lead, we innovate, we simplify and we learn from each other
                as we embark on the journey to undisrupt movement.
              </Typography>
              <div css={tw`relative`}>
                <VerticalLine css={tw`absolute h-72 top-0`} inView />
              </div>
            </div>
          </InnerContentWrapper>
        </ContentWrapper>
        <ContentWrapper>
          <InnerContentWrapper padding>
            <div css={tw`grid grid-flow-row grid-cols-2 w-full gap-4`}>
              <ResponsiveImage css={tw`col-span-2`}>
                <Image
                  src="/images/team-1.png"
                  layout="fill"
                  objectFit="cover"
                  className="res-image"
                />
              </ResponsiveImage>
              <ResponsiveImage>
                <Image
                  src="/images/team-2.png"
                  layout="fill"
                  objectFit="cover"
                  className="res-image"
                />
              </ResponsiveImage>
              <ResponsiveImage>
                <Image
                  src="/images/team-3.png"
                  layout="fill"
                  objectFit="cover"
                  className="res-image"
                />
              </ResponsiveImage>
            </div>
          </InnerContentWrapper>
        </ContentWrapper>
        <ContentWrapper>
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
              challenge the boundaries of technology and imagination, every day.
              We know you will learn from us and we expect to be taught new
              things by you.
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
              We invite you to bring your personal experience, your knowledge,
              and your creativity to shape the way we enable the future of
              autonomous mobility.
            </Typography>
          </InnerContentWrapper>
        </ContentWrapper>
        <ContentWrapper>
          <InnerContentWrapper padding>
            <AnimatedCharacters
              as="h2"
              isColor
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              css={tw`max-w-[400px] font-bold leading-[1.8rem]! 
            md:(max-w-[700px] leading-[3.5rem]!) 
            lg:(max-w-[700px] leading-[4.2rem]!) 
            xl:(max-w-[770px] leading-[4.4rem]!) 
            2xl:(max-w-[770px] leading-[5rem]!)`}
              text="Join us if you are..."
            />
            <div css={tw`grid grid-flow-row grid-cols-3 gap-4`}>
              <RequirementsCard>
                <Typography
                  as="p"
                  isColor
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={TextEntryVariant}
                  css={tw`font-thin max-w-5xl text-gray-light text-heading-2!`}
                >
                  <span className="gradient-text">Humble</span>, yet passionate
                </Typography>
              </RequirementsCard>
              <RequirementsCard>
                <Typography
                  as="p"
                  isColor
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={TextEntryVariant}
                  css={tw`font-thin max-w-5xl text-gray-light text-heading-2!`}
                >
                  A true
                  <br />
                  <span className="gradient-text">team player</span>
                </Typography>
              </RequirementsCard>
              <RequirementsCard>
                <Typography
                  as="p"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={TextEntryVariant}
                  css={tw`font-thin max-w-5xl text-gray-light text-heading-2!`}
                >
                  <span className="gradient-text">Humble</span>, yet passionate
                </Typography>
              </RequirementsCard>
              <RequirementsCard>
                <Typography
                  as="p"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={TextEntryVariant}
                  css={tw`font-thin max-w-5xl text-gray-light text-heading-2!`}
                >
                  <span className="gradient-text">Humble</span>, yet passionate
                </Typography>
              </RequirementsCard>
            </div>
            <div css={tw`relative w-full h-96 mt-32`}>
              <VerticalLine css={tw`relative h-full`} inView />
            </div>
          </InnerContentWrapper>
        </ContentWrapper>
      </div>
    </SmoothScroll>
  );
};

Careers.innerPage = true;

export default Careers;

const RequirementsCard = styled.div(() => [
  tw`
    p-10 flex justify-start items-end bg-gray-medium text-left h-80
`,
  css`
    .gradient-text {
      ${tw`font-bold`}
      background: -webkit-linear-gradient(100.66deg, #8EB1F4 14.3%, #FF9DCE 98.58%, #6FEBFC 98.81%, #FFC7A4 194.6%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `,
]);

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
