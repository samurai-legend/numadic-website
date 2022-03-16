import styled from "@emotion/styled";
import { forwardRef, FunctionComponent } from "react";
import tw from "twin.macro";
import AnimatedCharacters from "animations/animatedCharacters";
import VerticalLine from "../elements/VerticalLine";

const LandingContainer = styled.div(() => [
  tw`h-screen flex-shrink-0 w-full text-center flex flex-col justify-center items-center gap-y-5 relative 
  pb-40
  top-0 
  lg:-top-8
  xl:-top-9`,
  tw`lg:(w-screen h-full gap-y-16 pb-0)`,
  tw`xl:(gap-y-20)`,
  tw`2xl:(gap-y-24)`,
]);

const LandingBlock: FunctionComponent<any> = forwardRef(
  ({ data }: any, ref: any) => {
    return (
      <>
        <LandingContainer ref={ref} css={tw`relative`}>
          <AnimatedCharacters
            as="h1"
            isColor
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            css={tw`max-w-[400px] leading-[1.8rem]! 
            md:(max-w-[700px] leading-[3.5rem]!) 
            lg:(max-w-[700px] leading-[4.2rem]!) 
            xl:(max-w-[770px] leading-[4.4rem]!) 
            2xl:(max-w-[770px] leading-[5rem]!)`}
            text={data.title}
          />

          <AnimatedCharacters
            as="p"
            isColor
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            css={[
              tw`max-w-[300px] leading-[1rem]! 
              md:(max-w-[500px] leading-[1.3rem]!) 
              lg:(max-w-[500px] leading-[1.3rem]!) 
              xl:(max-w-[720px] leading-[1.4rem]!)
              2xl:(max-w-[720px] leading-[1.7rem]!)`,
            ]}
            text={data.description}
          />
          <VerticalLine
            inView
            css={tw`h-60 md:h-80 absolute bottom-16 visible lg:hidden`}
          />
        </LandingContainer>
      </>
    );
  }
);
LandingBlock.displayName = "LandingBlock";
export default LandingBlock;
