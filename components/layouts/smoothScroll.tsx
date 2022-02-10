import React, {
  useRef,
  useState,
  useCallback,
  ReactElement,
  useEffect,
  createContext,
} from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import styled from "@emotion/styled";
import tw from "twin.macro";

interface SmoothScrollProps {
  children?: ReactElement;
}

const ScrollContainer = styled.div(() => [tw`fixed left-0 right-0 z-20`]);

const GhostContainer = styled.div(() => [tw`w-full`]);

export const ScrollContext = createContext({ scrollRange: 0, viewportW: 0 });

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const scrollRef = useRef<any | undefined>(null);
  const ghostRef = useRef<any | undefined>(null);
  const [scrollRange, setScrollRange] = useState<number>(0);
  const [viewportW, setViewportW] = useState<number>(0);

  useEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      setScrollRange(scrollRef.current.scrollWidth);
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollYProgress } = useViewportScroll();

  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  );
  const physics = { damping: 14, mass: 0.25, stiffness: 30 };
  const spring = useSpring(transform, physics);

  return (
    <ScrollContext.Provider
      value={{ scrollRange: scrollRange, viewportW: viewportW }}
    >
      <ScrollContainer style={{ willChange: "transform" }}>
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          css={tw`relative h-screen w-screen flex`}
        >
          {children}
        </motion.section>
      </ScrollContainer>
      <GhostContainer
        ref={ghostRef}
        style={{ height: scrollRange }}
        css={tw`bg-black-dark`}
      />
    </ScrollContext.Provider>
  );
};

export default SmoothScroll;
