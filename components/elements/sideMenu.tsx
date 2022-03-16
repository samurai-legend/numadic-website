import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import tw from "twin.macro";
import { NavContainer, NavItem } from "../blocks/common";
import Carrot from "./carrot";

const menuHover = {
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] },
  },

  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] },
  },
};

const variants = {
  open: { opacity: 1 },
  initial: { opacity: 0 },
  exit: { opacity: 0 },
};

const variantsBackground = {
  open: { opacity: 1 },
  initial: { opacity: 0 },
  exit: { opacity: 0 },
};

const variantsCarrot = {
  open: { rotate: -180 },
  initial: { rotate: 0 },
};

const SideMenu: React.FC<any> = (props: any) => {
  const [dropOpen, setDropOpen] = useState(false);
  const toggleOpen = () => setDropOpen(!dropOpen);
  const router = useRouter();
  return (
    <motion.div
      animate="open"
      initial="initial"
      exit="exit"
      variants={variantsBackground}
      css={tw`bg-black-dark w-full h-full fixed top-0 z-40 py-32 text-body-1`}
    >
      <NavContainer
        animate="open"
        initial="initial"
        exit="exit"
        variants={variants}
        transition={{ duration: 1 }}
        css={tw`flex-col gap-y-5 items-start container m-auto`}
      >
        <NavItem>
          <Link href="/" passHref>
            <a>Home</a>
          </Link>
        </NavItem>
        <NavItem onClick={toggleOpen} active={router.asPath === '/solutions' ? 1 : 0}>
          <span css={tw`flex items-center gap-x-2 cursor-pointer`}>
            Solutions
            <Carrot variants={variantsCarrot} animate={dropOpen ? "open" : "initial"}/>
          </span>
          <AnimatePresence exitBeforeEnter>
            {dropOpen && (
              <motion.ul
                initial="exit"
                animate="open"
                exit="exit"
                variants={menuHover}
                css={tw`relative top-full left-10 whitespace-nowrap flex flex-col gap-y-2 pt-1`}
              >
                <NavItem>
                  <Link href="/" passHref>
                    <a>Vehicle payments</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/" passHref>
                    <a>Vehicle identification</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/" passHref>
                    <a>Vehicle integration</a>
                  </Link>
                </NavItem>
              </motion.ul>
            )}
          </AnimatePresence>
        </NavItem>
        <NavItem active={router.asPath === '/about-us' ? 1 : 0}>
          <Link href="/about-us" passHref>
            <a>About Us</a>
          </Link>
        </NavItem>
        <NavItem active={router.asPath === '/career' ? 1 : 0}>
          <Link href="/" passHref>
            <a>Careers</a>
          </Link>
        </NavItem>
        <NavItem active={router.asPath === '/contact-us' ? 1 : 0}>
          <Link href="/" passHref>
            <a>Contact us</a>
          </Link>
        </NavItem>
      </NavContainer>
    </motion.div>
  );
};

export default SideMenu;
