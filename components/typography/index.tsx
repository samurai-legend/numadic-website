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
          tw`xl:text-heading-1`,
        ];
      case "h2":
        return [
          ...includeColor,
          tw`text-heading-2-sm font-normal`,
          tw`leading-[2.75rem] 2xl:(max-w-6xl leading-[3.75rem])`,
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
              tw`text-overline uppercase text-gray-light font-bold w-max block`,
            ];
          case "caption":
            return [...includeColor, tw`text-caption leading-[34px] block`];
          default:
            return [
              ...includeColor,
              tw`text-overline uppercase text-gray-light font-bold w-max block`,
            ];
        }
      default:
        return [...includeColor, tw`text-body-1 font-normal`];
    }
  })
);