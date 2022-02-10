import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import tw from "twin.macro";

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
  tw`text-body-3 text-white flex flex-row gap-x-16`,
]);

const TabsNavItem = styled(motion.li)(({ active }: any) => [
  tw`flex flex-col relative py-2 text-gray-light cursor-pointer`,
  active && tw`font-extrabold text-white`,
]);

const ActiveDot = styled(motion.span)(() => [
  tw`absolute bottom-0 left-1/2 -translate-x-1/2 h-2 w-2 
  bg-gradient-to-br block from-blue-dark to-blue-light rounded-full`,
]);

const UseCaseTabs: React.FC<any> = (props: any) => {
  const [selectedTab, setSelectedTab] = useState(Data[0]);

  return (
    <>
      <TabsNavsContainer>
        {Data.map((item) => (
          <TabsNavItem
            key={item.label}
            active={selectedTab === item}
            onClick={() => setSelectedTab(item)}
          >
            {item.label}
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
            <p css={tw`text-heading-3 text-white font-bold max-w-2xl mt-5`}>
              {selectedTab.content}
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default UseCaseTabs;
