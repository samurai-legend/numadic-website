import styled from "@emotion/styled";
import {
  createContext,
  FunctionComponent,
  ReactElement,
  useContext,
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

const ContainerWrapper = styled.div(() => [
  tw`w-max h-full relative flex flex-col lg:flex-row`,
]);

export const GlobalLineContext = createContext<any>({});

const Layout: FunctionComponent<LayoutProps> = ({ children, seo }) => {
  const lineGroupRef = useRef(null);

  return (
    <>
      <Seo {...seo} />
      <Header />
      <StarBackgroundBlock />
      <SmoothScroll>
        <GlobalLineContext.Provider value={{ lineGroupRef: lineGroupRef }}>
          <GradientLine ref={lineGroupRef} />
          <ContainerWrapper>{children}</ContainerWrapper>
        </GlobalLineContext.Provider>
      </SmoothScroll>
    </>
  );
};

export default Layout;

export interface LayoutProps {
  children?: ReactElement;
  seo: SeoProps;
}
