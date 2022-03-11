import { GetStaticProps } from "next";
import { useState } from "react";
import { CustomPage } from "types/pages";
import HorizontalScroll from "@/components/layouts/horizontalScroll";
import client from "apollo-client";
import { HomepageQuery } from "graphql/homepage";
import Blocks from "@/components/blocks/blockRenderer";

const Home: CustomPage = ({ blocksSections, seo }: any) => {
  const [refs, setRefs] = useState([]);
 
  return (
    <HorizontalScroll elRefs={refs}>
      <Blocks setRefs={setRefs} blocks={blocksSections} />
    </HorizontalScroll>
  );
};
Home.innerPage = false;
export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await client.query(HomepageQuery);
  const { homepage } = data;
  const blockSections = homepage?.data?.attributes.sections;

  return {
    props: {
      seo: {
        title: "Homepage",
      },
      blocksSections: blockSections,
    },
    revalidate: 60,
  };
};
