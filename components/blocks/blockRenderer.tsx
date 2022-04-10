import dynamic from "next/dynamic";
import { createRef, useEffect, useState } from "react";
import JoinIfBlock from "./joinIfBlock";
import JoinUsBlock from "./joinUsbBlock";
import LandingInnerBlock from "./landingInner";
import LookingForBlock from "./lookingforBlock";
import Numads from "./numads";
import QuoteBlock from "./quoteBlock";
import RoadmapBlock from "./roadmap";
import ValueSlider from "./valuesSlider";

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

const Blocks: React.FC<any> = ({ blocks, setRefs, addHeight }: any) => {
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

        ComponentSectionsJoinUs: (
          <JoinUsBlock key={index} ref={elRefs[index]} data={block} />
        ),
        ComponentSectionsLandingInner: (
          <LandingInnerBlock key={index} ref={elRefs[index]} data={block} />
        ),

        ComponentSectionsNumads: (
          <Numads key={index} ref={elRefs[index]} data={block} />
        ),
        ComponentSectionsQuote: (
          <QuoteBlock key={index} ref={elRefs[index]} data={block} />
        ),

        ComponentSectionsRoadmap: (
          <RoadmapBlock key={index} ref={elRefs[index]} data={block} />
        ),
        ComponentSectionsValues: (
          <ValueSlider key={index} ref={elRefs[index]} data={block} />
        ),
        ComponentSectionsJoinIf: (
          <JoinIfBlock key={index} ref={elRefs[index]} data={block} />
        ),
        ComponentSectionsLookingFor: (
          <LookingForBlock key={index} ref={elRefs[index]} data={block} />
        ),
        ComponentSectionsReachOut: <></>,
        ComponentSectionsFooter: (
          <FooterBlock
            key={index}
            ref={elRefs[index]}
            data={block}
            addHeight={addHeight && addHeight}
          />
        ),
      }[block.__typename])
  );
};

export default Blocks;
