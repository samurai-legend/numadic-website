import LandingBlock from "@/components/blocks/landingBlock";
import SolutionsBlock from "@/components/blocks/solutionsBlock";
import UseCasesBlock from "@/components/blocks/useCasesBlock";
import MovementBlock from "@/components/blocks/movementBlock";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import InvestorsBlock from "@/components/blocks/investorsBlock";
import FooterBlock from "@/components/blocks/footerBlock";

const Home: NextPage = (props: any) => {
  return (
    <>
      <LandingBlock />
      <SolutionsBlock />
      <UseCasesBlock />
      <MovementBlock />
      <InvestorsBlock />
      <FooterBlock />
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
