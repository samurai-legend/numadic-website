import tw from "twin.macro";
import { ContentWrapper, SectionContainer } from "./common";
import HpclLogo from "@/svg/brands/HPCL_Logo.svg";
import { motion } from "framer-motion";
import { TextEntryVariant } from "animations";
import UseCaseTabs from "../elements/useCaseTabs";
import PaymentStatsUC from "../elements/paymentStatsUC";
import FuelIcon from "@/svg/usecases/fuel.svg";
import ParkingIcon from "@/svg/usecases/parking.svg";
import TicketsIcon from "@/svg/usecases/tickets.svg";

const UseCasesBlock: React.FC<any> = (props: any) => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
            css={tw`text-overline uppercase text-gray-light font-bold w-max`}
          >
            use cases
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
            css={tw`text-heading-2 font-normal text-white max-w-3xl leading-[3.75rem]`}
          >
            Enable next-gen vehicle interface solutions
          </motion.p>
          <div css={tw`flex w-full`}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={TextEntryVariant}
              css={tw`mt-10 relative w-1/2`}
            >
              <UseCaseTabs />
            </motion.div>
            <div css={tw`w-1/2 grid grid-flow-col grid-cols-3`}>
              <PaymentStatsUC Icon={FuelIcon} amount="2,500" />
              <PaymentStatsUC Icon={ParkingIcon} amount="2,500" />
              <PaymentStatsUC Icon={TicketsIcon} amount="2,500" />
            </div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={TextEntryVariant}
          css={tw`bg-[#333333] px-5 py-4 flex items-center mt-40 max-w-lg gap-x-5`}
        >
          <div css={tw`inline-block w-max`}>
            <HpclLogo />
          </div>
          <div>
            <p css={tw`text-overline uppercase text-gray-light font-bold`}>
              Case study
            </p>
            <p css={tw`text-body-2 text-white leading-[25px]`}>
              How Numadic helped HPCL accept payments for fuel through FASTag
            </p>
          </div>
        </motion.div>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default UseCasesBlock;
