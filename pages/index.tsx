import LandingBlock from "@/components/blocks/landingBlock";
import type { NextPage } from "next";
import { GetStaticProps } from "next";

const Home: NextPage = (props: any) => {
  return (
    <>
      <LandingBlock />
      <LandingBlock />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      seo: {
        title: "Homepage",
      },
    },
  };
};
