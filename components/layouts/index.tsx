import styled from "@emotion/styled";
import { FunctionComponent, ReactElement } from "react";
import tw from "twin.macro";
import StarBackgroundBlock from "../blocks/startBackgroundBlock";
import GradientLine from "../elements/gradientLine";
import Header from "./header";
import Seo, { SeoProps } from "./seo";
import SmoothScroll from "./smoothScroll";

const ContainerWrapper = styled.div(() => [tw`w-max h-full relative flex`]);

const Layout: FunctionComponent<LayoutProps> = ({ children, seo }) => {
  return (
    <>
      <Seo {...seo} />
      <Header />
      <StarBackgroundBlock />
      <SmoothScroll>
        <>
          <GradientLine />
          <ContainerWrapper>{children}</ContainerWrapper>
        </>
      </SmoothScroll>
    </>
  );
};

export default Layout;

export interface LayoutProps {
  children?: ReactElement;
  seo: SeoProps;
}
