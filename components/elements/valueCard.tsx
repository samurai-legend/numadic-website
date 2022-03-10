import { css } from "@emotion/react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { Typography } from "../typography";

const CardContainer = styled.div(() => [
  tw`bg-gray-medium h-full w-full flex flex-col
   items-start py-5 px-6 text-left gap-y-4 cursor-default`,
  tw`md:(py-8 px-10 gap-y-5)`,
  tw`lg:(py-10 px-5 gap-y-5)`,
  tw`xl:(py-14 px-10 gap-y-10)`,
  tw`hover:(bg-white)`,
  css`
    &:hover {
      svg {
        [class$="stroke-black"] {
          stroke: black;
        }
      }
      h3,
      p {
        ${tw`text-black`}
      }
    }
  `,
]);

const IconContainer = styled.div(() => [
  tw`h-20 w-20`,
  tw`md:(h-24 w-24)`,
  tw`lg:(h-28 w-28)`,
  tw`xl:(h-32 w-32)`,
]);

const ValueCard: React.FC<any> = ({ Icon, title, description }: any) => {
  return (
    <CardContainer>
      <IconContainer>
        <Icon />
      </IconContainer>
      <div>
        <Typography
          as="h3"
          css={tw`font-semibold py-2 md:py-3 lg:py-5`}
          isColor
        >
          {title}
        </Typography>
        <Typography as="p" isColor css={tw`leading-6!`}>
          {description}
        </Typography>
      </div>
    </CardContainer>
  );
};

export default ValueCard;
