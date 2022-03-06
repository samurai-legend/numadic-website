import tw from "twin.macro";
import NumadsCard from "../elements/numadCard";
import { Typography } from "../typography";
import { ContentWrapper, InnerContentWrapper } from "./common";

const Numads: React.FC<any> = (props: any) => {
  return (
    <ContentWrapper>
      <InnerContentWrapper padding>
        <div css={tw`flex text-left justify-start w-full`}>
          <div css={tw`flex-[50%]`}>
            <Typography as="p" isColor>
              We are
            </Typography>
            <Typography as="h2" css={tw`font-bold`} isColor>
              Numads.
            </Typography>
          </div>
          <div css={tw`flex-[50%]`}>
            <Typography as="h3" isColor>
              Numads - the people of Numadic.
            </Typography>
            <Typography as="p" isColor css={tw`font-thin leading-8!`}>
              Full stack humans, comfortable across digital and physical
              landscapes. United on a journey to undisrupt movement.
            </Typography>
          </div>
        </div>
        <div
          css={tw`grid grid-flow-row grid-cols-4 w-full h-full gap-y-24 mt-32`}
        >
          <NumadsCard />
          <NumadsCard />
          <NumadsCard />
          <NumadsCard />
          <NumadsCard />
          <NumadsCard />
        </div>
      </InnerContentWrapper>
    </ContentWrapper>
  );
};

export default Numads;
