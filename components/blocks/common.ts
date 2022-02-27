import { motion } from "framer-motion";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { css } from "@emotion/react";

const SectionContainer = styled.div(() => [
  tw`h-auto w-screen relative lg:(h-full)`,
]);

const ContentWrapper = styled.div(() => [
  tw`container mx-auto relative h-full`,
]);

const NavContainer = styled(motion.ul)(() => [
  tw`flex gap-x-10 items-center 2xl:(gap-x-20)`,
]);

const NavItem = styled(motion.li)(({ type, active }: any) => [
  tw`relative`,
  type == "button"
    ? [
        tw`bg-gradient-to-r from-blue-dark to-blue-primary  px-2 rounded-[2px] 
        font-semibold cursor-pointer text-white transition-all duration-150 ease-in`,
        tw`hover:(from-white to-white text-black)`,
        tw`focus:(outline-white)`,
        css`
          a {
            ${tw`appearance-none py-2 block`}
          }
        `,
      ]
    : [
        tw`text-gray-light font-medium transition-all duration-150 ease-in`,
        tw`hover:text-white`,
        active &&
          tw`text-white after:(contents[""] absolute top-full h-1 w-full left-0 rounded-md bg-gradient-to-r from-blue-dark to-blue-primary)`,
        css`
          .carrot {
            ${tw`relative top-[2px]`}
          }
          .carrot-stroke {
            ${tw`stroke-current transition-all duration-150 ease-in`}
          }
          &:hover {
            .carrot-stroke {
              stroke: white;
            }
          }
        `,
      ],
]);

const NavDropdownContainer = styled(motion.ul)(() => [
  tw`absolute top-full left-0 whitespace-nowrap flex flex-col pt-1`,
  css`
    ${NavItem} {
      ${tw`px-5 py-2 bg-black-dark`}
    }
  `,
]);

export {
  SectionContainer,
  ContentWrapper,
  NavContainer,
  NavItem,
  NavDropdownContainer,
};
