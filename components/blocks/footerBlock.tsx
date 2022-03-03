import tw from "twin.macro";
import {
  ContentWrapper,
  MapWrapper,
  NavItem,
  SectionContainer,
} from "./common";

import Link from "next/link";
import { motion } from "framer-motion";
import { TextEntryVariant } from "animations";
import { Typography } from "../typography";
import AnimatedCharacters from "animations/animatedCharacters";
import { forwardRef } from "react";
import styled from "@emotion/styled";

import Instagram from "@/svg/instagram.svg";
import LinkedIn from "@/svg/linkedin.svg";
import Facebook from "@/svg/facebook.svg";
import Twitter from "@/svg/twitter.svg";
import { css } from "@emotion/react";
import MapPattern from "../elements/mapPattern";

const SocialMediaContainer = styled(motion.div)(() => [
  tw`flex gap-x-10 self-center justify-self-center py-5 lg:(justify-self-end)`,
]);
const SocialLinks = styled(motion.a)(() => [
  tw`cursor-pointer`,
  css`
    &:hover {
      svg {
        path {
          ${tw`transition-all duration-150 ease-in`}
          fill: white;
        }
      }
    }
  `,
]);

const MiscellaneousContainer = styled(motion.div)(() => [
  tw`grid grid-cols-1 grid-flow-row py-2 border-t-[0.5px] border-[#333333] lg:(grid-cols-3 grid-flow-col)`,
]);

const TermAndCondition = styled.ul(() => [
  tw`flex justify-self-center lg:(justify-self-end) gap-x-5`,
]);

const FooterContainer = styled.div(() => [
  tw`flex-[50%] flex flex-col justify-between`,
]);

const FooterContentWrapper = styled.div(() => [
  tw`grid grid-cols-1 grid-flow-row mt-20 gap-y-10 pb-5`,
  tw`lg:(grid-cols-3 grid-flow-col  mt-10)`,
  tw`w-h-lg:(pb-8)`,
]);

const LocationContainer = styled.div(() => [
  tw`flex-[50%] grid grid-cols-1 text-center grid-flow-row `,
  tw`lg:(grid-flow-col grid-cols-2 text-left)`,
]);

const AddressWrapper = styled(motion.div)(() => [
  tw`grid grid-rows-2 grid-cols-none 
  grid-flow-row justify-center text-center 
  `,
  tw`lg:(grid-cols-2 grid-rows-none grid-flow-col text-left justify-start)`,
]);

const FooterBlock: React.FC<any> = forwardRef((props: any, ref: any) => {
  return (
    <SectionContainer ref={ref}>
      <MapWrapper>
        <div css={tw`container mx-auto`}>
          <MapPattern />
        </div>
      </MapWrapper>

      <ContentWrapper css={tw`flex flex-col justify-between`}>
        {/* filler */}
        <Typography
          as="span"
          type="overline"
          css={tw`hidden lg:(visible block text-transparent)`}
        >
          {"filler"}
        </Typography>
        <LocationContainer>
          <AnimatedCharacters
            as="h2"
            isColor
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            css={tw`leading-[1.25rem] max-w-full
             text-center 
             lg:(max-w-3xl text-left)`}
            text="Locations"
          />
          <AddressWrapper
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
          >
            <div>
              <Typography as="span" type="overline" css={tw`w-full lg:(w-max)`}>
                India
              </Typography>
              <Typography as="p" isColor type="body-1" css={tw`max-w-[12rem]`}>
                Greyscale HQ,
                <br /> Dona Paula, <br />
                Goa 403 004
              </Typography>
            </div>
            <div>
              <Typography as="span" type="overline" css={tw`w-full lg:(w-max)`}>
                uk
              </Typography>
              <Typography as="p" isColor type="body-1" css={tw`max-w-[12rem]`}>
                10 John Street,
                <br /> London,
                <br />
                United Kingdom
                <br /> WC1N 2EB
              </Typography>
            </div>
          </AddressWrapper>
        </LocationContainer>
        <FooterContainer>
          <FooterContentWrapper>
            <AnimatedCharacters
              as="h2"
              isColor
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              css={tw`leading-[1.25rem] max-w-full
             text-center
             lg:(max-w-3xl text-left)`}
              text="Other links"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={TextEntryVariant}
            >
              <Typography as="span" type="overline">
                SOLUTIONS
              </Typography>
              <ul
                css={tw`grid grid-rows-3 grid-flow-col mt-2 text-white text-body-3`}
              >
                <NavItem>
                  <Link href="#">
                    <a>Vehicle payments</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="#">
                    <a>Vehicle identification</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="#">
                    <a> Vehicle integration</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="#">
                    <a>About us</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="#">
                    <a>Careers</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="#">
                    <a>Contact</a>
                  </Link>
                </NavItem>
              </ul>
            </motion.div>
            <SocialMediaContainer
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={TextEntryVariant}
            >
              <Link href="#">
                <SocialLinks>
                  <Twitter />
                </SocialLinks>
              </Link>
              <Link href="#">
                <SocialLinks>
                  <LinkedIn />
                </SocialLinks>
              </Link>
              <Link href="#">
                <SocialLinks>
                  <Instagram />
                </SocialLinks>
              </Link>
              <Link href="#">
                <SocialLinks>
                  <Facebook />
                </SocialLinks>
              </Link>
            </SocialMediaContainer>
          </FooterContentWrapper>
          <MiscellaneousContainer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
          >
            <Typography
              as="span"
              type="caption"
              css={tw`text-gray-light justify-self-center lg:(justify-self-start)`}
            >
              © Numadic IoT Pvt. Ltd.
            </Typography>

            <Typography
              as="span"
              type="caption"
              css={tw`text-gray-light justify-self-center lg:(justify-self-center)
            `}
            >
              Warm regards from Goa, India
            </Typography>

            <TermAndCondition
              css={tw`flex justify-self-center lg:(justify-self-end) gap-x-5`}
            >
              <NavItem>
                <Link href="#">
                  <a>
                    <Typography
                      as="span"
                      type="caption"
                      css={tw`text-gray-light hover:text-white`}
                    >
                      Terms of service
                    </Typography>
                  </a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#">
                  <a>
                    <Typography
                      as="span"
                      type="caption"
                      css={tw`text-gray-light hover:text-white`}
                    >
                      Privacy policy
                    </Typography>
                  </a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#">
                  <a>
                    <Typography
                      as="span"
                      type="caption"
                      css={tw`text-gray-light hover:text-white`}
                    >
                      Cancellation policy
                    </Typography>
                  </a>
                </Link>
              </NavItem>
            </TermAndCondition>
          </MiscellaneousContainer>
        </FooterContainer>
      </ContentWrapper>
    </SectionContainer>
  );
});
FooterBlock.displayName = "FooterBlock";
export default FooterBlock;
