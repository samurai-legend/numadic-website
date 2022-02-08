import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";

const LinePath = styled(motion.path)``;

const GradientLineUp: FunctionComponent<any> = (props: any) => {
  const { path, isAnimate } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 213.55 181.51"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="42.12"
          y1="-18.84"
          x2="154.28"
          y2="127.78"
          gradientTransform="matrix(1, 0, 0, -1, 0, 183.18)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffbc93" />
          <stop offset="1" stopColor="#83b0ff" />
        </linearGradient>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <LinePath
            d={path}
            style={{
              fill: "none",
              strokeWidth: "8px",
              opacity: 0.5,
              isolation: "isolate",
              stroke: "url(#linear-gradient)",
            }}
            animate={{
              pathLength: isAnimate ? 1 : 0,
              opacity: isAnimate ? 1 : 0,
            }}
            transition={{
              duration: 0.5,
              type: "twin",
              ease: "easeIn",
            }}
          />
        </g>
      </g>
    </svg>
  );
};

export default GradientLineUp;
