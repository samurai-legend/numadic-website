import styled from "@emotion/styled";
import { forwardRef, FunctionComponent } from "react";
import tw from "twin.macro";
import AnimatedCharacters from "animations/animatedCharacters";
import VerticalLine from "../elements/VerticalLine";

const LandingContainer = styled.div(() => [
  tw`h-screen flex-shrink-0 w-full text-center  flex flex-col justify-center items-center gap-y-5 relative top-0 xl:-top-9`,
  tw`lg:(w-screen h-full flex-shrink gap-y-10)`,
]);

const LandingBlock: FunctionComponent<any> = forwardRef(
  (props: any, ref: any) => {
    return (
      <>
        <LandingContainer ref={ref} css={tw`relative`}>
          <AnimatedCharacters
            as="h1"
            isColor
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            css={tw`max-w-[400px] leading-[1.8rem]! md:(max-w-[700px] leading-[3.5rem]!) lg:(max-w-[700px] leading-[3.5rem]!) xl:(max-w-[770px] leading-[5.5rem]!)`}
            text="We build vehicle interface solutions"
          />

          <AnimatedCharacters
            as="p"
            isColor
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            css={[
              tw`max-w-[300px] leading-[1rem]! md:(max-w-[500px] leading-[1.3rem]!) lg:(max-w-[500px] leading-[1.3rem]!) xl:(max-w-[720px] leading-[1.7rem]!)`,
            ]}
            text="Numadic offers solutions that empowers Banks, Automakers and Financial
        Service Providers to automate vehicle payments & offer delightful
        digital experiences through Mobile & Web Apps"
          />
          <VerticalLine css={tw`h-52 md:h-80 absolute bottom-2 visible lg:hidden`} />
        </LandingContainer>
      </>
    );
  }
);
LandingBlock.displayName = "LandingBlock";
export default LandingBlock;
