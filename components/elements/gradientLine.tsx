import styled from "@emotion/styled";
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import {
  forwardRef,
  FunctionComponent,
  Ref,
  useContext,
  useEffect,
  useRef,
} from "react";
import tw from "twin.macro";
import { GlobalContext } from "../layouts";
import { ScrollContext } from "../layouts/smoothScroll";

const SvgElement = styled(motion.svg)(() => [tw`fixed top-[50%] z-30`]);
const ArrowGroup = styled(motion.g)(() => [tw`relative`]);
const LineStroke = styled(motion.line)(() => [tw`relative`]);
const LineGroup = styled.g(() => []);

const GradientLine: FunctionComponent<any> = forwardRef(
  (props: any, ref: any) => {
    const { scrollYProgress } = useViewportScroll();
    const { scrollRange, viewportW } = useContext(ScrollContext);

    const transform = useTransform(
      scrollYProgress,
      [0, 1],
      [viewportW / 2, scrollRange]
    );
    const physics = { damping: 14, mass: 0.25, stiffness: 30 };
    const spring = useSpring(transform, physics);

    return (
      <SvgElement
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={`0 0 ${viewportW} 49.34`}
        overflow="visible"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1={viewportW}
            y1="27.33"
            x2="0"
            y2="27.33"
            gradientTransform="matrix(1, 0, 0, -1, 0, 52.01)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#ffc7a4" stopOpacity="1" />
            <stop offset="0.25" stopColor="#ff9dce" stopOpacity="1" />
            <stop offset="0.75" stopColor="#6febfc" stopOpacity="1" />
            <stop offset="1" stopColor="#8eb1f4" stopOpacity="1" />
          </linearGradient>
          <linearGradient
            id="repeat"
            xlinkHref="#linear-gradient"
            spreadMethod="repeat"
          />
        </defs>
        <LineGroup ref={ref}>
          <g id="group_line">
            <LineStroke
              id="line"
              y1="24.69"
              x2={spring}
              y2="24.69"
              style={{
                fill: "none",
                strokeMiterlimit: 10,
                strokeWidth: "9px",
                stroke: "url(#repeat)",
              }}
            />
          </g>
          <ArrowGroup style={{ x: spring }}>
            <path
              id="arrow_fill"
              d="M36.9,21.3c1.9,1.1,2.5,3.6,1.4,5.5c-0.3,0.6-0.8,1-1.4,1.4L12.4,42.8
              c-1.9,1.1-4.4,0.5-5.5-1.4c-0.6-1-0.7-2.3-0.3-3.5l4.5-11.8c0.3-0.9,0.3-1.9,0-2.8L6.6,11.5C5.9,9.4,6.9,7.1,9,6.3
              c1.1-0.4,2.4-0.3,3.5,0.3L36.9,21.3z"
              style={{ fill: "#fff", fillOpacity: 1 }}
            />
            <path
              id="arrow_stroke"
              d="M3.8,12.5l2.8-1.1L3.8,12.5l4.5,11.8c0.1,0.2,0.1,0.5,0,0.7L3.8,36.9
              c-1.4,3.6,0.5,7.7,4.1,9c2,0.8,4.2,0.6,6.1-0.5l24.4-14.6c3.3-2,4.4-6.3,2.4-9.6c-0.6-1-1.4-1.8-2.4-2.4L14,4
              c-3.3-2-7.6-0.9-9.6,2.4C3.3,8.3,3.1,10.5,3.8,12.5L3.8,12.5z"
              style={{ fill: "none", stroke: "#242021", strokeWidth: "6px" }}
            />
          </ArrowGroup>
        </LineGroup>
      </SvgElement>
    );
  }
);

export default GradientLine;
