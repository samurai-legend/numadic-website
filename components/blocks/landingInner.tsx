import AnimatedCharacters from "animations/animatedCharacters";
import tw from "twin.macro";
import VerticalLine from "../elements/VerticalLine";
import { ContentWrapper, InnerContentWrapper } from "./common";

const LandingInnerBlock: React.FC<any> = (props: any) => {
  return (
    <ContentWrapper>
      <InnerContentWrapper css={tw`gap-y-10 h-[110vh]`}>
        <div css={tw`flex flex-col gap-y-10`}>
          <AnimatedCharacters
            as="h1"
            isColor
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            css={tw`max-w-[400px] leading-[1.8rem]! 
    md:(max-w-[700px] leading-[3.5rem]!) 
    lg:(max-w-[700px] leading-[4.2rem]!) 
    xl:(max-w-[770px] leading-[4.4rem]!) 
    2xl:(max-w-[770px] leading-[5rem]!)`}
            text="We undisrupt movement."
          />
          <div css={tw`relative`}>
            <VerticalLine css={tw`absolute h-96 top-0`} inView />
          </div>
        </div>
      </InnerContentWrapper>
    </ContentWrapper>
  );
};

export default LandingInnerBlock;
