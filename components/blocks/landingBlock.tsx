import styled from "@emotion/styled";
import { FunctionComponent } from "react";
import tw from "twin.macro";
import { TextEntryVariant } from "animations";
import { Typography } from "../typography";

const LandingContainer = styled.div(() => [
  tw`h-screen flex-shrink-0 w-full text-center  flex flex-col justify-center items-center gap-y-10 relative top-0 xl:-top-9`,
  tw`lg:(w-screen h-full flex-shrink)`,
]);

const LandingBlock: FunctionComponent<any> = () => {
  return (
    <LandingContainer>
      <Typography
        as="h1"
        isColor
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={TextEntryVariant}
        css={tw`max-w-[400px] leading-[3rem]! xl:(max-w-[770px] leading-[5.5rem]!)`}
      >
        We build vehicle interface solutions
      </Typography>
      <Typography
        as="p"
        isColor
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={TextEntryVariant}
        css={[tw`max-w-[300px] leading-[1.7rem] xl:(max-w-[720px])`]}
      >
        Numadic offers solutions that empowers Banks, Automakers and Financial
        Service Providers to automate vehicle payments & offer delightful
        digital experiences through Mobile & Web Apps
      </Typography>
    </LandingContainer>
  );
};

export default LandingBlock;
