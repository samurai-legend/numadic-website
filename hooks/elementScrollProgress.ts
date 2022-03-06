import {
  useAnimationFrame,
  useMotionValue,
  useViewportScroll,
} from "framer-motion";

const useElementScrollProgress = (ref: any, offset: any = 0) => {
  const progress = useMotionValue(0);
  const { scrollY } = useViewportScroll();

  useAnimationFrame((t) => {
    const y = scrollY.get();
    if (ref?.current) {
      const container = ref.current;

      const boundingRect = container.getBoundingClientRect();
      const scrollHeight = boundingRect.height;
      const innerHeight = window.innerHeight;
      const bottomOffset = boundingRect.bottom - innerHeight + offset;

      if (y > boundingRect.y && bottomOffset > 0) {
        const perc = bottomOffset / scrollHeight;

        progress.set(parseFloat(Math.abs(perc - 1).toFixed(1)));
      }
    }
  });

  //   useEffect(() => {
  //     if (ref?.current) {
  //       scrollY.onChange((y) => {
  //         trackScroll(y);
  //       });
  //       return () => {
  //         scrollY.destroy();
  //       };
  //     }
  //   }, [ref]);

  return { scrollProgress: progress };
};

export default useElementScrollProgress;
