import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import tw from "twin.macro";

const CardContainer = styled(motion.div)(() => [
  tw`flex flex-col self-stretch items-start justify-center
  gap-y-5 px-16 text-white bg-[#333333] w-1/3 backdrop-blur-[30px] py-10 rounded-[2px] transition-all duration-300 ease-in cursor-pointer`,
  tw`hover:(bg-white text-black)`,
  tw`lg:(px-5 py-5 gap-y-1)`,
  tw`xl:(px-8 py-8 gap-y-1)`,
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

const Title = styled.h3(() => [
  tw`text-heading-3 font-bold  leading-[3rem]`,
  tw`lg:(text-heading-3-lg)`,
  tw`xl:(text-heading-3)`,
]);

const Description = styled.p(() => [
  tw`text-body-2 font-normal leading-[1.625rem]`,
  tw`lg:(text-body-2-lg leading-[1.25rem])`,
  tw`xl:(text-body-2 leading-[1.625rem])`,
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
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </CardContainer>
  );
});
SolutionCard.displayName = "SolutionCard";
export default SolutionCard;
