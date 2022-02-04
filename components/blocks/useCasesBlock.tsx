import tw from "twin.macro";
import { ContentWrapper, SectionContainer } from "./common";
import HpclLogo from "@/svg/brands/HPCL_Logo.svg";

const UseCasesBlock: React.FC<any> = (props: any) => {
  return (
    <SectionContainer>
      <ContentWrapper>
        <div>
          <p css={tw`text-overline uppercase text-gray-light font-bold`}>
            use cases
          </p>
          <p
            css={tw`text-heading-2 font-normal text-white max-w-3xl leading-[3.75rem]`}
          >
            Enable next-gen vehicle interface solutions
          </p>
          <div css={tw`mt-10`}>
            <div css={tw`text-body-3 text-white flex flex-row gap-x-16`}>
              <span>Vehicle payments</span> <span>Vehicle identification</span>{" "}
              <span>Vehicle integration</span>
            </div>
            <div>
              <p css={tw`text-heading-3 text-white font-bold max-w-2xl`}>
                Accept payments for fuel, parking, theatres and more through
                FASTag.
              </p>
            </div>
          </div>
        </div>

        <div
          css={tw`bg-[#333333] px-5 py-4 flex items-center mt-40 max-w-lg gap-x-5`}
        >
          <div css={tw`inline-block w-max`}>
            <HpclLogo />
          </div>
          <div>
            <p css={tw`text-overline uppercase text-gray-light font-bold`}>
              Case study
            </p>
            <p css={tw`text-body-2 text-white leading-[25px]`}>
              How Numadic helped HPCL accept payments for fuel through FASTag
            </p>
          </div>
        </div>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default UseCasesBlock;
