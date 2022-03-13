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
import { css } from "@emotion/react";
import MapPattern from "../elements/mapPattern";
import SvgInline from "../elements/svgInline";

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

const FooterBlock: React.FC<any> = forwardRef(({ data }: any, ref: any) => {

  const { address, heading, otherLinks, socialMedia } = data;

  return (
    <SectionContainer ref={ref}>
      <MapWrapper>
        <div css={tw`container mx-auto`}>
          <MapPattern />
        </div>
      </MapWrapper>

      <ContentWrapper css={tw`flex flex-col justify-between`}>
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
            text={heading.title}
          />
          <AddressWrapper
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
          >
            {address.length > 0 &&
              address.map((item: any) => (
                <div key={item.id}>
                  <Typography
                    as="span"
                    type="overline"
                    css={tw`w-full lg:(w-max)`}
                  >
                    {item.location}
                  </Typography>
                  <Typography
                    as="p"
                    isColor
                    type="body-1"
                    css={tw`max-w-[12rem]`}
                    dangerouslySetInnerHTML={{ __html: item.address }}
                  />
                </div>
              ))}
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
              text={otherLinks.title}
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={TextEntryVariant}
            >
              <Typography as="span" type="overline">
                {otherLinks.linkTitle}
              </Typography>
              <ul
                css={tw`grid grid-rows-3 grid-flow-col mt-2 text-white text-body-3`}
              >
                {otherLinks.links.length > 0 &&
                  otherLinks.links.map((item: any) => (
                    <NavItem key={item.id}>
                      <Link href={item.url}>
                        <a>{item.label}</a>
                      </Link>
                    </NavItem>
                  ))}
              </ul>
            </motion.div>
            <SocialMediaContainer
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={TextEntryVariant}
            >
              {socialMedia.length > 0 &&
                socialMedia.map((item: any) => (
                  <Link href={item.url} key={item.id}>
                    <SocialLinks>
                      <SvgInline url={item.image.data?.attributes.url} />
                    </SocialLinks>
                  </Link>
                ))}
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
