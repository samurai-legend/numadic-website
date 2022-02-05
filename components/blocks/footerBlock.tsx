import tw from "twin.macro";
import { ContentWrapper, SectionContainer } from "./common";
import MapPattern from "@/svg/movement/map.svg";
import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextEntryVariant } from "animations";

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
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
            css={tw`text-heading-2 font-normal text-white max-w-3xl leading-[3.75rem]`}
          >
            Locations
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
            css={tw`grid grid-cols-2 grid-flow-col mt-10`}
          >
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
          </motion.div>
        </div>
        <div css={tw`grid grid-cols-3 grid-flow-col mt-40`}>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
            css={tw`text-heading-2 font-normal text-white max-w-3xl leading-[3.75rem]`}
          >
            Other links
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
          >
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
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={TextEntryVariant}
          css={tw`grid grid-cols-3 grid-flow-col mt-32`}
        >
          <span
            css={tw`text-gray-light text-caption leading-[34px]
            `}
          >
            © Numadic IoT Pvt. Ltd.
          </span>

          <span
            css={tw`text-gray-light text-caption leading-[34px] justify-self-center
            `}
          >
            Warm regards from Goa, India
          </span>

          <span
            css={tw`text-gray-light text-caption leading-[34px] justify-self-end`}
          >
            Terms of service | Privacy policy | Cancellation policy
          </span>
        </motion.div>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default FooterBlock;
