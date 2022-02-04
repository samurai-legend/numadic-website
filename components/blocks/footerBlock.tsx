import tw from "twin.macro";
import { ContentWrapper, SectionContainer } from "./common";
import MapPattern from "@/svg/movement/map.svg";
import { useRef } from "react";
import Link from "next/link";

const FooterBlock: React.FC<any> = (props: any) => {
  const mapRef = useRef(null);
  return (
    <SectionContainer>
      <div
        css={tw`absolute w-screen h-full flex justify-center items-center -top-10 z-0`}
      >
        <MapPattern ref={mapRef} />
      </div>
      <ContentWrapper>
        <div css={tw`grid grid-cols-2 grid-flow-col`}>
          <p
            css={tw`text-heading-2 font-normal text-white max-w-3xl leading-[3.75rem]`}
          >
            Locations
          </p>
          <div css={tw`grid grid-cols-2 grid-flow-col mt-10`}>
            <div>
              <span css={tw`text-overline uppercase text-gray-light font-bold`}>
                India
              </span>
              <p css={tw`text-body-1 text-white max-w-[12rem]`}>
                Greyscale HQ, Dona Paula, Goa 403 004
              </p>
            </div>
            <div>
              <span css={tw`text-overline uppercase text-gray-light font-bold`}>
                uk
              </span>
              <p css={tw`text-body-1 text-white max-w-[12rem]`}>
                10 John Street, London, United Kingdom WC1N 2EB
              </p>
            </div>
          </div>
        </div>
        <div css={tw`grid grid-cols-3 grid-flow-col mt-40`}>
          <p
            css={tw`text-heading-2 font-normal text-white max-w-3xl leading-[3.75rem]`}
          >
            Other links
          </p>
          <div>
            <span css={tw`text-overline uppercase text-gray-light font-bold`}>
              SOLUTIONS
            </span>
            <ul
              css={tw`grid grid-rows-3 grid-flow-col mt-2 text-white text-body-3`}
            >
              <li>
                <Link href="#">
                  <a>Vehicle payments</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Vehicle identification</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a> Vehicle integration</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>About us</a>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <a>Careers</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div css={tw`grid grid-cols-3 grid-flow-col mt-5`}>
          <span
            css={tw`text-gray-light text-caption leading-[34px]
            `}
          >
            © Numadic IoT Pvt. Ltd.
          </span>

          <span
            css={tw`text-gray-light text-caption leading-[34px]
            `}
          >
            Warm regards from Goa, India
          </span>

          <span
            css={tw`text-gray-light text-caption leading-[34px]
            `}
          >
            Terms of service | Privacy policy | Cancellation policy
          </span>
        </div>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default FooterBlock;
