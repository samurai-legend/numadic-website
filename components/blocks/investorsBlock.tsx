import tw from "twin.macro";
import { ContentWrapper, SectionContainer } from "./common";
import MapPattern from "@/svg/movement/map.svg";
import { forwardRef, useRef } from "react";
import NineUnifcornLogo from "@/svg/brands/9unifcorn.svg";
import CvwLogo from "@/svg/brands/cvw.svg";
import DynamoLogo from "@/svg/brands/dynamo.svg";
import SapStartupLogo from "@/svg/brands/sap_startup.svg";
import { motion } from "framer-motion";
import { TextEntryVariant } from "animations";
import AnimatedCharacters from "animations/animatedCharacters";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import VerticalLine from "../elements/VerticalLine";

const LogoContainer = styled.div(() => [
  tw`relative justify-self-center`,
  css`
    svg {
      ${tw`w-full h-10 lg:(w-52 h-20)`}
    }
  `,
]);

const InvestorsBlock: React.FC<any> = forwardRef((props: any, ref: any) => {
  return (
    <SectionContainer ref={ref}>
      <div
        css={tw`absolute w-screen h-full flex justify-center items-center z-0 `}
      >
        <MapPattern />
      </div>
      <ContentWrapper css={tw`flex flex-col justify-between `}>
        <div
          css={tw`grid grid-flow-row gap-4 text-center grid-cols-1 lg:(grid-cols-2 grid-flow-col text-left)`}
        >
          <AnimatedCharacters
            as="h2"
            isColor
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            css={tw`leading-[2.75rem] max-w-full
             text-center 2xl:(leading-[3.75rem]) 
             lg:(max-w-md! text-left)`}
            text="Fueled by terrific investors"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
            css={tw`grid grid-rows-2 grid-flow-col gap-y-10 gap-x-10  lg:(gap-y-12)`}
          >
            <LogoContainer>
              <DynamoLogo />
            </LogoContainer>
            <LogoContainer>
              <CvwLogo />
            </LogoContainer>
            <LogoContainer>
              <NineUnifcornLogo />
            </LogoContainer>
            <LogoContainer>
              <SapStartupLogo />
            </LogoContainer>
          </motion.div>
        </div>
        <div
          css={tw`grid grid-cols-1 grid-flow-row gap-4 mt-10 mb-20 lg:(grid-cols-2 grid-flow-col mt-0)`}
        >
          <div
            css={tw`justify-self-center text-center lg:(justify-self-start text-left)`}
          >
            <AnimatedCharacters
              as="h2"
              isColor
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              css={tw`font-bold`}
              text="And you..."
            />
            <AnimatedCharacters
              as="p"
              type="body-1"
              isColor
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              css={tw`block max-w-lg leading-3 lg:(leading-5!)`}
              text="We’re always on the lookout for bright, humble people to join our
              journey."
            />
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
            css={tw`justify-self-center self-center lg:(justify-self-start)`}
          >
            <button
              css={tw`border-white border-2 appearance-none text-white font-normal
               text-body-2 px-8 py-1 hover:(bg-gray-700) transition-all duration-150 ease-in`}
            >
              View open positions
            </button>
          </motion.div>
        </div>
        <VerticalLine
          css={tw`h-52 md:h-80 relative visible lg:hidden justify-self-center z-0`}
        />
      </ContentWrapper>
    </SectionContainer>
  );
});

InvestorsBlock.displayName = "InvestorsBlock";

export default InvestorsBlock;
