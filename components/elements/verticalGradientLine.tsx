import { motion } from "framer-motion";

const VerticalGradientLine: React.FC<any> = (props: any) => {
  return (
    <svg viewBox="0 0 49.39 750.08">
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
          <stop offset="1" stopColor="#8eb1f4" />
        </linearGradient>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <g id="Layer_2-2" data-name="Layer 2">
            <g id="group_line" data-name="group line">
              <line
                id="line"
                x1="24.64"
                x2="24.64"
                y2="712.8"
                vectorEffect="non-scaling-stroke"
                style={{
                  fill: "none",
                  strokeMiterlimit: 10,
                  strokeWidth: "9px",
                  stroke: "url(#linear-gradient)",
                  fillOpacity: 1,
                }}
              />
            </g>
            <g id="group_arrow" data-name="group arrow">
              <path
                id="arrow_stroke"
                data-name="arrow stroke"
                vectorEffect="non-scaling-stroke"
                d="M36.89,709.08l1.1,2.8-1.1-2.8-11.8,4.5a.85.85,0,0,1-.7,0l-11.9-4.5A7.06,7.06,0,0,0,4,719.28l14.6,24.4a7,7,0,0,0,9.6,2.4,6.89,6.89,0,0,0,2.4-2.4l14.8-24.4a7,7,0,0,0-2.4-9.6,7.29,7.29,0,0,0-6.1-.6Z"
                style={{
                  fill: "#fff",
                  stroke: "#242021",
                  strokeWidth: "6px",
                  fillOpacity: 1,
                }}
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default VerticalGradientLine;
