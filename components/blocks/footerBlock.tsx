import tw from "twin.macro";
import {
  ContentWrapper,
  MapContainer,
  MapWrapper,
  NavItem,
  NavLink,
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
  tw`flex py-2 border-t-[0.5px] border-[#333333] flex-col items-center lg:(justify-between flex-row)`,
]);

const TermAndCondition = styled.ul(() => [
  tw`flex gap-x-5 w-auto xl:(w-96) justify-end`,
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
  tw`lg:(grid-flow-col grid-cols-3 text-left)`,
]);

const AddressWrapper = styled(motion.div)(() => [
  tw`grid grid-rows-1 grid-cols-1 gap-y-8
  grid-flow-row justify-center text-center col-start-1 col-span-1`,
  tw`lg:(grid-cols-4 grid-rows-none grid-flow-col text-left justify-start col-start-2 col-span-2)`,
]);

const FooterBlock: React.FC<any> = forwardRef(({ data, addHeight}: any, ref: any) => {
  const { address, heading, otherLinks, socialMedia } = data;

  return (
    <SectionContainer ref={ref} css={addHeight && tw`lg:min-h-[60vh]`}>
      <MapWrapper>
        <MapContainer>
          <MapPattern />
        </MapContainer>
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
              address.map((item: any, key: number) => (
                <div
                  css={tw`flex flex-col items-center lg:(items-start)`}
                  key={`address-${key}`}
                >
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
                    type="body-3"
                    css={tw`max-w-[10rem] leading-5! lg:leading-7!`}
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
                css={tw`grid grid-rows-3 grid-cols-2 grid-flow-col mt-2 text-white text-body-3`}
              >
                {otherLinks.links.length > 0 &&
                  otherLinks.links.map((item: any, key: number) => (
                    <NavItem key={`other-links-${key}`}>
                      <Link href={item.url} passHref>
                        <NavLink
                          tag={
                            item.tag.data ? item.tag.data.attributes.name : 0
                          }
                        >
                          {item.label}
                        </NavLink>
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
                socialMedia.map((item: any, key: number) => (
                  <Link href={item.url} key={`social-media-${key}`} passHref>
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
              css={tw`text-gray-light w-auto xl:(w-96)`}
            >
              © Numadic IoT Pvt. Ltd.
            </Typography>

            <Typography
              as="span"
              type="caption"
              css={tw`text-gray-light w-auto xl:(w-96) text-center`}
            >
              Warm regards from Goa, India
            </Typography>

            <TermAndCondition>
              <NavItem>
                <Link href="#" passHref>
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
                <Link href="#" passHref>
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
                <Link href="#" passHref>
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
