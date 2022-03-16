import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import tw from "twin.macro";
import { NavContainer, NavDropdownContainer, NavItem } from "../blocks/common";
import Carrot from "./carrot";

const NavBar: FunctionComponent<any> = () => {
  const variants = {
    initial: { opacity: 0, y: "-100%" },
    exit: { opacity: 0, y: "-100%" },
  };
  const menuHover = {
    hovered: {
      pointerEvents: "all",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    hidden: {
      pointerEvents: "none",
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
  };
  const variantsCarrot = {
    hovered: { rotate: -180 },
    hidden: { rotate: 0 },
  };

  const router = useRouter()
  return (
    <NavContainer
      animate={{ opacity: 1, y: 0 }}
      initial="initial"
      exit="exit"
      variants={variants}
      transition={{ duration: 1 }}
    >
      <NavItem
        whileHover="hovered"
        initial="hidden"
        transition={{
          staggerChildren: 0.2,
        }}
        active={router.asPath === '/solutions' ? 1 : 0}
      >
        <span css={tw`flex items-center gap-x-2 cursor-pointer`}>
          Solutions
          <Carrot variants={variantsCarrot} />
        </span>
        <NavDropdownContainer
          variants={{
            hovered: {
              pointerEvents: "all",
            },
            hidden: {
              pointerEvents: "none",
            },
          }}
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
        </NavDropdownContainer>
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
      <NavItem type="button">
        <Link href="/" passHref>
          <a>Get in touch</a>
        </Link>
      </NavItem>
    </NavContainer>
  );
};

export default NavBar;
