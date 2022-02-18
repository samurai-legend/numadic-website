import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Link from "next/link";
import { FunctionComponent } from "react";
import tw from "twin.macro";

const NavContainer = styled(motion.ul)(() => [
  tw`flex gap-x-10 items-center 2xl:(gap-x-20)`,
]);

const NavItem = styled(motion.li)(({ type, active }: any) => [
  tw`relative`,
  type == "button"
    ? [
        tw`bg-gradient-to-r from-blue-dark to-blue-primary py-2 px-2 rounded-[2px] 
        font-semibold cursor-pointer text-white transition-all duration-150 ease-in`,
        tw`hover:(from-white to-white text-black)`,
        tw`focus:(outline-white)`,
      ]
    : [
        tw`text-gray-light font-medium transition-all duration-150 ease-in`,
        tw`hover:text-white`,
        active &&
          tw`text-white after:(contents[""] absolute top-full h-1 w-full left-0 rounded-md bg-gradient-to-r from-blue-dark to-blue-primary)`,
        css`
          .carrot-stroke {
            ${tw`stroke-current transition-all duration-150 ease-in`}
          }
          &:hover {
            .carrot-stroke {
              stroke: white;
            }
          }
        `,
      ],
]);

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
const NavBar: FunctionComponent<any> = () => {
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
      >
        <Link href="/" passHref>
          <a>
            <span css={tw`flex items-center gap-x-2`}>
              Solutions
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="carrot-stroke"
                  d="M1.61768 1.24512L6.11768 5.74512L10.6177 1.24512"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </Link>
        <motion.ul
          variants={{
            hovered: {
              pointerEvents: "all",
            },
            hidden: {
              pointerEvents: "none",
            },
          }}
          css={tw`absolute top-full left-0 whitespace-nowrap flex flex-col gap-y-2 pt-1`}
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
      <NavItem type="button">
        <Link href="/" passHref>
          <a>Get in touch</a>
        </Link>
      </NavItem>
    </NavContainer>
  );
};

export default NavBar;
