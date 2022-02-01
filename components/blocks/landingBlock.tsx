import styled from "@emotion/styled";
import { FunctionComponent } from "react";
import tw from "twin.macro";
import { motion } from "framer-motion";

const LandingContainer = styled.div(() => [
  tw`h-full text-center w-screen flex flex-col justify-center items-center gap-y-10`,
]);

const LandingBlock: FunctionComponent<any> = () => {
  const variants = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        type: "spring",
      },
    },
  };
  return (
    <LandingContainer>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        css={[
          tw`text-heading-1 font-bold text-white max-w-[770px] leading-[5.5rem]`,
        ]}
      >
        We build vehicle interface solutions
      </motion.h1>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        css={[tw`text-body-1 font-normal text-white max-w-[720px]`]}
      >
        Numadic offers solutions that empowers Banks, Automakers and Financial
        Service Providers to automate vehicle payments & offer delightful
        digital experiences through Mobile & Web Apps
      </motion.p>
    </LandingContainer>
  );
};

export default LandingBlock;
