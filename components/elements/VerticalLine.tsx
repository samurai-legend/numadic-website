import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import tw from "twin.macro";

const SvgElementMobile = styled(motion.svg)(() => [tw`absolute`]);

const LineStroke = styled(motion.line)(() => [tw`relative`]);

const VerticalLine: React.FC<any> = (props: any) => {
  const arrow = {
    view: {
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
    hidden: {
      y: "-100%",
    },
  };

  return (
    <div css={tw`w-full flex justify-center overflow-y-hidden`} {...props}>
      <motion.div
        css={tw`w-full flex justify-center`}
        whileInView="view"
        initial="hidden"
        viewport={{ once: true }}
        variants={arrow}
      >
        <SvgElementMobile css={tw`top-0 h-full`} viewBox={`0 0 32 254`}>
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="13.8486"
              y1="0.0209961"
              x2="13.8486"
              y2="231.35"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#ffc7a4" stopOpacity="1" />
              <stop offset="0.25" stopColor="#ff9dce" stopOpacity="1" />
              <stop offset="0.75" stopColor="#6febfc" stopOpacity="1" />
              <stop offset="1" stopColor="#ffc7a4" stopOpacity="1" />
            </linearGradient>
            <linearGradient
              id="repeat"
              xlinkHref="#linear-gradient"
              spreadMethod="repeat"
            />
          </defs>

          <LineStroke
            x1="15.8486"
            y1="0.0209962"
            x2="15.8486"
            y2="250"
            stroke="url(#repeat)"
            strokeWidth="4"
            vectorEffect="non-scaling-stroke"
          />
        </SvgElementMobile>
        <SvgElementMobile
          css={tw`bottom-0`}
          width={40}
          height={40}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.81 28.11"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                d="M17.13,23.12a2,2,0,0,1-3.45,0L4.29,7A2,2,0,0,1,6.74,4.15l7.94,3.08a2,2,0,0,0,1.45,0l7.94-3.08A2,2,0,0,1,26.52,7Z"
                style={{ fill: "#fff", fillOpacity: 1 }}
              />
              <path
                d="M2.56,8,12,24.13a4,4,0,0,0,6.91,0L28.25,8a4,4,0,0,0-4.9-5.75L15.41,5.37,7.46,2.28A4,4,0,0,0,2.56,8Z"
                style={{ fill: "none", stroke: "#1b1b1b", strokeWidth: "4px" }}
              />
            </g>
          </g>
        </SvgElementMobile>
      </motion.div>
    </div>
  );
};

export default VerticalLine;
