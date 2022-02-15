import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import tw from "twin.macro";
import { Typography } from "../typography";

const CardContainer = styled(motion.div)(() => [
  tw`flex flex-col self-stretch items-start justify-center
  gap-y-5 px-5 text-white bg-[#333333]
   w-1/3 backdrop-blur-[30px] py-10 rounded-[2px]
    transition-all duration-300 ease-in cursor-pointer`,
  tw`hover:(bg-white text-black)`,
  tw`lg:(px-5 py-5 gap-y-1)`,
  tw`xl:(px-5 py-5 gap-y-1)`,
  tw`2xl:(px-16 py-10 gap-y-5)`,
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
  return (
    <CardContainer
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: isAnimate ? 1 : 0,
      }}
      transition={{
        duration: 0.5,
        type: "spring",
        damping: 5,
      }}
      ref={ref}
    >
      <IconComponent />
      <div>
        <Typography as="h3" css={tw`font-bold leading-[1.5rem] xl:leading-[3rem]`}>
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
