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

const MovementBlock: React.FC<any> = (props: any) => {
  const { lineGroupRef } = useContext(GlobalLineContext);

  const [animValue1, setValue1] = useState(false);
  const [animValue2, setValue2] = useState(false);
  const [animValue3, setValue3] = useState(false);

  const ValueRef1 = useRef(null);
  const ValueRef2 = useRef(null);
  const ValueRef3 = useRef(null);

  useAnimationFrame((t) => {
    setValue1(
      IsColliding(lineGroupRef.current, ValueRef1.current, "horizontal")
    );
    setValue2(
      IsColliding(lineGroupRef.current, ValueRef2.current, "horizontal")
    );
    setValue3(
      IsColliding(lineGroupRef.current, ValueRef3.current, "horizontal")
    );
  });
  return (
    <SectionContainer>
      <div
        css={tw`absolute w-screen h-full flex justify-center items-center z-0 pointer-events-none`}
      >
        <MapPattern />
      </div>
      <ContentWrapper>
        <div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
            css={tw`text-heading-2 font-normal text-white max-w-3xl leading-[3.75rem] w-max`}
          >
            Undisrupting movement
          </motion.p>
        </div>
        <div css={tw`flex w-full justify-between mt-28 px-20`}>
          <motion.div
            initial="hidden"
            animate={animValue1 && "visible"}
            variants={TextEntryVariant}
            css={tw`flex items-center justify-center flex-col`}
            ref={ValueRef1}
          >
            <h2 css={tw`text-heading-2 font-bold text-white`}>
              <Counter isAnimate={animValue1} from={0} to={14000} />
            </h2>
            <span css={tw`text-overline uppercase text-gray-light font-bold`}>
              AVG. DAILY TRANSACTION VALUE
            </span>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={animValue2 && "visible"}
            variants={TextEntryVariant}
            css={tw`flex items-center justify-center flex-col`}
            ref={ValueRef2}
          >
            <h2 css={tw`text-heading-2 font-bold text-white`}>
              <Counter isAnimate={animValue2} from={0} to={97445} />
            </h2>
            <span css={tw`text-overline uppercase text-gray-light font-bold`}>
              AVG. DAILY TRANSACTION VALUE
            </span>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={animValue3 && "visible"}
            variants={TextEntryVariant}
            css={tw`flex items-center justify-center flex-col`}
            ref={ValueRef3}
          >
            <h2 css={tw`text-heading-2 font-bold text-white`}>
              <Counter isAnimate={animValue3} from={0} to={14000} />
            </h2>
            <span css={tw`text-overline uppercase text-gray-light font-bold`}>
              AVG. DAILY TRANSACTION VALUE
            </span>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={TextEntryVariant}
          css={tw`flex flex-col justify-center items-center mt-40`}
        >
          <span css={tw`text-body-3 text-white font-normal`}>
            Together with the industry leaders
          </span>
          <div css={tw`flex gap-20 mt-10`}>
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
