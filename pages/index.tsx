import LandingBlock from "@/components/blocks/landingBlock";
import SolutionsBlock from "@/components/blocks/solutionsBlock";
import UseCasesBlock from "@/components/blocks/useCasesBlock";
import MovementBlock from "@/components/blocks/movementBlock";
import type { NextPage } from "next";
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
const componentsArr = [
  <LandingBlock key={0} />,
  <SolutionsBlock key={1} />,
  <UseCasesBlock key={2} />,
  <MovementBlock key={3} />,
  <InvestorsBlock key={4} />,
  <FooterBlock key={5} />,
];

const Home: NextPage = (props: any) => {
  const arrLength = componentsArr.length;
  const [elRefs, setElRefs] = useState([]);

  const { setRefArr } = useContext(ScrollContext);

  useEffect(() => {
    elRefs?.length > 0 && setRefArr(elRefs);
  }, [elRefs]);

  useEffect(() => {
    setElRefs((elRefs) =>
      Array(arrLength)
        .fill(arrLength)
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [arrLength]);

  return (
    <>
      {componentsArr.map((el, key): any =>
        cloneElement(el, { key: key, ref: elRefs[key] })
      )}
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
