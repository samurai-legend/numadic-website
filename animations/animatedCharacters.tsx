import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "@emotion/styled";
import { Typography } from "@/components/typography";

const Wrapper = styled.span(() => [tw`whitespace-nowrap`]);

const AnimatedCharacters: React.FC<any> = (props: any) => {
  const item = {
    hidden: {
      opacity: 0,
      y: "200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.5 },
    },
  };

  const splitWords = props.text.split(" ");

  const words: any[] = [];

  for (const [, item] of splitWords.entries()) {
    words.push(item.split(" "));
  }

  words.map((word) => {
    return word.push("\u00A0");
  });
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.01,
      },
    },
  };

  return (
    <Typography {...props} variants={container}>
      {words.map((word, index) => {
        return (
          <Wrapper key={index}>
            {word
              .flat()
              .map(
                (
                  element:
                    | boolean
                    | React.ReactChild
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined,
                  index: React.Key | null | undefined
                ) => {
                  return (
                    <span
                      css={tw`overflow-hidden inline-block pb-2`}
                      key={index}
                    >
                      <motion.span css={tw`inline-block`} variants={item}>
                        {element}
                      </motion.span>
                    </span>
                  );
                }
              )}
          </Wrapper>
        );
      })}
    </Typography>
  );
};

export default AnimatedCharacters;
