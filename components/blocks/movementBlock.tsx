import tw from "twin.macro";
import { SectionContainer, ContentWrapper, MapWrapper } from "./common";

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
import Image from "next/image";
import styled from "@emotion/styled";

const CollaborationContainer = styled.div(() => [
  tw`flex gap-x-20 gap-y-5 mt-10 flex-col items-center lg:(flex-row items-start)`,
]);

const CollaborationImage = styled.div(() => [
  tw`relative w-24 h-16 lg:(w-28 h-20)`,
]);

const MovementBlock: React.FC<any> = forwardRef(({ data }: any, ref: any) => {
  const { collaboration, heading, milestones } = data;
  
  return (
    <SectionContainer ref={ref}>
      <MapWrapper>
        <div css={tw`container mx-auto`}>
          <MapPattern />
        </div>
      </MapWrapper>
      <ContentWrapper css={tw`flex flex-col justify-between `}>
        {/* filler */}
        {heading.sectionName ? (
          <Typography
            as="span"
            type="overline"
            css={tw`hidden lg:(visible block)`}
          >
            {heading.sectionName}
          </Typography>
        ) : (
          <Typography
            as="span"
            type="overline"
            css={tw`hidden lg:(visible block text-transparent)`}
          >
            {"-"}
          </Typography>
        )}

        <div css={tw`flex-[50%]`}>
          <div
            css={tw`flex flex-col items-center h-full text-center 
            lg:(items-start text-left justify-between)`}
          >
            <AnimatedCharacters
              as="h2"
              isColor
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              css={tw`leading-[1.25rem] max-w-full text-center 
              2xl:(max-w-6xl) 
              lg:(text-left)`}
              text={heading.title}
            />
            <div
              css={tw`flex w-full justify-between my-16 px-20 flex-col gap-y-5 lg:(flex-row)`}
            >
              {milestones.map((item: any, key: number) => (
                <TransactionStats
                  key={`${item.__typename}-${key}`}
                  from={0}
                  to={parseInt(item.amount)}
                  text={item.subtitle}
                />
              ))}
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
              {collaboration.title}
            </Typography>
            <CollaborationContainer>
              {collaboration.images.data.map((item: any, key: number) => (
                <CollaborationImage key={item.attributes.alternativeText}>
                  <Image
                    src={item.attributes.url}
                    layout="fill"
                    objectFit="contain"
                  />
                </CollaborationImage>
              ))}
            </CollaborationContainer>
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
