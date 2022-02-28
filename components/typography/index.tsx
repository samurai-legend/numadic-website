import styled from "@emotion/styled";
import { motion } from "framer-motion";

import tw from "twin.macro";

export const Typography = motion(
  styled.div(({ as, type, isColor }: any) => {
    const includeColor = isColor ? [tw`text-white`] : [];
    switch (as) {
      case "h1":
        return [
          ...includeColor,
          tw`text-heading-1-sm font-bold`,
          tw`leading-[5.5rem]`,
          tw`md:text-heading-1-md`,
          tw`lg:text-heading-1-lg`,
          tw`xl:text-heading-1`,
        ];
      case "h2":
        return [
          ...includeColor,
          tw`text-heading-2-sm font-normal`,
          tw`2xl:(max-w-6xl)`,
          tw`xl:text-heading-2`,
        ];
      case "h3":
        return [
          ...includeColor,
          tw`text-heading-3-sm font-normal`,
          tw`xl:text-heading-3`,
        ];
      case "h4":
        return [tw``];
      case "h5":
        return [tw``];
      case "h6":
        return [tw``];
      case "p":
        switch (type) {
          case "body-1":
            return [
              ...includeColor,
              tw`text-body-1-sm font-normal`,
              tw`xl:text-body-1`,
            ];
          case "body-2":
            return [
              ...includeColor,
              tw`text-body-2-sm font-normal`,
              tw`xl:text-body-2`,
            ];
          case "body-3":
            return [
              ...includeColor,
              tw`text-body-3-sm font-normal`,
              tw`xl:text-body-3`,
            ];
          default:
            return [
              ...includeColor,
              tw`text-body-1-sm font-normal`,
              tw`xl:text-body-1`,
            ];
        }
      case "span":
        switch (type) {
          case "overline":
            return [
              ...includeColor,
              tw`text-overline-sm uppercase text-gray-light font-bold w-max block`,
              tw`md:text-overline`,
            ];
          case "caption":
            return [
              ...includeColor,
              tw`text-caption-sm leading-[34px] block`,
              tw`md:text-caption`,
            ];
          default:
            return [
              ...includeColor,
              tw`text-overline uppercase text-gray-light font-bold w-max block`,
              tw`md:text-overline`,
            ];
        }
      default:
        return [...includeColor, tw`text-body-1 font-normal`];
    }
  })
);
