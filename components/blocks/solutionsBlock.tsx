import styled from "@emotion/styled";
import { forwardRef, FunctionComponent, useContext } from "react";
import tw from "twin.macro";

import SolutionCard from "../elements/solutionCard";
import { ContentWrapper, SectionContainer } from "./common";

import { TextEntryVariant } from "animations";
import { Typography } from "../typography";
import { ScrollContext } from "../layouts/smoothScroll";
import AnimatedCharacters from "animations/animatedCharacters";
import VerticalLine from "../elements/VerticalLine";
import SvgInline from "../elements/svgInline";

const TopContainer = styled.div(() => [
  tw`w-full flex flex-col items-center`,
  tw`lg:(items-start)`,
]);

const BottomContainer = styled.div(() => [
  tw`w-full absolute flex items-center top-1/2 -translate-y-1/2`,
]);

const SolutionsBlock: FunctionComponent<any> = forwardRef(
  ({ data }: any, ref: any) => {
    const { heading, solutionCards } = data;

    const { IsMobile } = useContext(ScrollContext);

    return (
      <SectionContainer ref={ref}>
        <ContentWrapper css={tw`flex flex-col`}>
          <TopContainer>
            <Typography
              as="span"
              type="overline"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={TextEntryVariant}
            >
              {heading.sectionName}
            </Typography>
            <AnimatedCharacters
              as="h2"
              isColor
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              css={tw`leading-[1.25rem] max-w-full text-center 2xl:(max-w-6xl) md:(max-w-3xl) lg:(text-left max-w-4xl)`}
              text={heading.title}
            />
          </TopContainer>
          {IsMobile && (
            <div
              css={tw`w-full flex flex-col justify-center items-center gap-y-4 relative z-50 pt-20 pb-32 mt-5`}
            >
              {solutionCards.map((card: any, key: number) => (
                <SolutionCard
                  key={`solutioncard-${key}`}
                  IconComponent={
                    <SvgInline
                      url={card.icon.data.attributes.url}
                    />
                  }
                  title={card.title}
                  description={card.description}
                />
              ))}

              <VerticalLine
                css={tw`h-full absolute bottom-2 visible lg:hidden z-[-1]`}
              />
            </div>
          )}
        </ContentWrapper>

        {!IsMobile && (
          <>
            <BottomContainer css={tw`z-50`}>
              <div
                css={tw`w-full flex justify-center items-center flex-row  gap-x-4 relative z-50 container m-auto`}
              >
                {solutionCards.map((card: any, key: number) => (
                  <SolutionCard
                    key={`solutioncard-${key}`}
                    IconComponent={
                      <SvgInline
                        url={card.icon.data.attributes.url}
                      />
                    }
                    title={card.title}
                    description={card.description}
                    animate
                  />
                ))}
              </div>
            </BottomContainer>
          </>
        )}
      </SectionContainer>
    );
  }
);
SolutionsBlock.displayName = "SolutionsBlock";
export default SolutionsBlock;
