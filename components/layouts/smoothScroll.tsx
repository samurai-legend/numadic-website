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
import { GlobalLineContext } from "../layouts/horizontalScroll";

export enum ScrollDirection {
  vertical = "vertical",
  horizontal = "horizontal",
}
interface SmoothScrollProps {
  children?: ReactElement;
  direction?: ScrollDirection;
  elRefs?: any;
}

const ScrollContainer = styled.div((props: any) => [
  tw`fixed left-0 right-0 z-20`,
]);

const GhostContainer = styled.div(() => [tw`w-full`]);

export const ScrollContext = createContext<any>({});

const SmoothScroll = ({ children, direction, elRefs }: SmoothScrollProps) => {
  const scrollRef = useRef<any | undefined>(null);
  const ghostRef = useRef<any | undefined>(null);
  const [scrollRange, setScrollRange] = useState<number>(0);
  const [viewportW, setViewportW] = useState<number>(0);
  const { lineGroupRef } = useContext(GlobalLineContext);
  const IsMobile = useMediaMatch("(max-width: 1023px)");
  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    if (elRefs && elRefs.length > 0) {  
      setScrollRange(scrollRef.current.scrollWidth);
    }
  }, [elRefs,viewportW,scrollRange]);

  useEffect(() => {    
    switch (direction) {
      case ScrollDirection.horizontal:
        scrollRef && setScrollRange(scrollRef.current.scrollWidth);
        break;
      case ScrollDirection.vertical:
        scrollRef && setScrollRange(scrollRef.current.scrollHeight);
        break;
    }
  }, [scrollRef, direction]);

  const onResize = useCallback(
    (entries) => {
      for (let entry of entries) {
        switch (direction) {
          case ScrollDirection.horizontal:
            setScrollRange(scrollRef?.current?.scrollWidth);
            setViewportW(entry.contentRect.width);
            break;
          case ScrollDirection.vertical:
            setScrollRange(scrollRef?.current?.scrollHeight);
            setViewportW(window.innerHeight);
            break;
        }
      }
    },
    [scrollRef, IsMobile, direction]
  );

  useEffect(() => {
    if (ghostRef.current) {
      const resizeObserver = new ResizeObserver((entries) => onResize(entries));
      resizeObserver.observe(ghostRef.current);
      return () => resizeObserver.disconnect();
    }
  }, [onResize]);

  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  );
  const scrollStopValue = useMotionValue(0);

  const physics = { stiffness: 70, mass: 0.4, damping: 20 };
  const physicsY = { stiffness: 20, mass: 0.5, damping: 5 };

  const springX = useSpring(scrollStopValue, physics);

  const springY = useSpring(scrollStopValue, physicsY);

  const [refArr, setRefArr] = useState([]);

  useEffect(() => {
    if (elRefs?.length > 0) {
      setRefArr(elRefs);
    }
  }, [elRefs]);

  const [toggleDriection, setDirection] = useState(true);

  const trackScroll = useCallback(() => {
    setDirection(scrollYProgress.getVelocity() > 0);
  }, [scrollYProgress]);

  const transforChangesX = useCallback(
    (x) => {
      scrollStopValue.set(x);
      trackScroll();

      if (
        !IsMobile &&
        scrollRef.current &&
        refArr.length > 0 &&
        lineGroupRef.current
      ) {
        refArr.map((ref: any, key: any) => {
          let checkwidth = scrollRef.current.offsetWidth * key;
          let checkMaxWidth = scrollRef.current.offsetWidth * (key + 1);
          let lineWidth = lineGroupRef?.current?.getBoundingClientRect().width;
          // if (-x >= checkwidth && lineWidth <= checkMaxWidth) {
          //   scrollStopValue.set(-checkwidth);
          // }
          if (
            lineWidth >= checkwidth &&
            -x <= checkMaxWidth &&
            toggleDriection
          ) {
            scrollStopValue.set(-checkwidth);
          }
        });
      }
    },
    [
      IsMobile,
      refArr,
      scrollRef,
      lineGroupRef,
      toggleDriection,
      scrollStopValue,
      trackScroll,
    ]
  );

  useEffect(() => {
    if (scrollRef.current) {
      transform.onChange(transforChangesX);

      return () => {
        transform.destroy();
      };
    }
  }, [transforChangesX]);

  return (
    <ScrollContext.Provider
      value={{
        scrollRange: scrollRange,
        viewportW: viewportW,
        IsMobile: IsMobile,
      }}
    >
      {IsMobile ? (
        <motion.section
          ref={scrollRef}
          css={tw`relative h-full w-screen flex flex-col bg-black-dark`}
        >
          {children}
        </motion.section>
      ) : (
        <>
          {direction === ScrollDirection.horizontal ? (
            <ScrollContainer
              style={{ willChange: "transform" }}
              css={tw`pt-[120px]`}
            >
              <motion.section
                ref={scrollRef}
                style={{ x: springX }}
                css={tw`relative h-[calc(100vh - 120px)] w-screen flex`}
              >
                {children}
              </motion.section>
            </ScrollContainer>
          ) : (
            <ScrollContainer style={{ willChange: "transform" }}>
              <motion.section
                ref={scrollRef}
                style={{ y: springY }}
                css={tw`relative h-full w-screen flex`}
              >
                {children}
              </motion.section>
            </ScrollContainer>
          )}

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
