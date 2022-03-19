import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import tw from "twin.macro";
import { Typography } from "../typography";
import PaymentStatsUC from "./paymentStatsUC";
import VerticalLine from "./VerticalLine";
import { css } from "@emotion/react";
import SvgInline from "./svgInline";

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

const MobileFactsContainer = styled.div(() => [
  tw`w-full grid grid-flow-row-dense  grid-cols-2 my-10 gap-y-5 py-20 relative`,
  css`
    .grid-alternate {
      grid-area: span 1 / span 2;
      &:nth-child(2n + 1) {
        justify-self: flex-start;
      }
      &:nth-child(2n) {
        justify-self: flex-end;
      }
    }
  `,
]);

const UseCaseTabs: React.FC<any> = ({
  isMobile,
  data,
  setSelectedCard,
}: any) => {
  const [selectedTab, setSelectedTab] = useState(data[0]);

  return (
    <>
      <TabsNavsContainer>
        {data.map((item: any) => (
          <TabsNavItem
            key={item.tabTitle}
            onClick={() => {
              setSelectedTab(item);
              setSelectedCard(item.card);
            }}
          >
            <Typography
              as="p"
              type="body-3"
              css={selectedTab === item && tw`font-extrabold text-white`}
            >
              {item.tabTitle}
            </Typography>
            {item === selectedTab ? (
              <ActiveDot layoutId="selectedDot"></ActiveDot>
            ) : null}
          </TabsNavItem>
        ))}
      </TabsNavsContainer>

      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={selectedTab ? selectedTab.tabTitle : "empty"}
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 20 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          css={tw`flex w-full flex-col lg:flex-row`}
        >
          {selectedTab && (
            <div css={tw`flex-[50%]`}>
              <Typography
                as="h3"
                isColor
                css={tw`font-bold max-w-2xl mt-1 leading-6 xl:(mt-5 leading-10) mt-4 lg:(mt-0) w-h-lg:(mt-1 leading-9)`}
              >
                {selectedTab.tabContent}
              </Typography>
            </div>
          )}
          {!isMobile ? (
            <div css={tw`flex-[50%]`}>
              <div
                css={tw`w-full grid grid-flow-col grid-cols-3 gap-x-5 lg:(gap-x-10) self-end`}
              >
                {selectedTab.facts?.map((item: any, index: number) => (
                  <PaymentStatsUC
                    key={index}
                    Icon={<SvgInline url={item.icon.data.attributes.url} />}
                    amount={item.price}
                    animate={true}
                  />
                ))}
              </div>
            </div>
          ) : (
            <MobileFactsContainer>
              {selectedTab.facts?.map((item: any, index: number) => (
                <PaymentStatsUC
                  key={index}
                  Icon={<SvgInline url={item.icon.data.attributes.url} />}
                  amount={item.price}
                  className="grid-alternate"
                  direction={index % 2 == 0 ? "right" : "left"}
                />
              ))}
              <VerticalLine
                inView
                css={tw`h-full absolute justify-self-center z-[1]`}
              />
            </MobileFactsContainer>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default UseCaseTabs;
