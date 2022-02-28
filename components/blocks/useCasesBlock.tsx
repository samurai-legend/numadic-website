import tw from "twin.macro";
import { ContentWrapper, SectionContainer } from "./common";
import HpclLogo from "@/svg/brands/HPCL_Logo.svg";
import { motion, useAnimationFrame } from "framer-motion";
import { EntryVariant, TextEntryVariant } from "animations";
import UseCaseTabs from "../elements/useCaseTabs";
import PaymentStatsUC from "../elements/paymentStatsUC";
import FuelIcon from "@/svg/usecases/fuel.svg";
import ParkingIcon from "@/svg/usecases/parking.svg";
import TicketsIcon from "@/svg/usecases/tickets.svg";
import { forwardRef, useContext, useRef, useState } from "react";
import { GlobalLineContext } from "../layouts";
import { IsColliding } from "helpers/colliding";
import { Typography } from "../typography";
import { ScrollContext } from "../layouts/smoothScroll";
import AnimatedCharacters from "animations/animatedCharacters";

const UseCasesBlock: React.FC<any> = forwardRef((props: any, ref: any) => {
  const { lineGroupRef } = useContext(GlobalLineContext);
  const { IsMobile } = useContext(ScrollContext);

  const paymentRef1 = useRef<any>(null);
  const paymentRef2 = useRef<any>(null);
  const paymentRef3 = useRef<any>(null);

  const [paymentAnim1, setPaymentAnim1] = useState(false);
  const [paymentAnim2, setPaymentAnim2] = useState(false);
  const [paymentAnim3, setPaymentAnim3] = useState(false);

  useAnimationFrame((t) => {
    if (!IsMobile) {
      if (lineGroupRef && paymentRef1) {
        setPaymentAnim1(
          IsColliding(lineGroupRef.current, paymentRef1.current, "horizontal")
        );
        setPaymentAnim2(
          IsColliding(lineGroupRef.current, paymentRef2.current, "horizontal")
        );
        setPaymentAnim3(
          IsColliding(lineGroupRef.current, paymentRef3.current, "horizontal")
        );
      }
    }
  });

  return (
    <SectionContainer ref={ref}>
      <ContentWrapper
        css={tw`flex flex-col justify-between items-center lg:(items-start mb-0)`}
      >
        <div
          css={tw`flex flex-[50%] flex-col w-full items-center text-center lg:(items-start text-left)`}
        >
          <Typography
            as="span"
            type="overline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
          >
            use cases
          </Typography>
          <AnimatedCharacters
            as="h2"
            isColor
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            css={tw`leading-[1.25rem] max-w-full text-center 2xl:(max-w-6xl leading-[3.75rem]) lg:(text-left leading-[2.75rem])`}
            text="Enable next-gen vehicle interface solutions"
          />
          <div
            css={tw`flex w-full flex-col items-start lg:(flex-row) relative`}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={EntryVariant}
              css={tw`relative w-full lg:(w-1/2) mt-2 tall-sm:mt-3`}
            >
              <UseCaseTabs isMobile={IsMobile} />
            </motion.div>
            {!IsMobile && (
              <div
                css={tw`w-full lg:(w-1/2) grid grid-flow-col grid-cols-3 gap-x-5 lg:(gap-x-10) self-end`}
              >
                <PaymentStatsUC
                  ref={paymentRef1}
                  Icon={FuelIcon}
                  amount="2,500"
                  isAnimate={paymentAnim1}
                />
                <PaymentStatsUC
                  ref={paymentRef2}
                  Icon={ParkingIcon}
                  amount="2,500"
                  isAnimate={paymentAnim2}
                />
                <PaymentStatsUC
                  ref={paymentRef3}
                  Icon={TicketsIcon}
                  amount="2,500"
                  isAnimate={paymentAnim3}
                />
              </div>
            )}
          </div>
        </div>

        <div css={tw`flex-[50%]`}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
            css={tw`bg-[#333333] px-4 py-2 max-w-sm flex items-center
           mb-0 gap-x-5 lg:(px-5 py-4 max-w-md mt-20) xl:(max-w-lg)`}
          >
            <div css={tw`inline-block w-max`}>
              <HpclLogo />
            </div>
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
          </motion.div>
        </div>
      </ContentWrapper>
    </SectionContainer>
  );
});

UseCasesBlock.displayName = "UseCasesBlock";
export default UseCasesBlock;
