import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import tw from "twin.macro";

const CardContainer = styled(motion.div)(() => [
  tw`flex items-center justify-center gap-x-16 text-white bg-[#333333] w-3/5 backdrop-blur-[30px] py-3 rounded-[2px] transition-all duration-300 ease-in cursor-default`,
  tw`hover:(bg-white text-black)`,
]);

const Title = styled.h3(() => [tw`text-heading-3 font-bold  leading-[3rem]`]);

const Description = styled.p(() => [
  tw`text-body-2 font-normal leading-[1.625rem]`,
]);

const SolutionCard: FunctionComponent<any> = (props: any) => {
  const { IconComponent, title, description, isAnimate } = props;
  return (
    <CardContainer
      animate={{
        y: isAnimate ? 0 : "100%",
        opacity: isAnimate ? 1 : 0,
      }}
      transition={{
        duration: 1,
        type: "spring",
      }}
    >
      <IconComponent />
      <div css={tw`w-1/2`}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </CardContainer>
  );
};

export default SolutionCard;
