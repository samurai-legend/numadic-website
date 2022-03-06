import tw from "twin.macro";
import {
  ContentWrapper,
  MapWrapper,
  SectionContainer,
  SquareButton,
} from "./common";

import { forwardRef } from "react";
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
import MapPattern from "../elements/mapPattern";
import { Typography } from "../typography";
import Link from "next/link";

const LogoContainer = styled.div(() => [
  tw`relative justify-self-center lg:(justify-self-start)`,
  css`
    svg {
      ${tw`w-full h-8 md:(h-10) lg:(w-auto h-12) xl:(w-auto h-14) 2xl:(w-auto h-16)`}
    }
  `,
]);

const InvestorsBlock: React.FC<any> = forwardRef((props: any, ref: any) => {
  return (
    <SectionContainer ref={ref}>
      <MapWrapper>
        <div css={tw`container mx-auto`}>
          <MapPattern />
        </div>
      </MapWrapper>

      <ContentWrapper css={tw`flex flex-col justify-center`}>
        <div css={tw`flex-[50%]`}>
          {/* filler */}
          <Typography
            as="span"
            type="overline"
            css={tw`hidden lg:(visible block text-transparent)`}
          >
            {"-"}
          </Typography>
          <div
            css={tw`h-full grid grid-flow-row gap-4 text-center grid-cols-1 lg:(grid-cols-2 grid-flow-col text-left)`}
          >
            <AnimatedCharacters
              as="h2"
              isColor
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              css={tw`leading-[1.25rem] max-w-full text-center 
              2xl:(max-w-lg) 
              lg:(max-w-md! text-left)
             `}
              text="Fueled by terrific investors"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={TextEntryVariant}
              css={tw`grid grid-rows-2 grid-flow-col gap-y-10 gap-x-10 mt-5 lg:(gap-y-5 mt-0)`}
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
        </div>
        <div css={tw`flex-[50%]`}>
          <div
            css={tw`grid grid-cols-1 grid-flow-row gap-4 mt-20 mb-20 lg:(grid-cols-2 grid-flow-col mb-0)`}
          >
            <div
              css={tw`justify-self-center text-center lg:(justify-self-start text-left) flex flex-col gap-y-4`}
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
                css={tw`block max-w-sm leading-3! lg:(leading-5!)`}
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
              <Link href="#">
                <SquareButton>View open positions</SquareButton>
              </Link>
            </motion.div>
          </div>
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
