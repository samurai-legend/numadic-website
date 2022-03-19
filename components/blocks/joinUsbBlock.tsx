import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { TextEntryVariant } from "animations";
import AnimatedCharacters from "animations/animatedCharacters";
import Image from "next/image";
import Link from "next/link";
import tw from "twin.macro";
import { Typography } from "../typography";
import { ContentWrapper, InnerContentWrapper, SquareButton } from "./common";

const BackDropContainer = styled.div(() => [
  tw`w-full h-full`,
  css`
    background: linear-gradient(
      130deg,
      #8eb1f4 14.3%,
      #ff9dce 98.58%,
      #6febfc 98.81%,
      #ffc7a4 194.6%
    );
  `,
]);

const MainContainer = styled.div(() => [
  tw`flex flex-col lg:(flex-row) bg-black-dark 
mx-[1px] mt-[1px] mb-[-2px]`,
tw`pt-10 lg:(pt-20)`
]);

const JoinUsBlock = (props: any) => {
  return (
    <ContentWrapper>
      <InnerContentWrapper padding>
        <BackDropContainer>
          <MainContainer>
            <div css={tw`flex-[50%] w-full`}>
              <div css={tw`h-52 w-full relative lg:(h-full)`}>
                <Image
                  src="/images/placeholder.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div
              css={tw`flex-[50%] flex flex-col w-full gap-y-5 items-center lg:(items-start gap-y-10)`}
            >
              <Typography
                as="span"
                type="overline"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={TextEntryVariant}
              >
                join us
              </Typography>

              <AnimatedCharacters
                as="h2"
                isColor
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                css={tw`leading-[1.25rem] font-bold max-w-[15rem] 
                text-center lg:(text-left max-w-[16rem]) xl:(max-w-md)`}
                text="We’ve got some seats on our rocketship."
              />
              <Link href="/career">
                <SquareButton css={tw`w-max`}>View open positions</SquareButton>
              </Link>
            </div>
          </MainContainer>
        </BackDropContainer>
      </InnerContentWrapper>
    </ContentWrapper>
  );
};

export default JoinUsBlock;
