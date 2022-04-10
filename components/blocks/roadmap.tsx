import styled from "@emotion/styled";
import { TextEntryVariant } from "animations";
import AnimatedCharacters from "animations/animatedCharacters";

import { useRef } from "react";
import tw from "twin.macro";
import RoadMapTimeline from "../elements/roadMapTimeline";
import VerticalLine from "../elements/VerticalLine";
import { Typography } from "../typography";
import { ContentWrapper, InnerContentWrapper } from "./common";

const RoadmapBlock: React.FC<any> = (props: any) => {
  const ref = useRef<any>(null);
  const arrowRef = useRef<any>(null);

  return (
    <ContentWrapper ref={ref}>
      <InnerContentWrapper padding>
        <div css={tw`flex flex-col items-center`}>
          <Typography
            as="span"
            type="overline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
          >
            OUR JOURNEY
          </Typography>
          <AnimatedCharacters
            as="h2"
            isColor
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            css={tw`leading-[1.25rem] max-w-full text-center 2xl:(max-w-6xl) md:(max-w-3xl) lg:(text-left max-w-4xl)`}
            text="Movement is life."
          />
        </div>
        <div css={tw`w-full h-full relative`}>
          <RoadMapTimeline />
          <VerticalLine
            scroll
            scrollRef={ref}
            ref={arrowRef}
            css={tw`h-full w-full mt-20 absolute top-0 left-1/2 -translate-x-1/2`}
          />
        </div>
      </InnerContentWrapper>
    </ContentWrapper>
  );
};

export default RoadmapBlock;
