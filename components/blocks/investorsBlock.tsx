import tw from "twin.macro";
import { ContentWrapper, SectionContainer } from "./common";
import MapPattern from "@/svg/movement/map.svg";
import { useRef } from "react";
import NineUnifcornLogo from "@/svg/brands/9unifcorn.svg";
import CvwLogo from "@/svg/brands/cvw.svg";
import DynamoLogo from "@/svg/brands/dynamo.svg";
import SapStartupLogo from "@/svg/brands/sap_startup.svg";

const InvestorsBlock: React.FC<any> = (props: any) => {
  const mapRef = useRef(null);
  return (
    <SectionContainer>
      <div
        css={tw`absolute w-screen h-full flex justify-center items-center -top-10 z-0`}
      >
        <MapPattern ref={mapRef} />
      </div>
      <ContentWrapper>
        <div css={tw`grid grid-cols-2 grid-flow-col gap-4`}>
          <p
            css={tw`text-heading-2 font-normal text-white max-w-md leading-[3.75rem]`}
          >
            Fueled by terrific investors
          </p>
          <div css={tw`grid grid-rows-2 grid-flow-col gap-y-24`}>
            <DynamoLogo />
            <CvwLogo />
            <NineUnifcornLogo />
            <SapStartupLogo />
          </div>
        </div>
        <div css={tw`grid grid-cols-2 grid-flow-col gap-4 mt-44`}>
          <div>
            <p css={tw`text-heading-2 text-white font-bold leading-[60px]`}>And you...</p>
            <span css={tw`text-body-1 text-white block max-w-lg`}>
              We’re always on the lookout for bright, humble people to join our
              journey.
            </span>
          </div>
          <div css={tw`flex items-center`}>
            <button
              css={tw`border-white border-2 appearance-none text-white font-normal text-body-2 px-8 py-1 hover:(bg-gray-700) transition-all duration-150 ease-in`}
            >
              View open positions
            </button>
          </div>
        </div>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default InvestorsBlock;
