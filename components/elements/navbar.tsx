import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Link from "next/link";
import { FunctionComponent } from "react";
import tw from "twin.macro";

const NavContainer = styled(motion.ul)(() => [
  tw`flex gap-x-20 text-white font-medium items-center`,
]);

const variants = {
  initial: { opacity: 0, y: "-100%" },
  exit: { opacity: 0, y: "-100%" },
};
const NavBar: FunctionComponent<any> = () => {
  return (
    <NavContainer
      animate={{ opacity: 1, y: 0 }}
      initial="initial"
      exit="exit"
      variants={variants}
      transition={{ duration: 1 }}
    >
      <li>
        <Link href="/" passHref>
          <a>Solutions</a>
        </Link>
      </li>
      <li>
        <Link href="/" passHref>
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/" passHref>
          <a>Careers</a>
        </Link>
      </li>
      <li>
        <Link href="/" passHref>
          <a>Contact us</a>
        </Link>
      </li>
      <li
        css={tw`bg-gradient-to-r from-blue-dark to-blue-primary py-2 px-2 rounded-[2px] font-semibold hover:(from-blue-primary to-blue-dark) cursor-pointer`}
      >
        <Link href="/" passHref>
          <a>Get in touch</a>
        </Link>
      </li>
    </NavContainer>
  );
};

export default NavBar;
