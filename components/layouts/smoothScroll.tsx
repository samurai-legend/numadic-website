import React, {
  useRef,
  useState,
  useCallback,
  ReactElement,
  useEffect,
  createContext,
  useContext,
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
import { GlobalLineContext } from ".";

interface SmoothScrollProps {
  children?: ReactElement;
}

const ScrollContainer = styled.div((props: any) => [
  tw`fixed left-0 right-0 z-20`,
]);

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
  }, [scrollRef, IsMobile]);

  const onResize = useCallback(
    (entries) => {
      for (let entry of entries) {
        IsMobile
          ? setScrollRange(scrollRef.current.scrollHeight)
          : setScrollRange(scrollRef.current.scrollWidth);
        IsMobile
          ? setViewportW(window.innerHeight)
          : setViewportW(entry.contentRect.width);
      }
    },
    [IsMobile]
  );

  useEffect(() => {
    if (ghostRef.current) {
      const resizeObserver = new ResizeObserver((entries) => onResize(entries));
      resizeObserver.observe(ghostRef.current);
      return () => resizeObserver.disconnect();
    }
  }, [onResize]);

  const { scrollYProgress } = useViewportScroll();

  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  );

  const physics = { stiffness: 30, mass: 1, damping: 10 };

  const scrollStopValue = useMotionValue(0);

  const spring = useSpring(scrollStopValue, physics);

  const [springDirection, setSpringDirection] = useState<any>({ x: spring });

  const [refArr, setRefArr] = useState([]);

  const { lineGroupRef } = useContext(GlobalLineContext);

  useEffect(() => {
    setSpringDirection({ x: spring });
    transform.onChange((x) => {
      scrollStopValue.set(x);

      if (!IsMobile) {
        refArr.map((ref: any, key: any) => {
          let checkwidth = scrollRef.current.offsetWidth * key;
          let checkMaxWidth = scrollRef.current.offsetWidth * (key + 1);
          let lineWidth = lineGroupRef?.current?.getBoundingClientRect().width;

          if (-x >= checkwidth && lineWidth <= checkMaxWidth) {
            scrollStopValue.set(-checkwidth);
          }
        });
      }
    });
  }, [IsMobile, refArr, scrollRef, lineGroupRef]);

  return (
    <ScrollContext.Provider
      value={{
        scrollRange: scrollRange,
        viewportW: viewportW,
        IsMobile: IsMobile,
        setRefArr: setRefArr,
      }}
    >
      {IsMobile ? (
        <>
          <motion.section
            ref={scrollRef}
            css={tw`relative h-full w-screen flex bg-black-dark`}
          >
            {children}
          </motion.section>
        </>
      ) : (
        <>
          <ScrollContainer
            style={{ willChange: "transform" }}
            css={tw`pt-[120px]`}
          >
            <motion.section
              ref={scrollRef}
              style={springDirection}
              css={tw`relative h-[calc(100vh - 120px)] w-screen flex `}
            >
              {children}
            </motion.section>
          </ScrollContainer>
          <GhostContainer
            ref={ghostRef}
            style={{ height: scrollRange }}
            css={tw`bg-black-dark`}
          />
        </>
      )}
    </ScrollContext.Provider>
  );
};

export default SmoothScroll;
