import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import tw from "twin.macro";
import { Typography } from "../typography";

const ContentBubble = styled(motion.div)((props: any) => [
  tw`bg-gray-medium w-[120px] px-5 py-5 rounded-xl text-left`,
  tw`md:(w-[200px])`,
  tw`lg:(w-[250px])`,
  tw`relative translate-y-1/2 flex flex-col items-start`,
  tw`before:(contents[""] absolute h-3 w-3 bg-gray-medium)`,
  tw`md:before:(h-5 w-5)`,
  tw`lg:before:(h-7 w-7)`,
  css`
    &:before {
      ${tw`z-[-1]`}
      border-radius: 0 0 8px 0;
    }
  `,
  props.direction == "right" && [
    tw`before:(right-[-6px] top-1/2 -translate-y-1/2 -rotate-45)`,
    tw`md:before:(right-[-10px])`,
    tw`lg:before:(right-[-10px])`,
  ],
  props.direction == "left" && [
    tw`before:(left-[-6px] top-1/2 -translate-y-1/2 rotate-[135deg])`,
    tw`md:before:(left-[-10px])`,
    tw`lg:before:(left-[-10px])`,
  ],
]);

const DotIndicator = styled(motion.span)(() => [
  tw`border-4 border-black-dark 
  absolute bottom-0 left-1/2
  h-6 w-6 rounded-full bg-white z-10 -translate-x-1/2 translate-y-1/2`,
]);

const TimeGoalWrapper = styled(motion.div)(() => [
  tw`w-full h-full relative`,
  css`
    display: flex;
    grid-area: span 1 / span 2;
    ${tw`after:(contents[""]
    )`}
    &:nth-child(2n + 1) {
      ${tw`justify-start`}
    }
    &:nth-child(2n) {
      ${tw`justify-end`}
    }
  `,
]);

const TimeGoal: React.FC<any> = ({ direction, year, goaldescription }: any) => {
  const bubbleVariant = {
    hidden: {
      scale: 0,
      opacity: 0,
      y: "50%",
    },
    visible: {
      scale: [0, 0.1, 1],
      opacity: [0, 0.5, 1],

      transition: {
        ease: "linear",
      },
    },
  };

  const dotVariant = {
    hidden: {
      scale: 0,
      opacity: 0,
      y: "50%",
      x: "-50%",
    },
    visible: {
      scale: [0, 0.1, 1],
      opacity: [0, 0.5, 1],

      transition: {
        ease: "linear",
      },
    },
  };

  return (
    <TimeGoalWrapper
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.5, delayChildren: 0.2 }}
    >
      <DotIndicator variants={dotVariant} />
      <ContentBubble variants={bubbleVariant} direction={direction}>
        <Typography as="p" isColor type="body-1" css={tw`font-bold leading-5!`}>
          {year}
        </Typography>
        <Typography as="p" isColor type="body-3" css={tw`leading-5! mt-2`}>
          {goaldescription}
        </Typography>
      </ContentBubble>
    </TimeGoalWrapper>
  );
};

export default TimeGoal;
