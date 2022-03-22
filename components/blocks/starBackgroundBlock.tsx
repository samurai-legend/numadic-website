import styled from "@emotion/styled";
import { motion, useMotionValue } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useMediaMatch } from "rooks";
import tw from "twin.macro";
import { ScrollDirection } from "../layouts/smoothScroll";

const BackgroundContainer = styled(motion.div)(() => [
  tw`fixed w-screen overflow-x-hidden h-full z-10 block pointer-events-none`,
]);
const Star = styled(motion.span)((props: any) => [
  tw`w-[100px] h-[4px] block absolute bg-gradient-to-r from-transparent to-[#ffffff13]`,
  props.direction === ScrollDirection.vertical && [tw`w-[4px] h-[100px]`],
]);

interface StartProps {
  direction: ScrollDirection;
}

const StarBackgroundBlock: React.FC<StartProps> = ({ direction }) => {
  const containerRef = useRef<any | undefined>(null);
  const containerHeight = useMotionValue(0);
  const containerWidth = useMotionValue(0);
  console.log("Rendered Star");

  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      containerHeight.set(entry.contentRect.height);
      containerWidth.set(entry.contentRect.width);
    }
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  useEffect(() => {
    containerHeight.set(containerRef?.current.offsetHeight);
    containerWidth.set(containerRef?.current.offsetWidth);
  }, [containerRef]);

  const getStars = () => {
    let data = [];
    for (let i = 0; i < 10; i++) {
      data.push(i);
    }
    return data;
  };

  const [stars, setStars] = useState<number[] | undefined>(undefined);

  useEffect(() => {
    setStars(getStars());
  }, []);

  const verticalVariants = {
    hidden: () => {
      return {
        y: "100vh",
        x: `${Math.random() * containerWidth.get()}px`,
      };
    },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;

      return {
        y: "-100vh",
        transition: {
          y: {
            delay,
            type: "twin",
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: null,
          },
        },
      };
    },
  };

  const horizontalVariant = {
    hidden: () => {
      return {
        x: "100vw",
        y: `${Math.random() * containerHeight.get()}px`,
      };
    },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;

      return {
        x: "-100vw",
        transition: {
          x: {
            delay,
            type: "twin",
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: null,
          },
        },
      };
    },
  };

  const [animVariants, setVariant] = useState<any>(horizontalVariant);

  useEffect(() => {
    switch (direction) {
      case ScrollDirection.horizontal:
        setVariant(horizontalVariant);
        break;
      case ScrollDirection.vertical:
        setVariant(verticalVariants);
        break;
      default:
        setVariant(horizontalVariant);
    }
  }, [containerRef, direction]);

  return (
    <BackgroundContainer initial="hidden" animate="visible" ref={containerRef}>
      {stars?.map((val, key) => (
        <Star
          key={key}
          variants={animVariants}
          custom={val}
          direction={direction}
        ></Star>
      ))}
    </BackgroundContainer>
  );
};

export default StarBackgroundBlock;
