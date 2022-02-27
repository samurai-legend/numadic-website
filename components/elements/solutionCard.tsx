import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { forwardRef, useEffect, useState } from "react";
import tw from "twin.macro";
import { Typography } from "../typography";

const CardContainer = styled(motion.div)(() => [
  tw`w-full flex flex-row self-center items-start justify-start
  gap-x-5 px-2  text-white bg-[#333333]
   backdrop-blur-[30px] py-5 rounded-[2px]
    transition-all duration-300 ease-in cursor-pointer max-w-md`,
  tw`hover:(bg-white text-black)`,

  tw`lg:(w-1/3 flex-col px-5 py-5 gap-y-1 items-start justify-start self-stretch)`,
  tw`xl:(px-5 py-5 gap-y-1)`,
  tw`2xl:(px-16 py-10 gap-y-5)`,
  tw`w-h-lg:(px-5 py-4 gap-x-5 flex-row items-start)`,
  css`
    flex: 1 0 auto;
    &:hover {
      svg {
        [class$="stroke-black"] {
          stroke: black;
        }
      }
    }
  `,
]);

const SolutionCard: React.FC<any> = forwardRef((props: any, ref: any) => {
  const { IconComponent, title, description, isAnimate } = props;
  const variants = {
    animate: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  const [animateObject, setAnimateObject] = useState({});

  useEffect(() => {
    isAnimate != null
      ? setAnimateObject({
          animate: isAnimate ? "animate" : "hidden",
        })
      : setAnimateObject({
          whileInView: "animate",
          viewport: { once: true },
        });
  }, [isAnimate]);

  return (
    <CardContainer
      initial="hidden"
      variants={variants}
      {...animateObject}
      transition={{
        duration: 0.5,
        type: "spring",
        damping: 10,
      }}
      ref={ref}
    >
      <div
        css={tw`w-16 h-16 min-w-[3rem] pt-2 w-h-lg:(pt-2) lg:(w-20 h-20 min-w-[5rem] pt-0)`}
      >
        <IconComponent />
      </div>
      <div>
        <Typography
          as="h3"
          css={tw`font-bold leading-[1.5rem] xl:leading-[3rem]`}
        >
          {title}
        </Typography>
        <Typography
          as="p"
          type="body-2"
          css={tw`leading-[1.2rem] xl:leading-[1.4rem]! 2xl:leading-[1.625rem]!`}
        >
          {description}
        </Typography>
      </div>
    </CardContainer>
  );
});
SolutionCard.displayName = "SolutionCard";
export default SolutionCard;
