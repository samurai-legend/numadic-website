import Blocks from "@/components/blocks/blockRenderer";

import { SEO } from "@/components/layouts/seo";
import SmoothScroll, {
  ScrollDirection,
} from "@/components/layouts/smoothScroll";
import client from "apollo-client";
import { ContactUsQuery } from "graphql/contact-us";
import { GetStaticProps, GetStaticPropsResult } from "next";
import tw from "twin.macro";
import { CustomPage } from "types/pages";

const Careers: CustomPage = ({ blocksSections }: any) => {
  return (
    <SmoothScroll direction={ScrollDirection.vertical}>
      <div css={tw`flex flex-col w-full`}>
        <Blocks blocks={blocksSections} addHeight />
      </div>
    </SmoothScroll>
  );
};

Careers.innerPage = true;

export default Careers;

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<AboutUsProps>> => {
  const { data } = await client.query(ContactUsQuery);
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
