import styled from "@emotion/styled";
import { motion, useMotionValue } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useMediaMatch } from "rooks";
import tw from "twin.macro";

const BackgroundContainer = styled(motion.div)(() => [
  tw`fixed w-screen overflow-x-hidden h-full z-10 block pointer-events-none`,
]);
const Star = styled(motion.span)(({ isMobile }: any) => [
  tw`w-[100px] h-[4px] block absolute bg-gradient-to-r from-transparent to-[#ffffff13]`,
  isMobile && [tw`w-[4px] h-[100px] `],
]);

const StarBackgroundBlock: React.FC<any> = () => {
  const containerRef = useRef<any | undefined>(null);
  const containerHeight = useMotionValue(0);
  const containerWidth = useMotionValue(0);
  const IsMobile = useMediaMatch("(max-width: 1023px)");

  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      containerHeight.set(entry.contentRect.height);
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

  const variants = {
    hidden: () => {
      return IsMobile
        ? {
            y: "100vh",
            x: `${Math.random() * containerWidth.get()}px`,
          }
        : {
            x: "100vw",
            y: `${Math.random() * containerHeight.get()}px`,
          };
    },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;

      return IsMobile
        ? {
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
          }
        : {
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

  return (
    <BackgroundContainer initial="hidden" animate="visible" ref={containerRef}>
      {stars?.map((val, key) => (
        <Star
          key={key}
          variants={variants}
          custom={val}
          isMobile={IsMobile}
        ></Star>
      ))}
    </BackgroundContainer>
  );
};

export default StarBackgroundBlock;
