import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { TextEntryVariant } from "animations";
import AnimatedCharacters from "animations/animatedCharacters";
import tw from "twin.macro";
import VerticalLine from "../elements/VerticalLine";
import { Typography } from "../typography";
import { ContentWrapper, InnerContentWrapper } from "./common";

const JoinIfBlock: React.FC<any> = (porps: any) => {
  return (
    <ContentWrapper>
      <InnerContentWrapper padding>
        <AnimatedCharacters
          as="h2"
          isColor
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          css={tw`max-w-[400px] font-bold leading-[1.8rem]! 
    md:(max-w-[700px] leading-[3.5rem]!) 
    lg:(max-w-[700px] leading-[4.2rem]!) 
    xl:(max-w-[770px] leading-[4.4rem]!) 
    2xl:(max-w-[770px] leading-[5rem]!)`}
          text="Join us if you are..."
        />
        <div css={tw`grid grid-flow-row grid-cols-3 gap-4`}>
          <RequirementsCard>
            <Typography
              as="p"
              isColor
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={TextEntryVariant}
              css={tw`font-thin max-w-5xl text-gray-light text-heading-2!`}
            >
              <span className="gradient-text">Humble</span>, yet passionate
            </Typography>
          </RequirementsCard>
          <RequirementsCard>
            <Typography
              as="p"
              isColor
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={TextEntryVariant}
              css={tw`font-thin max-w-5xl text-gray-light text-heading-2!`}
            >
              A true
              <br />
              <span className="gradient-text">team player</span>
            </Typography>
          </RequirementsCard>
          <RequirementsCard>
            <Typography
              as="p"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={TextEntryVariant}
              css={tw`font-thin max-w-5xl text-gray-light text-heading-2!`}
            >
              <span className="gradient-text">Humble</span>, yet passionate
            </Typography>
          </RequirementsCard>
          <RequirementsCard>
            <Typography
              as="p"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={TextEntryVariant}
              css={tw`font-thin max-w-5xl text-gray-light text-heading-2!`}
            >
              <span className="gradient-text">Humble</span>, yet passionate
            </Typography>
          </RequirementsCard>
        </div>
        <div css={tw`relative w-full h-96 mt-32`}>
          <VerticalLine css={tw`relative h-full`} inView />
        </div>
      </InnerContentWrapper>
    </ContentWrapper>
  );
};

export default JoinIfBlock;

const RequirementsCard = styled.div(() => [
  tw`
      p-10 flex justify-start items-end bg-gray-medium text-left h-80
  `,
  css`
    .gradient-text {
      ${tw`font-bold`}
      background: -webkit-linear-gradient(100.66deg, #8EB1F4 14.3%, #FF9DCE 98.58%, #6FEBFC 98.81%, #FFC7A4 194.6%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `,
]);
