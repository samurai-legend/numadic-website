import { css } from "@emotion/react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { Typography } from "../typography";

const CardContainer = styled.div(() => [
  tw`bg-gray-medium h-full w-full flex flex-col items-start py-14 px-10 text-left gap-y-10 cursor-default`,
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

const ValueCard: React.FC<any> = ({ Icon, title, description }: any) => {
  return (
    <CardContainer>
      <div css={tw`h-32 w-32`}>
        <Icon />
      </div>
      <div>
        <Typography as="h3" css={tw`font-semibold py-5`} isColor>
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
