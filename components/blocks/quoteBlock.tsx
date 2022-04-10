import { TextEntryVariant } from "animations";
import AnimatedCharacters from "animations/animatedCharacters";
import tw from "twin.macro";
import VerticalLine from "../elements/VerticalLine";
import { Typography } from "../typography";
import { ContentWrapper, InnerContentWrapper } from "./common";

const QuoteBlock: React.FC<any> = (props: any) => {
  return (
    <ContentWrapper>
      <InnerContentWrapper padding>
        <AnimatedCharacters
          as="h2"
          isColor
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          css={tw`max-w-[400px] font-bold leading-[1.8rem]! 
            md:(max-w-[700px] leading-[3.5rem]!) 
            lg:(max-w-[700px] leading-[4.2rem]!) 
            xl:(max-w-[770px] leading-[4.4rem]!) 
            2xl:(max-w-[770px] leading-[5rem]!)`}
          text="Undisrupt."
        />
        <Typography
          as="p"
          isColor
          type="quote"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={TextEntryVariant}
          css={tw`font-light max-w-6xl`}
        >
          Movement is typically chaotic and the industries that serve it, quite
          disrupted.
          <br /> We exist to simplify, optimise, automate and undisrupt
          movement.
        </Typography>
      </InnerContentWrapper>
    </ContentWrapper>
  );
};

export default QuoteBlock;
