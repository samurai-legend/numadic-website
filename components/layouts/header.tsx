import styled from "@emotion/styled";
import tw from "twin.macro";
import NumadicLogo from "@/svg/NU-logo.svg";
import NumadicLogoM from "@/svg/NU-mobile-logo.svg";

import NavBar from "@/elements/navbar";
import Link from "next/link";

import MobileNav from "../elements/mobileNav";
import { useMediaMatch } from "rooks";

const HeaderContainer = styled.div(() => [tw`fixed w-full z-[60]`]);
const HeaderWtapper = styled.div(() => [
  tw`container m-auto py-5 flex justify-between items-center bg-black-dark lg:(py-10 bg-transparent)`,
]);
const Header = () => {
  const IsMobile = useMediaMatch("(max-width: 1023px)");

  return (
    <HeaderContainer>
      <HeaderWtapper>
        <Link href="/" passHref>
          <a>
            <NumadicLogo css={tw`cursor-pointer hidden lg:(visible block)`} />
            <NumadicLogoM css={tw`cursor-pointer visible lg:hidden`} />
          </a>
        </Link>
        {IsMobile ? <MobileNav /> : <NavBar />}
      </HeaderWtapper>
    </HeaderContainer>
  );
};

export default Header;
