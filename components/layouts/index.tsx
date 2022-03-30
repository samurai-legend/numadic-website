import { useRouter } from "next/router";
import { ReactElement } from "react";
import StarBackgroundBlock from "../blocks/starBackgroundBlock";
import Header from "./header";
import Seo, { SEO } from "./seo";
import { ScrollDirection } from "./smoothScroll";

const Layout: React.FC<LayoutProps> = ({ children, seo, direction }) => {
  const router = useRouter();
  return (
    <>
      <Seo {...seo} />
      <Header />
      <StarBackgroundBlock key={router.route} direction={direction} />
      {children}
    </>
  );
};

export default Layout;

export interface LayoutProps {
  children?: ReactElement;
  seo: SEO;
  direction: ScrollDirection;
}
