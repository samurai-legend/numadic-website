import styled from "@emotion/styled";
import { motion, useMotionValue } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import tw from "twin.macro";

const BackgroundContainer = styled(motion.div)(() => [
  tw`fixed w-screen overflow-x-hidden h-full z-10 block pointer-events-none`,
]);
const Star = styled(motion.span)(() => [
  tw`w-[100px] h-[4px] block absolute bg-gradient-to-r from-transparent to-[#ffffff13]`,
]);

const StarBackgroundBlock: React.FC<any> = () => {
  const containerRef = useRef<any | undefined>(null);
  const containerHeight = useMotionValue(0);

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
      return {
        x: "-100%",
        y: `${Math.random() * containerHeight.get()}px`,
      };
    },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;

      return {
        x: "100vw",
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
        <Star key={key} variants={variants} custom={val}></Star>
      ))}
    </BackgroundContainer>
  );
};

export default StarBackgroundBlock;
