import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import tw from "twin.macro";
import { Typography } from "../typography";
import PaymentStatsUC from "./paymentStatsUC";
import FuelIcon from "@/svg/usecases/fuel.svg";
import ParkingIcon from "@/svg/usecases/parking.svg";
import TicketsIcon from "@/svg/usecases/tickets.svg";

const Data = [
  {
    label: "Vehicle payment",
    content:
      "Accept payments for fuel, parking, theatres and more through FASTag.",
  },
  {
    label: "Vehicle identification",
    content:
      "Identify & monitor vehicles for fee collection, entry/exit at premises, fine collection and more",
  },
  {
    label: "Vehicle integration",
    content:
      "Identify & monitor vehicles for fee collection, entry/exit at premises, fine collection and more",
  },
];

const TabsNavsContainer = styled(motion.ul)(() => [
  tw`text-body-3 text-white flex flex-row gap-x-16 justify-center lg:(justify-start)`,
]);

const TabsNavItem = styled(motion.li)(() => [
  tw`flex flex-col relative pb-5 pt-5 max-w-[80px] lg:(pb-5 pt-2 max-w-full) 2xl:(pb-3 pt-0) text-gray-light cursor-pointer`,
  tw`w-h-lg:(pb-0)`,
]);

const ActiveDot = styled(motion.span)(() => [
  tw`absolute bottom-0 left-1/2 -translate-x-1/2 h-2 w-2 
  bg-gradient-to-br block from-blue-dark to-blue-light rounded-full`,
  tw`mt-4`,
]);

const UseCaseTabs: React.FC<any> = (props: any) => {
  const { isMobile } = props;
  const [selectedTab, setSelectedTab] = useState(Data[0]);

  return (
    <>
      <TabsNavsContainer>
        {Data.map((item) => (
          <TabsNavItem key={item.label} onClick={() => setSelectedTab(item)}>
            <Typography
              as="p"
              type="body-3"
              css={selectedTab === item && tw`font-extrabold text-white`}
            >
              {item.label}
            </Typography>
            {item === selectedTab ? (
              <ActiveDot layoutId="selectedDot"></ActiveDot>
            ) : null}
          </TabsNavItem>
        ))}
      </TabsNavsContainer>

      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={selectedTab ? selectedTab.label : "empty"}
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 20 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          {selectedTab && (
            <Typography
              as="h3"
              isColor
              css={tw`font-bold max-w-2xl mt-1 leading-6 xl:(mt-5 leading-10) mt-4 lg:(mt-0) w-h-lg:(mt-1 leading-9)`}
            >
              {selectedTab.content}
            </Typography>
          )}
        </motion.div>
      </AnimatePresence>
      {isMobile && (
        <div css={tw`w-full grid grid-flow-col grid-cols-3 my-10 gap-x-2`}>
          <PaymentStatsUC Icon={FuelIcon} amount="2,500" />

          <PaymentStatsUC Icon={ParkingIcon} amount="2,500" />

          <PaymentStatsUC Icon={TicketsIcon} amount="2,500" />
        </div>
      )}
    </>
  );
};

export default UseCaseTabs;
