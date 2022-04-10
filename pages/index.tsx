import { GetStaticProps, GetStaticPropsResult } from "next";
import { useState } from "react";
import { CustomPage } from "types/pages";
import HorizontalScroll from "@/components/layouts/horizontalScroll";
import client from "apollo-client";
import { HomepageDocument } from "graphql/homepage";
import Blocks from "@/components/blocks/blockRenderer";
import { SEO } from "@/components/layouts/seo";

const Home: CustomPage<HomepageProps> = ({ blocksSections }) => {
  const [refs, setRefs] = useState([]);

  return (
    <HorizontalScroll elRefs={refs}>
      <Blocks setRefs={setRefs} blocks={blocksSections} />
    </HorizontalScroll>
  );
};
Home.innerPage = false;
export default Home;

export const getStaticProps: GetStaticProps = async (
  context
): Promise<GetStaticPropsResult<HomepageProps>> => {
  const { data } = await client.query(HomepageDocument);

  const { homepage } = data;
  const sections = homepage?.data?.attributes.sections;
  const seo = homepage?.data?.attributes.seo;

  return {
    props: {
      seo: seo,
      blocksSections: sections,
    },
    revalidate: 60,
  };
};

interface HomepageProps {
  blocksSections: any;
  seo: SEO;
}
