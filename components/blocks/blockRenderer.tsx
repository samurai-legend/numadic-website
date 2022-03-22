import dynamic from "next/dynamic";
import { createRef, useEffect, useState } from "react";

const FooterBlock = dynamic(() => import("@/components/blocks/footerBlock"));
const InvestorsBlock = dynamic(
  () => import("@/components/blocks/investorsBlock")
);
const UseCasesBlock = dynamic(
  () => import("@/components/blocks/useCasesBlock")
);
const LandingBlock = dynamic(() => import("@/components/blocks/landingBlock"));
const SolutionsBlock = dynamic(
  () => import("@/components/blocks/solutionsBlock")
);
const MovementBlock = dynamic(
  () => import("@/components/blocks/movementBlock")
);

const Blocks: React.FC<any> = ({ blocks, setRefs }: any) => {
  const arrLength = blocks.length;
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((elRefs) =>
      Array(arrLength)
        .fill(arrLength)
        .map((_, i) => elRefs[i] || createRef())
    );
  }, [arrLength]);

  useEffect(() => {
    elRefs.length > 0 && setRefs && setRefs(elRefs);
  }, [elRefs, setRefs]);

  return blocks.map(
    (block: { __typename: string | number }, index: any) =>
      ({
        ComponentSectionsLanding: (
          <LandingBlock key={index} ref={elRefs[index]} data={block} />
        ),
        ComponentSectionsSolutions: (
          <SolutionsBlock key={index} ref={elRefs[index]} data={block} />
        ),
        ComponentSectionsUseCases: (
          <UseCasesBlock key={index} ref={elRefs[index]} data={block} />
        ),
        ComponentSectionsMovement: (
          <MovementBlock key={index} ref={elRefs[index]} data={block} />
        ),
        ComponentSectionsInvestors: (
          <InvestorsBlock key={index} ref={elRefs[index]} data={block} />
        ),
        ComponentSectionsFooter: (
          <FooterBlock key={index} ref={elRefs[index]} data={block} />
        ),
      }[block.__typename])
  );
};

export default Blocks;
