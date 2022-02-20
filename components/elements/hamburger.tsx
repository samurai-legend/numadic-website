import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion, Transition } from "framer-motion";
import tw from "twin.macro";

interface Props {
  isOpen?: boolean;
  color?: string;
  strokeWidth?: string | number;
  transition?: Transition;
  lineProps?: any;
  width?: number;
  height?: number;
}

const HamburgerButton: React.FC<any> = ({
  isOpen = false,
  width = 24,
  height = 24,
  strokeWidth = 1,
  color = "#000",
  transition,
  lineProps = null,
  ...props
}: Props) => {
  const variant = isOpen ? "opened" : "closed";

  const unitHeight = 4;
  const unitWidth = (unitHeight * (width as number)) / (height as number);

  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  };
  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition,
    ...lineProps,
  };

  const Line = styled(motion.line)(() => [
    css`
      stroke-linecap: round;
    `,
  ]);
  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      {...props}
    >
      <Line x1="0" x2={unitWidth} y1="0" y2="0" variants={top} {...lineProps} />
      <Line
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        {...lineProps}
      />
      <Line
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  );
};

export default HamburgerButton;
