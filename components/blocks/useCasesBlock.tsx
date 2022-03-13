import tw from "twin.macro";
import { ContentWrapper, SectionContainer } from "./common";
import HpclLogo from "@/svg/brands/HPCL_Logo.svg";
import { motion } from "framer-motion";
import { EntryVariant, TextEntryVariant } from "animations";
import UseCaseTabs from "../elements/useCaseTabs";
import { forwardRef, useContext } from "react";
import { Typography } from "../typography";
import { ScrollContext } from "../layouts/smoothScroll";
import AnimatedCharacters from "animations/animatedCharacters";
import styled from "@emotion/styled";

const UseCaseCardContainer = styled(motion.div)(() => [
  tw`bg-[#333333] px-4 py-2 max-w-sm flex items-center
           mb-0 gap-x-5 lg:(px-5 py-4 max-w-md mt-20) xl:(max-w-lg)`,
]);

const UseCaseCardImage = styled.div(() => [tw`inline-block w-max`]);

const UseCasesBlock: React.FC<any> = forwardRef(({ data }: any, ref: any) => {
  const { heading, useCaseTabs } = data;
  const { IsMobile } = useContext(ScrollContext);

  return (
    <SectionContainer ref={ref}>
      <ContentWrapper
        css={tw`flex flex-col justify-between items-center lg:(items-start mb-0)`}
      >
        <div
          css={tw`flex flex-[50%] flex-col w-full items-center text-center lg:(items-start text-left)`}
        >
          {heading.sectionName ? (
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
          ) : (
            <Typography
              as="span"
              type="overline"
              css={tw`hidden lg:(visible block text-transparent)`}
            >
              {"-"}
            </Typography>
          )}

          <AnimatedCharacters
            as="h2"
            isColor
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            css={tw`leading-[1.25rem] max-w-full text-center 2xl:(max-w-6xl leading-[3.75rem]) lg:(text-left leading-[2.75rem])`}
            text={heading.title}
          />
          <div
            css={tw`flex w-full flex-col items-start lg:(flex-row) relative`}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={EntryVariant}
              css={tw`relative w-full mt-2 tall-sm:mt-3`}
            >
              <UseCaseTabs isMobile={IsMobile} data={useCaseTabs} />
            </motion.div>
          </div>
        </div>

        <div css={tw`flex-[50%]`}>
          <UseCaseCardContainer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
          >
            <UseCaseCardImage>
              <HpclLogo />
            </UseCaseCardImage>
            <div>
              <Typography as="span" type="overline">
                Case study
              </Typography>
              <Typography
                as="p"
                type="body-2"
                isColor
                css={tw`leading-6 xl:leading-7`}
              >
                How Numadic helped HPCL accept payments for fuel through FASTag
              </Typography>
            </div>
          </UseCaseCardContainer>
        </div>
      </ContentWrapper>
    </SectionContainer>
  );
});

UseCasesBlock.displayName = "UseCasesBlock";
export default UseCasesBlock;
