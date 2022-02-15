import tw from "twin.macro";
import { SectionContainer, ContentWrapper } from "./common";
import MapPattern from "@/svg/movement/map.svg";
import { useContext, useEffect, useRef, useState } from "react";
import BoschLogo from "@/svg/brands/bosh.svg";
import AdityaBirlaLogo from "@/svg/brands/aditya_birla.svg";
import IciciBankLogo from "@/svg/brands/icicibank.svg";
import KotakBankLogo from "@/svg/brands/kotakbank.svg";
import MahindraLogo from "@/svg/brands/mahindra.svg";
import { motion, useAnimationFrame } from "framer-motion";
import { TextEntryVariant } from "animations";
import { GlobalLineContext } from "../layouts";
import { IsColliding } from "helpers/colliding";
import Counter from "../elements/counter";
import { Typography } from "../typography";
import { ScrollContext } from "../layouts/smoothScroll";

const MovementBlock: React.FC<any> = (props: any) => {
  const { lineGroupRef } = useContext(GlobalLineContext);
  const { IsMobile } = useContext(ScrollContext);
  const [animValue1, setValue1] = useState(false);
  const [animValue2, setValue2] = useState(false);
  const [animValue3, setValue3] = useState(false);

  const ValueRef1 = useRef(null);
  const ValueRef2 = useRef(null);
  const ValueRef3 = useRef(null);

  useAnimationFrame((t) => {
    if (!IsMobile) {
      setValue1(
        IsColliding(lineGroupRef.current, ValueRef1.current, "horizontal")
      );
      setValue2(
        IsColliding(lineGroupRef.current, ValueRef2.current, "horizontal")
      );
      setValue3(
        IsColliding(lineGroupRef.current, ValueRef3.current, "horizontal")
      );
    }
  });
  return (
    <SectionContainer>
      <div
        css={tw`absolute w-screen h-full flex justify-center items-center z-0 pointer-events-none`}
      >
        <MapPattern />
      </div>
      <ContentWrapper css={tw`flex flex-col justify-between`}>
        <div
          css={tw`flex flex-col items-center text-center lg:(items-start text-left)`}
        >
          <Typography
            as="h2"
            isColor
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
            css={tw`max-w-3xl w-max`}
          >
            Undisrupting movement
          </Typography>
          <div css={tw`flex w-full justify-between mt-16 tall-sm:mt-28 px-20`}>
            <motion.div
              initial="hidden"
              animate={animValue1 && "visible"}
              variants={TextEntryVariant}
              css={tw`flex items-center justify-center flex-col`}
              ref={ValueRef1}
            >
              <Typography as="h2" isColor css={tw`font-bold`}>
                <Counter isAnimate={animValue1} from={0} to={14000} />
              </Typography>
              <Typography as="span" type="overline">
                AVG. DAILY TRANSACTION VALUE
              </Typography>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={animValue2 && "visible"}
              variants={TextEntryVariant}
              css={tw`flex items-center justify-center flex-col`}
              ref={ValueRef2}
            >
              <Typography as="h2" isColor css={tw`font-bold`}>
                <Counter isAnimate={animValue2} from={0} to={97445} />
              </Typography>
              <Typography as="span" type="overline">
                AVG. DAILY TRANSACTION VALUE
              </Typography>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={animValue3 && "visible"}
              variants={TextEntryVariant}
              css={tw`flex items-center justify-center flex-col`}
              ref={ValueRef3}
            >
              <Typography as="h2" isColor css={tw`font-bold`}>
                <Counter isAnimate={animValue3} from={0} to={14000} />
              </Typography>
              <Typography as="span" type="overline">
                AVG. DAILY TRANSACTION VALUE
              </Typography>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={TextEntryVariant}
          css={tw`flex flex-col justify-center items-center mb-20 tall-lg:mb-40`}
        >
          <Typography as="p" isColor type="body-2">
            Together with the industry leaders
          </Typography>
          <div css={tw`flex gap-20 mt-10 flex-col items-center lg:(flex-row items-start)`}>
            <BoschLogo />
            <IciciBankLogo />
            <AdityaBirlaLogo css={tw`mix-blend-luminosity`} />

            <KotakBankLogo />
            <MahindraLogo />
          </div>
        </motion.div>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default MovementBlock;
