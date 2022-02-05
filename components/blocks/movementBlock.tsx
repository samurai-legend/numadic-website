import tw from "twin.macro";
import { SectionContainer, ContentWrapper } from "./common";
import MapPattern from "@/svg/movement/map.svg";
import { useEffect, useRef } from "react";
import BoschLogo from "@/svg/brands/bosh.svg";
import AdityaBirlaLogo from "@/svg/brands/aditya_birla.svg";
import IciciBankLogo from "@/svg/brands/icicibank.svg";
import KotakBankLogo from "@/svg/brands/kotakbank.svg";
import MahindraLogo from "@/svg/brands/mahindra.svg";
import { motion } from "framer-motion";
import { TextEntryVariant } from "animations";

const MovementBlock: React.FC<any> = (props: any) => {
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef && console.log(mapRef);
  }, [mapRef]);
  return (
    <SectionContainer>
      <div
        css={tw`absolute w-screen h-full flex justify-center items-center -top-10 z-0 pointer-events-none`}
      >
        <MapPattern ref={mapRef} />
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={TextEntryVariant}
          css={tw`flex w-full justify-between mt-28 px-20`}
        >
          <div css={tw`flex items-center justify-center flex-col`}>
            <h2 css={tw`text-heading-2 font-bold text-white`}>14,0000</h2>
            <span css={tw`text-overline uppercase text-gray-light font-bold`}>
              AVG. DAILY TRANSACTION VALUE
            </span>
          </div>
          <div css={tw`flex items-center justify-center flex-col`}>
            <h2 css={tw`text-heading-2 font-bold text-white`}>97,445</h2>
            <span css={tw`text-overline uppercase text-gray-light font-bold`}>
              AVG. DAILY TRANSACTION VALUE
            </span>
          </div>
          <div css={tw`flex items-center justify-center flex-col`}>
            <h2 css={tw`text-heading-2 font-bold text-white`}>14,0000</h2>
            <span css={tw`text-overline uppercase text-gray-light font-bold`}>
              AVG. DAILY TRANSACTION VALUE
            </span>
          </div>
        </motion.div>

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
