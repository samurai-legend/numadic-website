import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import tw from "twin.macro";

export const Typography = motion(
  styled.div(({ as, type, isColor }: any) => {
    const colorStyles = isColor ? [tw`text-white`] : [];
    const colorText = [
      css`
        .gradientColor {
          color: red;
        }
      `,
    ];
    const transitions = [tw`transition-all duration-150 ease-in`];
    const includeStyles = [...colorStyles, ...colorText, ...transitions];
    switch (as) {
      case "h1":
        return [
          ...includeStyles,
          tw`text-heading-1-sm font-bold`,
          tw`leading-[5.5rem]`,
          tw`md:text-heading-1-md`,
          tw`lg:text-heading-1-lg`,
          tw`xl:text-heading-1`,
        ];
      case "h2":
        return [
          ...includeStyles,
          tw`text-heading-2-sm font-normal`,
          tw`2xl:(max-w-6xl)`,
          tw`xl:text-heading-2`,
        ];
      case "h3":
        return [
          ...includeStyles,
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
              ...includeStyles,
              tw`text-body-1-sm font-normal`,
              tw`xl:text-body-1`,
            ];
          case "body-2":
            return [
              ...includeStyles,
              tw`text-body-2-sm font-normal`,
              tw`xl:text-body-2`,
            ];
          case "body-3":
            return [
              ...includeStyles,
              tw`text-body-3-sm font-normal`,
              tw`xl:text-body-3`,
            ];
          case "quote":
            return [
              ...includeStyles,
              tw`text-quote-sm font-thin`,
              tw`md:text-quote-md`,
              tw`lg:text-quote-lg`,
              tw`xl:text-quote`,
            ];
          default:
            return [
              ...includeStyles,
              tw`text-body-1-sm font-normal`,
              tw`xl:text-body-1`,
            ];
        }
      case "span":
        switch (type) {
          case "overline":
            return [
              ...includeStyles,
              tw`text-overline-sm uppercase text-gray-light font-bold w-max block`,
              tw`md:text-overline`,
            ];
          case "caption":
            return [
              ...includeStyles,
              tw`text-caption-sm leading-[34px] block`,
              tw`md:text-caption`,
            ];
          default:
            return [
              ...includeStyles,
              tw`text-overline uppercase text-gray-light font-bold w-max block`,
              tw`md:text-overline`,
            ];
        }
      default:
        return [...includeStyles, tw`text-body-1 font-normal`];
    }
  })
);
