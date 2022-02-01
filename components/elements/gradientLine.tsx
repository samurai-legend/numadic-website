import styled from "@emotion/styled";
import { motion, useViewportScroll } from "framer-motion";
import { FunctionComponent } from "react";
import tw from "twin.macro";

const SvgElement = styled(motion.svg)(() => [tw`fixed top-[50%]`]);

const GradientLine: FunctionComponent<any> = (props: any) => {
  const { scrollYProgress } = useViewportScroll();
  scrollYProgress.onChange((t) => {
      console.log(t);
      
  })
  return (
    <SvgElement
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1900 49.34"
      overflow="visible"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="3000"
          y1="27.33"
          x2="0"
          y2="27.33"
          gradientTransform="matrix(1, 0, 0, -1, 0, 52.01)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#ffc7a4" stop-opacity="0.97" />
          <stop offset="0.25" stop-color="#ff9dce" stop-opacity="0.65" />
          <stop offset="0.75" stop-color="#6febfc" stop-opacity="0.34" />
          <stop offset="1" stop-color="#8eb1f4" />
        </linearGradient>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="group_line">
          <line
            id="line"
            y1="24.69"
            x2="3000"
            y2="24.69"
            style={{
              fill: "none",
              strokeMiterlimit: 10,
              strokeWidth: "9px",
              stroke: "url(#linear-gradient)",
            }}
          />
        </g>
        <g id="group_arrow">
          <path
            id="arrow_fill"
            d="M741.65,21.26a4,4,0,0,1,0,6.86L717.23,42.78a4,4,0,0,1-5.8-4.84l4.46-11.83a4.05,4.05,0,0,0,0-2.83l-4.46-11.83a4,4,0,0,1,5.8-4.84Z"
            style={{ fill: "#fff", fillOpacity: 0.75 }}
          />
          <path
            id="arrow_stroke"
            d="M708.62,12.51l2.81-1.06-2.81,1.06,4.46,11.83a1,1,0,0,1,0,.71l-4.46,11.83a7,7,0,0,0,10.15,8.47L743.2,30.7a7,7,0,0,0,0-12L718.77,4a7,7,0,0,0-10.15,8.5Z"
            style={{ fill: "none", stroke: "#242021", strokeWidth: "6px" }}
          />
        </g>
      </g>
    </SvgElement>
  );
};

export default GradientLine;
