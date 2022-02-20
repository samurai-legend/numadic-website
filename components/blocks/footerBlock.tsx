import tw from "twin.macro";
import { ContentWrapper, SectionContainer } from "./common";
import MapPattern from "@/svg/movement/map.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import { TextEntryVariant } from "animations";
import { Typography } from "../typography";
import AnimatedCharacters from "animations/animatedCharacters";

const FooterBlock: React.FC<any> = (props: any) => {
  return (
    <SectionContainer>
      <div
        css={tw`absolute w-screen h-full flex justify-center items-center z-0`}
      >
        <MapPattern />
      </div>
      <ContentWrapper css={tw`flex flex-col justify-between`}>
        <div
          css={tw`grid grid-cols-1 text-center grid-flow-row lg:(grid-flow-col grid-cols-2 text-left)`}
        >
          <AnimatedCharacters
            as="h2"
            isColor
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            css={tw`leading-[2.75rem] max-w-full
             text-center 2xl:(leading-[3.75rem]) 
             lg:(max-w-3xl text-left)`}
            text="Locations"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={TextEntryVariant}
            css={tw`grid grid-cols-2 grid-flow-col mt-10 text-left`}
          >
            <div>
              <Typography as="span" type="overline">
                India
              </Typography>
              <Typography as="p" isColor type="body-1" css={tw`max-w-[12rem]`}>
                Greyscale HQ, Dona Paula, Goa 403 004
              </Typography>
            </div>
            <div>
              <Typography as="span" type="overline">
                uk
              </Typography>
              <Typography as="p" isColor type="body-1" css={tw`max-w-[12rem]`}>
                10 John Street, London, United Kingdom WC1N 2EB
              </Typography>
            </div>
          </motion.div>
        </div>
        <div css={tw`mb-2 tall-lg:mb-20`}>
          <div
            css={tw`grid grid-cols-1 grid-flow-row mt-20 lg:(grid-cols-3 grid-flow-col mt-0)`}
          >
            <AnimatedCharacters
              as="h2"
              isColor
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              css={tw`leading-[2.75rem] max-w-full
             text-center 2xl:(leading-[3.75rem]) 
             lg:(max-w-3xl text-left)`}
              text="Other links"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={TextEntryVariant}
            >
              <Typography as="span" type="overline">
                SOLUTIONS
              </Typography>
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
            css={tw`grid grid-cols-1 grid-flow-row mt-16 tall-lg:mt-32 lg:(grid-cols-3 grid-flow-col)`}
          >
            <Typography
              as="span"
              type="caption"
              css={tw`text-gray-light justify-self-center lg:(justify-self-start)`}
            >
              © Numadic IoT Pvt. Ltd.
            </Typography>

            <Typography
              as="span"
              type="caption"
              css={tw`text-gray-light justify-self-center lg:(justify-self-center)
            `}
            >
              Warm regards from Goa, India
            </Typography>

            <Typography
              as="span"
              type="caption"
              css={tw`text-gray-light justify-self-center lg:(justify-self-end)`}
            >
              Terms of service | Privacy policy | Cancellation policy
            </Typography>
          </motion.div>
        </div>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default FooterBlock;
