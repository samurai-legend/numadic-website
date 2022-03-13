import {
  ContentWrapper,
  InnerContentWrapper,
} from "@/components/blocks/common";
import FooterBlock from "@/components/blocks/footerBlock";
import Numads from "@/components/blocks/numads";
import Roadmap from "@/components/blocks/roadmap";
import ValueSlider from "@/components/blocks/valuesSlider";
import VerticalLine from "@/components/elements/VerticalLine";
import { SEO } from "@/components/layouts/seo";
import SmoothScroll, {
  ScrollDirection,
} from "@/components/layouts/smoothScroll";
import AnimatedCharacters from "animations/animatedCharacters";
import client from "apollo-client";
import { AboutUsQuery } from "graphql/about-us";
import { GetStaticProps, GetStaticPropsResult } from "next";
import tw from "twin.macro";
import { CustomPage } from "types/pages";

const AboutUs: CustomPage = (props: any) => {
  return (
    <SmoothScroll direction={ScrollDirection.vertical}>
      <div css={tw`flex flex-col w-full`}>
        <ContentWrapper>
          <InnerContentWrapper
            css={tw`gap-y-10 h-[calc(100vh - 121px)] mt-[121px]`}
          >
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
            <VerticalLine css={tw`h-60 md:h-80 bottom-16`} inView />
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
            <AnimatedCharacters
              as="p"
              isColor
              type="quote"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              css={tw`font-normal`}
              text="Movement is typically chaotic and the industries that serve it, quite disrupted. 
            We exist to simplify, optimise, automate and undisrupt movement."
            />
          </InnerContentWrapper>
        </ContentWrapper>

        <Roadmap />
        <ValueSlider />
        <Numads />
        <FooterBlock />
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
  const seo = aboutUsPage?.data?.attributes.seo;

  return {
    props: {
      seo: seo,
    },
  };
};

interface AboutUsProps {
  seo: SEO;
}
