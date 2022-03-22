import TimeGoal from "./TimeGoal";
import styled from "@emotion/styled";
import tw from "twin.macro";

const TimelineContainer = styled.div(() => [
  tw`w-full max-w-2xl mx-auto grid grid-flow-row-dense grid-cols-2 my-10 gap-y-5 py-20 relative`,
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
        year="2016"
        goaldescription="Nu Track - our GPS based tracking & billing platform launches."
      />
      <TimeGoal
        direction="right"
        year="2017"
        goaldescription="Launched the Nubot - our in-house designed GPS tracking hardware to compliment Nu Track."
      />
      <TimeGoal
        direction="left"
        year="2017"
        goaldescription="Started work on the FASTag platform."
      />
      <TimeGoal
        direction="right"
        year="2018"
        goaldescription="Launched NuToll, our FASTag app platform."
      />
      <TimeGoal
        direction="left"
        year="2019"
        goaldescription="Started work on the FASTag platform."
      />
      <TimeGoal
        direction="right"
        year="2019"
        goaldescription="Launched NuToll, our FASTag app platform."
      />
      <TimeGoal
        direction="left"
        year="2020"
        goaldescription="Started work on the FASTag platform."
      />
      <TimeGoal
        direction="right"
        year="2020"
        goaldescription="Launched NuToll, our FASTag app platform. "
      />
      <TimeGoal
        direction="left"
        year="2021"
        goaldescription="Started work on the FASTag platform."
      />
      <TimeGoal
        direction="right"
        year="2021"
        goaldescription="Launched NuToll, our FASTag app platform."
      />
      <TimeGoal
        direction="left"
        year="2022"
        goaldescription="Started work on the FASTag platform."
      />
    </TimelineContainer>
  );
};

export default RoadMapTimeline;
