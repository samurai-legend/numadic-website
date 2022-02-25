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
        duration: 2,
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
      viewBox={`0 0 49.39 750.08`}
      {...props}
      whileInView="view"
      initial="hidden"
      viewport={{ once: true }}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="363.42"
          y1="228.73"
          x2="-349.38"
          y2="228.73"
          gradientTransform="matrix(0, 1, 1, 0, -204.09, 349.38)"
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
      <LineGroup>
        <g id="group_line">
          <LineStroke
            id="line"
            x1="24.64"
            x2="24.64"
            y2="712.8"
            vectorEffect="non-scaling-stroke"
            style={{
              fill: "none",
              strokeMiterlimit: 10,
              strokeWidth: "9px",
              stroke: "url(#repeat)",
              fillOpacity: 1,
            }}
            variants={variants}
          />
        </g>
        <ArrowGroup variants={arrow}>
          <motion.path
            d="M36.89,709.08l1.1,2.8-1.1-2.8-11.8,4.5a.85.85,0,0,1-.7,0l-11.9-4.5A7.06,7.06,0,0,0,4,719.28l14.6,24.4a7,7,0,0,0,9.6,2.4,6.89,6.89,0,0,0,2.4-2.4l14.8-24.4a7,7,0,0,0-2.4-9.6,7.29,7.29,0,0,0-6.1-.6Z"
            style={{
              fill: "#fff",
              stroke: "#242021",
              strokeWidth: "6px",
              fillOpacity: 1,
            }}
          />
        </ArrowGroup>
      </LineGroup>
    </SvgElementMobile>
  );
};

export default VerticalLine;
