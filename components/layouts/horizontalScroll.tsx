import GradientLine from "@/components/elements/gradientLine";
import styled from "@emotion/styled";
import { createContext, useRef } from "react";
import tw from "twin.macro";
import SmoothScroll, { ScrollDirection } from "./smoothScroll";

const ContainerWrapper = styled.div(() => [
  tw`w-max h-full relative flex
    flex-col lg:flex-row`,
]);

export const GlobalLineContext = createContext<any>({});

const HorizontalScroll = ({ children, elRefs }: any) => {
  const lineGroupRef = useRef(null);
  return (
    <GlobalLineContext.Provider value={{ lineGroupRef: lineGroupRef }}>
      <SmoothScroll direction={ScrollDirection.horizontal} elRefs={elRefs}>
        <>
          <GradientLine ref={lineGroupRef} />
          <ContainerWrapper>{children}</ContainerWrapper>
        </>
      </SmoothScroll>
    </GlobalLineContext.Provider>
  );
};

export default HorizontalScroll;
