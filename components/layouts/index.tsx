import styled from "@emotion/styled";
import {
  createContext,
  FunctionComponent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import tw from "twin.macro";
import StarBackgroundBlock from "../blocks/startBackgroundBlock";
import GradientLine from "../elements/gradientLine";
import Header from "./header";
import Seo, { SeoProps } from "./seo";
import SmoothScroll from "./smoothScroll";

const ContainerWrapper = styled.div(() => [tw`w-max h-full relative flex`]);

export const GlobalContext = createContext<any>({});

const Layout: FunctionComponent<LayoutProps> = ({ children, seo }) => {
  const lineGroupRef = useRef(null);

  return (
    <>
      <Seo {...seo} />
      <Header />
      <StarBackgroundBlock />
      <SmoothScroll>
        <GlobalContext.Provider value={{ lineGroupRef: lineGroupRef }}>
          <GradientLine ref={lineGroupRef} />
          <ContainerWrapper>{children}</ContainerWrapper>
        </GlobalContext.Provider>
      </SmoothScroll>
    </>
  );
};

export default Layout;

export interface LayoutProps {
  children?: ReactElement;
  seo: SeoProps;
}
