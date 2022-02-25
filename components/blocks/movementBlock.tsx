import tw from "twin.macro";
import { SectionContainer, ContentWrapper } from "./common";
import MapPattern from "@/svg/movement/map.svg";
import { forwardRef, useContext, useEffect, useRef, useState } from "react";
import BoschLogo from "@/svg/brands/bosh.svg";
import AdityaBirlaLogo from "@/svg/brands/aditya_birla.svg";
import IciciBankLogo from "@/svg/brands/icicibank.svg";
import KotakBankLogo from "@/svg/brands/kotakbank.svg";
import MahindraLogo from "@/svg/brands/mahindra.svg";
import { motion, useAnimationFrame } from "framer-motion";
import { TextEntryVariant } from "animations";
import { GlobalLineContext } from "../layouts";
import { IsColliding } from "helpers/colliding";
import Counter from "../elements/counter";
import { Typography } from "../typography";
import { ScrollContext } from "../layouts/smoothScroll";
import AnimatedCharacters from "animations/animatedCharacters";
import TransactionStats from "../elements/transactionStats";

const MovementBlock: React.FC<any> = forwardRef((props: any, ref: any) => {
  return (
    <SectionContainer ref={ref}>
      <div
        css={tw`absolute w-screen h-full flex justify-center items-center z-0 pointer-events-none`}
      >
        <MapPattern />
      </div>
      <ContentWrapper css={tw`flex flex-col justify-between`}>
        <div
          css={tw`flex flex-col items-center text-center lg:(items-start text-left)`}
        >
          <AnimatedCharacters
            as="h2"
            isColor
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            css={tw`leading-[1.75rem] max-w-full text-center 2xl:(max-w-6xl leading-[3.75rem]) lg:(text-left leading-[2.75rem])`}
            text="Undisrupting movement"
          />
          <div
            css={tw`flex w-full justify-between mt-5 px-20 flex-col gap-y-5 lg:(flex-row mt-16)`}
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={TextEntryVariant}
          css={tw`flex flex-col justify-center items-center mb-20 tall-lg:mb-40 mt-20`}
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
      </ContentWrapper>
    </SectionContainer>
  );
});

MovementBlock.displayName = "MovementBlock";

export default MovementBlock;
