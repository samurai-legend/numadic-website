import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { forwardRef, FunctionComponent } from "react";
import tw from "twin.macro";

const CardContainer = styled(motion.div)(() => [
  tw`flex flex-col self-stretch items-start justify-center gap-y-5 px-16 text-white bg-[#333333] w-1/3 backdrop-blur-[30px] py-10 rounded-[2px] transition-all duration-300 ease-in cursor-default`,
  tw`hover:(bg-white text-black)`,
  css`
    flex: 1 0 auto;
  `,
]);

const Title = styled.h3(() => [tw`text-heading-3 font-bold  leading-[3rem]`]);

const Description = styled.p(() => [
  tw`text-body-2 font-normal leading-[1.625rem]`,
]);

const SolutionCard: FunctionComponent<any> = forwardRef(
  (props: any, ref: any) => {
    const { IconComponent, title, description, isAnimate } = props;
    return (
      <CardContainer
        initial={{
          scale: 1,
          opacity: 0,
        }}
        animate={{
          scale: isAnimate ? [0.4, 0.6, 0.4, 1] : [1, 0, 1],
          opacity: isAnimate ? [1, 1, 1, 1] : [1, 0, 0],
        }}
        transition={{
          duration: 1,
          type: "spring",
          damping: 5,
          mass: 0.5,
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
  }
);

export default SolutionCard;
