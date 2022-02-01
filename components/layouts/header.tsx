import styled from "@emotion/styled";
import tw from "twin.macro";
import NumadicLogo from "@/svg/NU-logo.svg";
import NavBar from "@/elements/navbar";
import Link from "next/link";
const HeaderContainer = styled.div(() => [tw`fixed w-screen z-50 `]);
const HeaderWtapper = styled.div(() => [
  tw`container m-auto p-10 flex justify-between items-center`,
]);
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWtapper>
        <Link href="/" passHref>
          <a>
            <NumadicLogo css={tw`cursor-pointer`} />
          </a>
        </Link>
        <NavBar />
      </HeaderWtapper>
    </HeaderContainer>
  );
};

export default Header;
