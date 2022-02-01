import styled from "@emotion/styled";
import { FunctionComponent } from "react";
import tw from "twin.macro";
import { SectionContainer } from "./common";

const UseCasesBlock: FunctionComponent<any> = (props: any) => {
  return (
    <SectionContainer>
      <div css={tw`w-full`}>
        <p css={tw`text-overline uppercase text-gray-light font-bold`}>
          use cases
        </p>
        <p
          css={tw`text-heading-2 font-normal text-white max-w-3xl leading-[3.75rem]`}
        >
          Enable next-gen vehicle interface solutions
        </p>
      </div>
    </SectionContainer>
  );
};

export default UseCasesBlock;
