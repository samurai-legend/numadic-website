import ExternalPortal from "@/portals/external";
import { AnimatePresence, useViewportScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import tw from "twin.macro";
import { NavContainer, NavItem } from "../blocks/common";
import { MenuButton } from "./hamburger";
import SideMenu from "./sideMenu";

const MobileNav: React.FC<any> = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div css={tw`flex relative justify-end items-center gap-x-8`}>
      <NavContainer>
        <NavItem type="button">
          <Link href="/" passHref>
            <a>Get in touch</a>
          </Link>
        </NavItem>
      </NavContainer>
      <MenuButton
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        strokeWidth="4"
        lineProps={{ strokeLinecap: "round" }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        width="34"
        height="24"
        color="#fff"
        css={tw`cursor-pointer z-50`}
      />
      <ExternalPortal>
        <AnimatePresence exitBeforeEnter initial={false}>
          {isOpen && <SideMenu isOpen={isOpen} />}
        </AnimatePresence>
      </ExternalPortal>
    </div>
  );
};

export default MobileNav;
