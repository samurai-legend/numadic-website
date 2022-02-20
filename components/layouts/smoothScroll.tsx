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
  useMotionValue,
} from "framer-motion";
import styled from "@emotion/styled";
import tw from "twin.macro";
import { useMediaMatch } from "rooks";

interface SmoothScrollProps {
  children?: ReactElement;
}

const ScrollContainer = styled.div(() => [tw`fixed left-0 right-0 z-20`]);

const GhostContainer = styled.div(() => [tw`w-full`]);

export const ScrollContext = createContext<any>({});

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const scrollRef = useRef<any | undefined>(null);
  const ghostRef = useRef<any | undefined>(null);
  const [scrollRange, setScrollRange] = useState<number>(0);
  const [viewportW, setViewportW] = useState<number>(0);
  const IsMobile = useMediaMatch("(max-width: 1023px)");

  useEffect(() => {
    scrollRef && IsMobile
      ? setScrollRange(scrollRef.current.scrollHeight)
      : setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      IsMobile
        ? setScrollRange(scrollRef.current.scrollHeight)
        : setScrollRange(scrollRef.current.scrollWidth);
      IsMobile
        ? setViewportW(window.innerHeight)
        : setViewportW(entry.contentRect.width);
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

  const physics = { damping: 20, mass: 0.25, stiffness: 30 };

  const scrollStopValue = useMotionValue(0);

  const spring = useSpring(scrollStopValue, physics);

  const [springDirection, setSpringDirection] = useState<any>({ x: spring });

  const [pauseScroll, setPauseScroll] = useState(false);

  useEffect(() => {
    if (IsMobile) {
      setSpringDirection({ y: spring });
    } else {
      setSpringDirection({ x: spring });
    }
    transform.onChange((x) => {
      scrollStopValue.set(x);
      // if (-x > 1920) {
      //   scrollStopValue.set(-1920);
      // }
    });
  }, [IsMobile, pauseScroll]);

  return (
    <ScrollContext.Provider
      value={{
        scrollRange: scrollRange,
        viewportW: viewportW,
        IsMobile: IsMobile,
        setPauseScroll: setPauseScroll,
      }}
    >
      <ScrollContainer style={{ willChange: "transform" }}>
        <motion.section
          ref={scrollRef}
          style={springDirection}
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
