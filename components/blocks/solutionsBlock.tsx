import styled from "@emotion/styled";
import {
  FunctionComponent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import tw from "twin.macro";
import GradientLineUp from "../elements/gradientLineUp";
import SolutionCard from "../elements/solutionCard";
import { ContentWrapper, SectionContainer } from "./common";
import VehiclePaymentIcon from "@/svg/solutions/vehicle_payment.svg";
import VehicleIntegrationIcon from "@/svg/solutions/vehicle_integration.svg";
import VehicleIdentificationIcon from "@/svg/solutions/vehicle_identification.svg";
import { GlobalContext } from "../layouts";
import { IsColliding } from "helpers/colliding";
import { motion, useAnimationFrame, useViewportScroll } from "framer-motion";
import { TextEntryVariant } from "animations";

const LinesCurve = styled.div(({ direction, position }: any) => [
  tw`z-20`,
  direction === "up" &&
    position === "left" && [tw`w-56 absolute top-[50%] translate-y-[-84.5%]`],
  direction === "down" &&
    position === "left" && [
      tw`w-56 absolute top-[50%] translate-y-[10.5%] -rotate-180 scale-x-[-1]`,
    ],
  direction === "up" &&
    position === "right" && [
      tw`w-56 absolute top-[50%] translate-y-[-84.5%] right-0 scale-x-[-1]`,
    ],
  direction === "down" &&
    position === "right" && [
      tw`w-56 absolute top-[50%] translate-y-[10.5%] -rotate-180 right-0 scale-x-[1]`,
    ],
]);

const LeftContainer = styled.div(() => [tw`w-5/12 2xl:w-2/5`]);

const RightContainer = styled.div(() => [
  tw`w-7/12 2xl:w-3/5 relative flex items-center -mt-40`,
]);

const SolutionsBlock: FunctionComponent<any> = (props: any) => {
  const { lineGroupRef } = useContext(GlobalContext);

  const [animateSollution, setAnimatedSollution] = useState(false);

  const cardsWrapperRef = useRef(null);

  const { scrollYProgress } = useViewportScroll();

  useAnimationFrame((t) => {
    if (lineGroupRef && cardsWrapperRef) {
      setAnimatedSollution(
        IsColliding(lineGroupRef.current, cardsWrapperRef.current, "horizontal")
      );
    }
  });

  return (
    <SectionContainer>
      <ContentWrapper css={tw`flex justify-start h-full`}>
        <LeftContainer>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
            css={tw`text-overline uppercase text-gray-light font-bold w-max`}
          >
            solutions
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
            css={tw`text-heading-2 font-normal text-white w-full max-w-full leading-[2.75rem] 2xl:(max-w-xl leading-[3.75rem])`}
          >
            Undisrupting the connectivity between banks, automakers, logistics &
            infra companies
          </motion.p>
        </LeftContainer>

        <RightContainer ref={cardsWrapperRef}>
          <LinesCurve direction="up" position="left">
            <GradientLineUp
              path="M0.9,177.9h32c98,0,177.5-79.5,177.5-177.5l0,0"
              isAnimate={animateSollution}
            />
          </LinesCurve>
          <LinesCurve direction="down" position="left">
            <GradientLineUp
              path="M0.9,177.9h32c98,0,177.5-79.5,177.5-177.5l0,0"
              isAnimate={animateSollution}
            />
          </LinesCurve>
          <LinesCurve direction="up" position="right">
            <GradientLineUp
              path="M209.55,0h0A177.5,177.5,0,0,1,32,177.51H0"
              isAnimate={animateSollution}
            />
          </LinesCurve>
          <LinesCurve direction="down" position="right">
            <GradientLineUp
              path="M209.55,0h0A177.5,177.5,0,0,1,32,177.51H0"
              isAnimate={animateSollution}
            />
          </LinesCurve>

          <div
            css={tw`w-full flex justify-center items-center flex-col gap-y-4 relative z-50`}
          >
            <SolutionCard
              IconComponent={VehiclePaymentIcon}
              title={"Vehicle payments"}
              description={
                "Empower your customers to pay for anything with FASTags, from toll fees to fuel, all while being contactless."
              }
              isAnimate={animateSollution}
            />
            <SolutionCard
              IconComponent={VehicleIdentificationIcon}
              title={"Vehicle identification"}
              description={
                "Offer the delightful digital mobile and web user experience to your FASTag customers with our white-labeled Apps."
              }
              isAnimate={animateSollution}
            />
            <SolutionCard
              IconComponent={VehicleIntegrationIcon}
              title={"Vehicle integration"}
              description={
                "Developer-friendly API platform to build your own solutions as per your use cases."
              }
              isAnimate={animateSollution}
            />
          </div>
        </RightContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default SolutionsBlock;
