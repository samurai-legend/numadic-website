import styled from "@emotion/styled";
import { motion } from "framer-motion";
import tw from "twin.macro";

const SvgElementMobile = styled(motion.svg)(() => [tw`relative`]);

const ArrowGroup = styled(motion.g)(() => [tw`relative`]);
const LineStroke = styled(motion.line)(() => [tw`relative`]);
const LineGroup = styled.g(() => []);

const VerticalLine: React.FC<any> = (props: any) => {
  const variants = {
    view: {
      pathLength: 1,
      transition: {
        duration: 0.8,
      },
    },
    hidden: { pathLength: 0 },
  };

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
    <SvgElementMobile
      viewBox={`0 0 32 254`}
      {...props}
      whileInView="view"
      initial="hidden"
      viewport={{ once: true }}
    >
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
        y2="231.35"
        stroke="url(#repeat)"
        strokeWidth="4"
        vectorEffect="non-scaling-stroke"
        variants={variants}
      />
      <ArrowGroup variants={arrow}>
        <path
          d="M17.4756 248.546C16.7038 249.869 14.7922 249.869 14.0205 248.546L4.63103 232.45C3.67733 230.815 5.3176 228.893 7.08215 229.578L15.0245 232.66C15.49 232.841 16.0061 232.841 16.4716 232.66L24.4139 229.578C26.1785 228.893 27.8188 230.815 26.8651 232.45L17.4756 248.546Z"
          fill="white"
          fillOpacity="1"
        />
        <path
          d="M2.90347 233.458L12.2929 249.554C13.8364 252.2 17.6596 252.2 19.2032 249.554L28.5926 233.458C30.5 230.188 27.2195 226.344 23.6904 227.713L15.748 230.795L7.80571 227.713C4.27663 226.344 0.996059 230.188 2.90347 233.458Z"
          stroke="#1B1B1B"
          strokeWidth="4"
          fill="white"
          fillOpacity="1"
        />
      </ArrowGroup>
    </SvgElementMobile>
  );
};

export default VerticalLine;
