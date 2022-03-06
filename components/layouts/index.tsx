import { FunctionComponent, ReactElement } from "react";

import StarBackgroundBlock from "../blocks/startBackgroundBlock";

import Header from "./header";
import Seo, { SeoProps } from "./seo";
import { ScrollDirection } from "./smoothScroll";

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  seo,
  direction,
}) => {
  
  return (
    <>
      <Seo {...seo} />
      <Header />
      <StarBackgroundBlock direction={direction} />
      {children}
    </>
  );
};

export default Layout;

export interface LayoutProps {
  children?: ReactElement;
  seo: SeoProps;
  direction: ScrollDirection;
}
