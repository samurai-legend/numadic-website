import LandingBlock from "@/components/blocks/landingBlock";
import SolutionsBlock from "@/components/blocks/solutionsBlock";
import UseCasesBlock from "@/components/blocks/useCasesBlock";
import type { NextPage } from "next";
import { GetStaticProps } from "next";

const Home: NextPage = (props: any) => {
  return (
    <>
      <LandingBlock />
      <SolutionsBlock />
      <UseCasesBlock />
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
