import styled from "@emotion/styled";
import {
  forwardRef,
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
import { useAnimationFrame, useElementScroll } from "framer-motion";
import { TextEntryVariant } from "animations";
import { Typography } from "../typography";
import { ScrollContext } from "../layouts/smoothScroll";
import AnimatedCharacters from "animations/animatedCharacters";
import VerticalLine from "../elements/VerticalLine";

const LinesCurve = styled.div(({ direction, position }: any) => [
  tw`w-28 xl:w-32 2xl:w-44 absolute top-[50%] `,
  tw`w-h-lg:(w-[110px] right-10)`,
  direction === "up" && position === "left" && [tw`translate-y-[-84.5%]`],
  direction === "down" &&
    position === "left" && [tw`translate-y-[10.5%] -rotate-180 scale-x-[-1]`],
  direction === "up" &&
    position === "right" && [tw`translate-y-[-98%] right-[20px] scale-x-[-1]`],
  direction === "down" &&
    position === "right" && [
      tw` translate-y-[-2%] -rotate-180 right-[20px] scale-x-[1]`,
    ],
]);

const TopContainer = styled.div(() => [
  tw`w-full flex flex-col items-center`,
  tw`lg:(items-start)`,
]);

const BottomContainer = styled.div(() => [
  tw`w-full absolute flex items-center top-1/2 -translate-y-1/2`,
]);

const SolutionsBlock: FunctionComponent<any> = forwardRef(
  (props: any, ref: any) => {
    const { lineGroupRef } = useContext(GlobalLineContext);
    const { IsMobile, setPauseScroll } = useContext(ScrollContext);

    const [animVPayment, setAnimVPayment] = useState(false);
    const [animVIndentification, setAnimVIndentification] = useState(false);
    const [animVIntegration, setAnimVIntegration] = useState(false);
    const animVPaymentRef = useRef(null);
    const animVIndentificationRef = useRef(null);
    const animVIntegrationRef = useRef(null);

    const [animExitLines, setAnimExitLines] = useState(false);
    const animExitLinesRef = useRef(null);

    useAnimationFrame((t) => {
      if (!IsMobile) {
        if (lineGroupRef && animVPaymentRef) {
          setAnimVPayment(
            IsColliding(
              lineGroupRef.current,
              animVPaymentRef.current,
              "horizontal"
            )
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
      }
    });

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
              solutions
            </Typography>
            <AnimatedCharacters
              as="h2"
              isColor
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              css={tw`leading-[1.75rem] max-w-full text-center 2xl:(max-w-6xl leading-[3.75rem]) lg:(text-left leading-[2.75rem]) w-h-lg:(leading-[2.4rem])`}
              text="Undisrupting the connectivity between banks, automakers, logistics &
            infra companies"
            />
          </TopContainer>
          {IsMobile && (
            <div
              css={tw`w-full flex flex-col justify-center items-center gap-y-4 relative z-50 pt-20 pb-32 mt-5`}
            >
              <SolutionCard
                IconComponent={VehiclePaymentIcon}
                title={"Vehicle payments"}
                description={
                  "Empower your customers to pay for anything with FASTags, from toll fees to fuel, all while being contactless."
                }
              />
              <SolutionCard
                IconComponent={VehicleIdentificationIcon}
                title={"Vehicle identification"}
                description={
                  "Offer the delightful digital mobile and web user experience to your FASTag customers with our white-labeled Apps."
                }
              />
              <SolutionCard
                IconComponent={VehicleIntegrationIcon}
                title={"Vehicle integration"}
                description={
                  "Developer-friendly API platform to build your own solutions as per your use cases."
                }
              />
              <VerticalLine
                css={tw`h-full absolute bottom-2 visible lg:hidden z-[-1]`}
              />
            </div>
          )}
        </ContentWrapper>

        {!IsMobile && (
          <>
            <BottomContainer>
              <div css={tw`w-full z-0 relative container m-auto -right-14`}>
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
          </>
        )}
      </SectionContainer>
    );
  }
);
SolutionsBlock.displayName = "SolutionsBlock";
export default SolutionsBlock;
