import LandingBlock from "@/components/blocks/landingBlock";
import SolutionsBlock from "@/components/blocks/solutionsBlock";
import UseCasesBlock from "@/components/blocks/useCasesBlock";
import MovementBlock from "@/components/blocks/movementBlock";
import { GetStaticProps } from "next";
import InvestorsBlock from "@/components/blocks/investorsBlock";
import FooterBlock from "@/components/blocks/footerBlock";
import {
  cloneElement,
  createRef,
  useContext,
  useEffect,
  useState,
} from "react";
import { ScrollContext } from "@/components/layouts/smoothScroll";
import { CustomPage } from "types/pages";
import HorizontalScroll from "@/components/layouts/horizontalScroll";

const componentsArr = [
  <LandingBlock key={0} />,
  <SolutionsBlock key={1} />,
  <UseCasesBlock key={2} />,
  <MovementBlock key={3} />,
  <InvestorsBlock key={4} />,
  <FooterBlock key={5} />,
];

const Home: CustomPage = (props: any) => {
  const arrLength = componentsArr.length;
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((elRefs) =>
      Array(arrLength)
        .fill(arrLength)
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [arrLength]);

  return (
    <HorizontalScroll elRefs={elRefs}>
      {componentsArr.map((el, key): any =>
        cloneElement(el, { key: key, ref: elRefs[key] })
      )}
    </HorizontalScroll>
  );
};
Home.innerPage = false;
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
