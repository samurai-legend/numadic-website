import Blocks from "@/components/blocks/blockRenderer";
import {
  ContentWrapper,
  InnerContentWrapper,
} from "@/components/blocks/common";
import FooterBlock from "@/components/blocks/footerBlock";
import JoinUsBlock from "@/components/blocks/joinUsbBlock";
import Numads from "@/components/blocks/numads";
import Roadmap from "@/components/blocks/roadmap";
import ValueSlider from "@/components/blocks/valuesSlider";
import VerticalLine from "@/components/elements/VerticalLine";
import { SEO } from "@/components/layouts/seo";
import SmoothScroll, {
  ScrollDirection,
} from "@/components/layouts/smoothScroll";
import { Typography } from "@/components/typography";
import { TextEntryVariant } from "animations";
import AnimatedCharacters from "animations/animatedCharacters";
import client from "apollo-client";
import { AboutUsQuery } from "graphql/about-us";
import { GetStaticProps, GetStaticPropsResult } from "next";
import tw from "twin.macro";
import { CustomPage } from "types/pages";

const AboutUs: CustomPage = ({ blocksSections }: any) => {
  return (
    <SmoothScroll direction={ScrollDirection.vertical}>
      <div css={tw`flex flex-col w-full`}>
        <ContentWrapper>
          <InnerContentWrapper css={tw`gap-y-10 h-[110vh]`}>
            <div css={tw`flex flex-col gap-y-10`}>
              <AnimatedCharacters
                as="h1"
                isColor
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                css={tw`max-w-[400px] leading-[1.8rem]! 
            md:(max-w-[700px] leading-[3.5rem]!) 
            lg:(max-w-[700px] leading-[4.2rem]!) 
            xl:(max-w-[770px] leading-[4.4rem]!) 
            2xl:(max-w-[770px] leading-[5rem]!)`}
                text="We undisrupt movement."
              />
              <div css={tw`relative`}>
                <VerticalLine css={tw`absolute h-96 top-0`} inView />
              </div>
            </div>
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
              text="Undisrupt."
            />
            <Typography
              as="p"
              isColor
              type="quote"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={TextEntryVariant}
              css={tw`font-light max-w-6xl`}
            >
              Movement is typically chaotic and the industries that serve it,
              quite disrupted.
              <br /> We exist to simplify, optimise, automate and undisrupt
              movement.
            </Typography>
          </InnerContentWrapper>
        </ContentWrapper>

        <Roadmap />
        <ValueSlider />
        <Numads />
        <JoinUsBlock />

        <Blocks blocks={blocksSections} addHeight />
      </div>
    </SmoothScroll>
  );
};

AboutUs.innerPage = true;

export default AboutUs;
export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<AboutUsProps>> => {
  const { data } = await client.query(AboutUsQuery);
  const { aboutUsPage } = data;
  const sections = aboutUsPage?.data?.attributes.sections;
  const seo = aboutUsPage?.data?.attributes.seo;

  return {
    props: {
      seo: seo,
      blocksSections: sections,
    },
  };
};

interface AboutUsProps {
  seo: SEO;
  blocksSections: any;
}
