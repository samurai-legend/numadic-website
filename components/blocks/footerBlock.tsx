import tw from "twin.macro";
import { ContentWrapper, NavItem, SectionContainer } from "./common";
 
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

const FooterBlock: React.FC<any> = forwardRef((props: any, ref: any) => {
  return (
    <SectionContainer ref={ref}>
      <div
        css={tw`absolute w-screen h-full flex justify-center items-center z-0`}
      >
        <MapPattern />
      </div>
      <ContentWrapper css={tw`flex flex-col justify-between`}>
        <div
          css={tw`flex-[50%] grid grid-cols-1 text-center grid-flow-row lg:(grid-flow-col grid-cols-2 text-left)`}
        >
          <AnimatedCharacters
            as="h2"
            isColor
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            css={tw`leading-[2.75rem] max-w-full
             text-center 2xl:(leading-[3.75rem]) 
             lg:(max-w-3xl text-left)`}
            text="Locations"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
            css={tw`grid grid-rows-2 grid-cols-none grid-flow-row justify-center text-center lg:(grid-cols-2 grid-rows-none grid-flow-col text-left justify-start)`}
          >
            <div>
              <Typography as="span" type="overline" css={tw`w-full lg:(w-max)`}>
                India
              </Typography>
              <Typography as="p" isColor type="body-1" css={tw`max-w-[12rem]`}>
                Greyscale HQ, Dona Paula, Goa 403 004
              </Typography>
            </div>
            <div>
              <Typography as="span" type="overline" css={tw`w-full lg:(w-max)`}>
                uk
              </Typography>
              <Typography as="p" isColor type="body-1" css={tw`max-w-[12rem]`}>
                10 John Street, London, United Kingdom WC1N 2EB
              </Typography>
            </div>
          </motion.div>
        </div>
        <div css={tw`flex-[50%] flex flex-col justify-between`}>
          <div
            css={tw`grid grid-cols-1 grid-flow-row mt-20
             gap-y-10 pb-5
             lg:(grid-cols-3 grid-flow-col  mt-10)
             w-h-lg:(pb-8)`}
          >
            <AnimatedCharacters
              as="h2"
              isColor
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              css={tw`leading-[2.75rem] max-w-full
             text-center 2xl:(leading-[3.75rem]) 
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
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
            css={tw`grid grid-cols-1 grid-flow-row py-2 border-t-[0.5px] border-gray-400 lg:(grid-cols-3 grid-flow-col)`}
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

            <ul
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
            </ul>
          </motion.div>
        </div>
      </ContentWrapper>
    </SectionContainer>
  );
});
FooterBlock.displayName = "FooterBlock";
export default FooterBlock;
