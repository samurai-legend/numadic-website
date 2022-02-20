import ExternalPortal from "@/portals/external";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import tw from "twin.macro";
import { NavContainer, NavItem } from "../blocks/common";
import HamburgerButton from "./hamburger";
import SideMenu from "./sideMenu";

const MobileNav: React.FC<any> = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div css={tw`flex relative justify-end items-center gap-x-8`}>
      <NavContainer>
        <NavItem type="button">
          <Link href="/" passHref>
            <a>Get in touch</a>
          </Link>
        </NavItem>
      </NavContainer>
      <HamburgerButton
        isOpen={isOpen}
        onClick={() => toggleOpen()}
        strokeWidth={4}
        width={40}
        color={"#fff"}
        css={tw`cursor-pointer z-50`}
      />
      <ExternalPortal>
        <AnimatePresence exitBeforeEnter>
          {isOpen && <SideMenu isOpen={isOpen} />}
        </AnimatePresence>
      </ExternalPortal>
    </div>
  );
};

export default MobileNav;
