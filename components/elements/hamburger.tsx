import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { AnimatePresence, motion, Transition } from "framer-motion";
import { useEffect } from "react";
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

  useEffect(() => {
    console.log("rendered");
  }, []);
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
      transition: {
        duration: 1,
        stiffness: 2,
      },
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
      transition: {
        duration: 1,
        stiffness: 2,
      },
    },
    opened: {
      rotate: -45,
      translateY: -2,
      transition: {
        duration: 1,
        stiffness: 2,
      },
    },
  };
  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: "non-scaling-stroke",
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
      initial="closed"
      exit="closed"
      animate={variant}
    >
      <Line x1="0" x2={unitWidth} y1="0" y2="0" {...lineProps} variants={top} />
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
