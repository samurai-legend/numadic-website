import tw from "twin.macro";
import { ContentWrapper, SectionContainer } from "./common";
import MapPattern from "@/svg/movement/map.svg";
import { useRef } from "react";
import NineUnifcornLogo from "@/svg/brands/9unifcorn.svg";
import CvwLogo from "@/svg/brands/cvw.svg";
import DynamoLogo from "@/svg/brands/dynamo.svg";
import SapStartupLogo from "@/svg/brands/sap_startup.svg";
import { motion } from "framer-motion";
import { TextEntryVariant } from "animations";
import { Typography } from "../typography";

const InvestorsBlock: React.FC<any> = (props: any) => {
  return (
    <SectionContainer>
      <div
        css={tw`absolute w-screen h-full flex justify-center items-center z-0`}
      >
        <MapPattern />
      </div>
      <ContentWrapper css={tw`flex flex-col justify-between`}>
        <div
          css={tw`grid grid-flow-row gap-4 text-center grid-cols-1 lg:(grid-cols-2 grid-flow-col text-left)`}
        >
          <Typography
            as="h2"
            isColor
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
            css={tw`max-w-md!`}
          >
            Fueled by terrific investors
          </Typography>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
            css={tw`grid grid-rows-2 grid-flow-col gap-y-12 tall-sm:gap-y-24 `}
          >
            <DynamoLogo />
            <CvwLogo />
            <NineUnifcornLogo />
            <SapStartupLogo />
          </motion.div>
        </div>
        <div
          css={tw`grid grid-cols-1 grid-flow-row gap-4 mt-10 mb-20 tall-lg:mb-44 lg:(grid-cols-2 grid-flow-col  mt-0)`}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
            css={tw`justify-self-center text-center lg:(justify-self-start text-left)`}
          >
            <Typography as="h2" isColor css={tw`font-bold`}>
              And you...
            </Typography>
            <Typography as="p" isColor type="body-1" css={tw`block max-w-lg`}>
              We’re always on the lookout for bright, humble people to join our
              journey.
            </Typography>
          </motion.div>
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
      </ContentWrapper>
    </SectionContainer>
  );
};

export default InvestorsBlock;