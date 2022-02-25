import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter: React.FC<any> = ({ from, to, isAnimate }: any) => {
  const nodeRef = useRef<any>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (isAnimate) {
      const controls = animate(from, to, {
        duration: 1,
        damping: 10,
        mass: 0.02,
        onUpdate(value) {
          node.textContent = Math.ceil(value.toFixed(0)).toLocaleString("en");
        },
      });

      return () => controls.stop();
    }
  }, [from, to, nodeRef, isAnimate]);

  return <span ref={nodeRef} />;
};

export default Counter;
