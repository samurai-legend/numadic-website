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
import { GlobalLineContext } from "../layouts";
import { IsColliding } from "helpers/colliding";
import { motion, useAnimationFrame, useViewportScroll } from "framer-motion";
import { TextEntryVariant } from "animations";

const LinesCurve = styled.div(({ direction, position }: any) => [
  tw`w-44 absolute top-[50%] `,
  direction === "up" && position === "left" && [tw`translate-y-[-84.5%]`],
  direction === "down" &&
    position === "left" && [tw`translate-y-[10.5%] -rotate-180 scale-x-[-1]`],
  direction === "up" &&
    position === "right" && [tw`translate-y-[-98%] right-[-10%] scale-x-[-1]`],
  direction === "down" &&
    position === "right" && [
      tw` translate-y-[-2%] -rotate-180 right-[-10%] scale-x-[1]`,
    ],
]);

const TopContainer = styled.div(() => [tw`w-full`]);

const BottomContainer = styled.div(() => [
  tw`w-full absolute flex items-center top-1/2 -translate-y-1/2`,
]);

const SolutionsBlock: FunctionComponent<any> = (props: any) => {
  const { lineGroupRef } = useContext(GlobalLineContext);

  const [animVPayment, setAnimVPayment] = useState(false);
  const [animVIndentification, setAnimVIndentification] = useState(false);
  const [animVIntegration, setAnimVIntegration] = useState(false);
  const animVPaymentRef = useRef(null);
  const animVIndentificationRef = useRef(null);
  const animVIntegrationRef = useRef(null);

  const [animExitLines, setAnimExitLines] = useState(false);
  const animExitLinesRef = useRef(null);

  useAnimationFrame((t) => {
    if (lineGroupRef && animVPaymentRef) {
      setAnimVPayment(
        IsColliding(lineGroupRef.current, animVPaymentRef.current, "horizontal")
      );
      setAnimVIndentification(
        IsColliding(
          lineGroupRef.current,
          animVIndentificationRef.current,
          "horizontal"
        )
      );
      setAnimVIntegration(
        IsColliding(
          lineGroupRef.current,
          animVIntegrationRef.current,
          "horizontal"
        )
      );
      setAnimExitLines(
        IsColliding(
          lineGroupRef.current,
          animExitLinesRef.current,
          "horizontal"
        )
      );
    }
  });

  const { scrollY } = useViewportScroll();
  const SectionRef = useRef<any>(null);

  useEffect(() => {
    scrollY.onChange((t) => {
      const section = SectionRef.current.getBoundingClientRect();

      section.left <= 0 && console.log("Section Left touched");
      t > section.right && console.log("Section Crossed ");
    });
  }, [scrollY]);

  return (
    <SectionContainer ref={SectionRef}>
      <ContentWrapper css={tw`flex flex-col`}>
        <TopContainer>
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
            css={tw`text-heading-2 font-normal text-white w-full max-w-full leading-[2.75rem] 2xl:(max-w-6xl leading-[3.75rem])`}
          >
            Undisrupting the connectivity between banks, automakers, logistics &
            infra companies
          </motion.p>
        </TopContainer>
      </ContentWrapper>

      <BottomContainer>
        <div css={tw`w-full z-0 relative container m-auto`}>
          <div
            css={tw`absolute right-0 z-20 top-1/2`}
            ref={animExitLinesRef}
          ></div>
          <LinesCurve direction="up" position="right">
            <GradientLineUp
              path="M209.55,0h0A177.5,177.5,0,0,1,32,177.51H0"
              isAnimate={animExitLines}
            />
          </LinesCurve>
          <LinesCurve direction="down" position="right">
            <GradientLineUp
              path="M209.55,0h0A177.5,177.5,0,0,1,32,177.51H0"
              isAnimate={animExitLines}
            />
          </LinesCurve>
        </div>
      </BottomContainer>

      <BottomContainer css={tw`z-50`}>
        {/* <LinesCurve direction="up" position="left">
            <GradientLineUp path="M0.9,177.9h32c98,0,177.5-79.5,177.5-177.5l0,0" isAnimate/>
          </LinesCurve>
          <LinesCurve direction="down" position="left">
            <GradientLineUp path="M0.9,177.9h32c98,0,177.5-79.5,177.5-177.5l0,0" isAnimate/>
          </LinesCurve> */}

        <div
          css={tw`w-full flex justify-center items-center flex-row  gap-x-4 relative z-50 container m-auto`}
        >
          <SolutionCard
            IconComponent={VehiclePaymentIcon}
            title={"Vehicle payments"}
            description={
              "Empower your customers to pay for anything with FASTags, from toll fees to fuel, all while being contactless."
            }
            isAnimate={animVPayment}
            ref={animVPaymentRef}
          />
          <SolutionCard
            IconComponent={VehicleIdentificationIcon}
            title={"Vehicle identification"}
            description={
              "Offer the delightful digital mobile and web user experience to your FASTag customers with our white-labeled Apps."
            }
            isAnimate={animVIndentification}
            ref={animVIndentificationRef}
          />
          <SolutionCard
            IconComponent={VehicleIntegrationIcon}
            title={"Vehicle integration"}
            description={
              "Developer-friendly API platform to build your own solutions as per your use cases."
            }
            isAnimate={animVIntegration}
            ref={animVIntegrationRef}
          />
        </div>
      </BottomContainer>
    </SectionContainer>
  );
};

export default SolutionsBlock;
