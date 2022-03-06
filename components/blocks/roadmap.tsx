import styled from "@emotion/styled";
import { TextEntryVariant } from "animations";
import AnimatedCharacters from "animations/animatedCharacters";
import { useTransform } from "framer-motion";
import useElementScrollProgress from "hooks/elementScrollProgress";
import { useEffect, useRef, useState } from "react";
import tw from "twin.macro";
import VerticalLine from "../elements/VerticalLine";
import { Typography } from "../typography";
import { ContentWrapper, InnerContentWrapper } from "./common";

const Roadmap: React.FC<any> = (props: any) => {
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
        <div css={tw`h-[1090px]`}>
          <VerticalLine
            scroll
            scrollRef={ref}
            ref={arrowRef}
            css={tw`h-full w-full mt-20`}
          />
        </div>
      </InnerContentWrapper>
    </ContentWrapper>
  );
};

export default Roadmap;
