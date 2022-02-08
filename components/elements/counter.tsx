import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter: React.FC<any> = ({ from, to }: any) => {
  const nodeRef = useRef<any>(null);

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [from, to, nodeRef]);

  return <span ref={nodeRef} />;
};

export default Counter;
