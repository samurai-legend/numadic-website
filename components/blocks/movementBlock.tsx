import tw from "twin.macro";
import { SectionContainer, ContentWrapper } from "./common";

import { forwardRef, useContext, useEffect, useRef, useState } from "react";
import BoschLogo from "@/svg/brands/bosh.svg";
import AdityaBirlaLogo from "@/svg/brands/aditya_birla.svg";
import IciciBankLogo from "@/svg/brands/icicibank.svg";
import KotakBankLogo from "@/svg/brands/kotakbank.svg";
import MahindraLogo from "@/svg/brands/mahindra.svg";
import { motion } from "framer-motion";
import { TextEntryVariant } from "animations";
import { Typography } from "../typography";
import AnimatedCharacters from "animations/animatedCharacters";
import TransactionStats from "../elements/transactionStats";
import VerticalLine from "../elements/VerticalLine";
import MapPattern from "../elements/mapPattern";

const MovementBlock: React.FC<any> = forwardRef((props: any, ref: any) => {
  return (
    <SectionContainer ref={ref}>
      <div
        css={tw`absolute w-screen h-full flex justify-center items-center z-0 pointer-events-none`}
      >
        <div css={tw`container mx-auto`}>
          <MapPattern />
        </div>
      </div>
      <ContentWrapper css={tw`flex flex-col justify-between `}>
        <div css={tw`flex-[50%]`}>
          <div
            css={tw`flex flex-col items-center h-full text-center 
            lg:(items-start text-left justify-between)`}
          >
            <Typography
              as="span"
              type="overline"
              css={tw`hidden lg:(visible block)`}
            >
              {" "}
            </Typography>
            <AnimatedCharacters
              as="h2"
              isColor
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              css={tw`leading-[1.25rem] max-w-full text-center 
              2xl:(max-w-6xl leading-[3.75rem]) 
              lg:(text-left leading-[2.75rem])`}
              text="Undisrupting movement"
            />
            <div
              css={tw`flex w-full justify-between my-16 px-20 flex-col gap-y-5 lg:(flex-row)`}
            >
              <TransactionStats
                from={0}
                to={14000}
                text="AVG. DAILY TRANSACTION VALUE"
              />

              <TransactionStats
                from={0}
                to={97445}
                text="AVG. DAILY TRANSACTION VALUE"
              />
              <TransactionStats
                from={0}
                to={14000}
                text="AVG. DAILY TRANSACTION VALUE"
              />
            </div>
          </div>
        </div>
        <div css={tw`flex-[50%]`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
            css={tw`flex flex-col justify-center items-center mt-10 mb-20 lg:(mb-0 mt-20)`}
          >
            <Typography as="p" isColor type="body-2">
              Together with the industry leaders
            </Typography>
            <div
              css={tw`flex gap-x-20 gap-y-10 mt-10 flex-col items-center lg:(flex-row items-start)`}
            >
              <BoschLogo />
              <IciciBankLogo />
              <AdityaBirlaLogo css={tw`mix-blend-luminosity`} />

              <KotakBankLogo />
              <MahindraLogo />
            </div>
          </motion.div>
        </div>
        <VerticalLine
          css={tw`h-52 md:h-80 relative visible lg:hidden justify-self-center z-0`}
        />
      </ContentWrapper>
    </SectionContainer>
  );
});

MovementBlock.displayName = "MovementBlock";

export default MovementBlock;
