import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import tw from "twin.macro";
import { NavContainer, NavItem } from "../blocks/common";

const menuHover = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const variants = {
  open: { opacity: 1, x: 0 },
  initial: { opacity: 0, x: "-100%" },
  exit: { opacity: 0, x: "-100%" },
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
  return (
    <motion.div
      animate="open"
      initial="initial"
      exit="exit"
      variants={variantsBackground}
      css={tw`bg-black-dark w-full h-full absolute top-0 z-40 px-10 py-32 text-body-1`}
    >
      <NavContainer
        animate="open"
        initial="initial"
        exit="exit"
        variants={variants}
        transition={{ duration: 1 }}
        css={tw`flex-col gap-y-5 items-start`}
      >
        <NavItem>
          <Link href="/" passHref>
            <a>Home</a>
          </Link>
        </NavItem>
        <NavItem onClick={toggleOpen}>
          <span css={tw`flex items-center gap-x-2 cursor-pointer`}>
            Solutions
            <motion.svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={dropOpen ? "open" : "initial"}
              variants={variantsCarrot}
            >
              <path
                className="carrot-stroke"
                d="M1.61768 1.24512L6.11768 5.74512L10.6177 1.24512"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </span>
          <AnimatePresence exitBeforeEnter>
            {dropOpen && (
              <motion.ul
                animate="open"
                initial="hidden"
                exit="exit"
                transition={{
                  staggerChildren: 0.2,
                }}
                css={tw`relative top-full left-10 whitespace-nowrap flex flex-col gap-y-2 pt-1`}
              >
                <NavItem variants={menuHover}>
                  <Link href="/" passHref>
                    <a>Vehicle payments</a>
                  </Link>
                </NavItem>
                <NavItem variants={menuHover}>
                  <Link href="/" passHref>
                    <a>Vehicle identification</a>
                  </Link>
                </NavItem>
                <NavItem variants={menuHover}>
                  <Link href="/" passHref>
                    <a>Vehicle integration</a>
                  </Link>
                </NavItem>
              </motion.ul>
            )}
          </AnimatePresence>
        </NavItem>
        <NavItem>
          <Link href="/" passHref>
            <a>About Us</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/" passHref>
            <a>Careers</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/" passHref>
            <a>Contact us</a>
          </Link>
        </NavItem>
      </NavContainer>
    </motion.div>
  );
};

export default SideMenu;
