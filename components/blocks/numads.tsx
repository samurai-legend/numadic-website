import styled from "@emotion/styled";
import tw from "twin.macro";
import NumadsCard from "../elements/numadCard";
import { Typography } from "../typography";
import { ContentWrapper, InnerContentWrapper } from "./common";

const NumadsTeamContainer = styled.div(() => [
  tw`grid grid-flow-row grid-cols-2 w-full h-full gap-y-5 gap-x-5 mt-10`,
  tw`md:(grid-cols-3 gap-y-20 mt-16)`,
  tw`lg:(grid-cols-4 gap-y-24 mt-32)`,
]);

const NumadContentWrapper = styled.div(() => [
  tw`flex flex-col gap-y-10 text-left justify-start w-full`,
  tw`lg:(flex-row gap-y-0)`,
]);

const Numads: React.FC<any> = (props: any) => {
  return (
    <ContentWrapper>
      <InnerContentWrapper padding>
        <NumadContentWrapper>
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
        </NumadContentWrapper>
        <NumadsTeamContainer>
          <NumadsCard
            src="/images/luke.png"
            ocupation="Founder, CEO"
            name="Luke"
          />
          <NumadsCard
            src="/images/aprup.png"
            ocupation="co-founder"
            name="Luke"
          />
          <NumadsCard
            src="/images/luke.png"
            ocupation="Founder, CEO"
            name="Luke"
          />
          <NumadsCard
            src="/images/luke.png"
            ocupation="Founder, CEO"
            name="Luke"
          />
          <NumadsCard
            src="/images/aprup.png"
            ocupation="co-founder"
            name="Luke"
          />
          <NumadsCard
            src="/images/aprup.png"
            ocupation="co-founder"
            name="Luke"
          />
          <NumadsCard
            src="/images/luke.png"
            ocupation="Founder, CEO"
            name="Luke"
          />
        </NumadsTeamContainer>
      </InnerContentWrapper>
    </ContentWrapper>
  );
};

export default Numads;
