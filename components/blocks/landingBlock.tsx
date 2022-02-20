import styled from "@emotion/styled";
import { FunctionComponent } from "react";
import tw from "twin.macro";
import AnimatedCharacters from "animations/animatedCharacters";

const LandingContainer = styled.div(() => [
  tw`h-screen flex-shrink-0 w-full text-center  flex flex-col justify-center items-center gap-y-5 relative top-0 xl:-top-9`,
  tw`lg:(w-screen h-full flex-shrink gap-y-10)`,
]);

const LandingBlock: FunctionComponent<any> = (props: any) => {
  return (
    <LandingContainer>
      <AnimatedCharacters
        as="h1"
        isColor
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        css={tw`max-w-[400px] leading-[1.8rem]! xl:(max-w-[770px] leading-[5.5rem]!)`}
        text="We build vehicle interface solutions"
      />

      <AnimatedCharacters
        as="p"
        isColor
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        css={[
          tw`max-w-[300px] leading-[1rem]! xl:(max-w-[720px] leading-[1.7rem]!)`,
        ]}
        text="Numadic offers solutions that empowers Banks, Automakers and Financial
        Service Providers to automate vehicle payments & offer delightful
        digital experiences through Mobile & Web Apps"
      />
    </LandingContainer>
  );
};

export default LandingBlock;
