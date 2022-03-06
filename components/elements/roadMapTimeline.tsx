import { css } from "@emotion/react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import PaymentStatsUC from "./paymentStatsUC";

const TimelineContainer = styled.div(() => [
  tw`w-full max-w-2xl mx-auto grid grid-flow-row-dense grid-cols-2 my-10 gap-y-5 py-20 relative`,
  css`
    .grid-alternate {
      display: flex;
      grid-area: span 1 / span 2;
      ${tw`after:(contents[""]
       border-4 border-black-dark 
       absolute bottom-0 left-1/2
       h-6 w-6 rounded-full bg-white z-10 -translate-x-1/2)`}
      &:nth-child(2n + 1) {
        ${tw`justify-start`}
      }
      &:nth-child(2n) {
        ${tw`justify-end`}
      }
    }
  `,
]);

const ContentBubble = styled.div(() => [
  tw`bg-gray-medium h-20 w-40`,
  tw`relative translate-y-1/2`,
]);

const RoadMapTimeline: React.FC<any> = (props: any) => {
  return (
    <TimelineContainer>
      <div className="grid-alternate" css={tw`w-full h-full relative`}>
        <ContentBubble></ContentBubble>
      </div>
      <div className="grid-alternate" css={tw`w-full h-full relative`}>
        <ContentBubble></ContentBubble>
      </div>
      <div className="grid-alternate" css={tw`w-full h-full relative`}>
        <ContentBubble></ContentBubble>
      </div>
      <div className="grid-alternate" css={tw`w-full h-full relative`}>
        <ContentBubble></ContentBubble>
      </div>
      <div className="grid-alternate" css={tw`w-full h-full relative`}>
        <ContentBubble></ContentBubble>
      </div>
    </TimelineContainer>
  );
};

export default RoadMapTimeline;
