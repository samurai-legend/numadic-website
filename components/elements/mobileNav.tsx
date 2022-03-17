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
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
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
        onClick={toggleOpen}
        strokeWidth="4"
        lineProps={{ strokeLinecap: "round" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        width="34"
        height="24"
        color="#fff"
        css={tw`cursor-pointer z-50`}
      />
      <ExternalPortal>
        <AnimatePresence exitBeforeEnter initial={false}>
          {isOpen && <SideMenu toggleMenu={toggleOpen} />}
        </AnimatePresence>
      </ExternalPortal>
    </div>
  );
};

export default MobileNav;
