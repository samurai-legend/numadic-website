import TimeGoal from "./TimeGoal";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import PaymentStatsUC from "./paymentStatsUC";
import { useEffect, useState } from "react";

const TimelineContainer = styled.div(() => [
  tw`w-full max-w-2xl mx-auto grid grid-flow-row-dense grid-cols-2 my-10 gap-y-5 py-20 relative`,
  css`
    .grid-alternate {
    }
  `,
]);

const RoadMapTimeline: React.FC<any> = (props: any) => {
  return (
    <TimelineContainer>
      <TimeGoal
        direction="right"
        year="2015"
        goaldescription="Numadic forms in London, UK."
      />
      <TimeGoal
        direction="left"
        year="2015"
        goaldescription="Nu Track - our GPS based tracking & billing platform launches."
      />
      <TimeGoal
        direction="right"
        year="2015"
        goaldescription="Numadic forms in London, UK."
      />
      <TimeGoal
        direction="left"
        year="2015"
        goaldescription="Numadic forms in London, UK."
      />
      <TimeGoal
        direction="right"
        year="2015"
        goaldescription="Numadic forms in London, UK."
      />
    </TimelineContainer>
  );
};

export default RoadMapTimeline;
