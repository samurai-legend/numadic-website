import { motion, useAnimationFrame } from "framer-motion";
import { IsColliding } from "helpers/colliding";
import { useContext, useEffect, useRef, useState } from "react";
import { useInViewRef } from "rooks";
import tw from "twin.macro";
import { GlobalLineContext } from "../layouts/horizontalScroll";

import { ScrollContext } from "../layouts/smoothScroll";
import { Typography } from "../typography";
import Counter from "./counter";

const TransactionStats: React.FC<any> = (props: any) => {
  const { from, to, text } = props;
  const secRef = useRef<any>(null);
  const [isAnimate, setAnimate] = useState<boolean | undefined>(undefined);

  const { lineGroupRef } = useContext(GlobalLineContext);
  const { IsMobile } = useContext(ScrollContext);

  const variants = {
    animate: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  const [animateObject, setAnimateObject] = useState({});

  useEffect(() => {
    isAnimate != null
      ? setAnimateObject({
          animate: isAnimate ? "animate" : "hidden",
        })
      : setAnimateObject({
          whileInView: "animate",
          viewport: { once: true },
        });
  }, [isAnimate]);

  useAnimationFrame((t) => {
    if (!IsMobile) {
      setAnimate(
        IsColliding(lineGroupRef.current, secRef.current, "horizontal")
      );
    } else {
      setAnimate(true);
    }
  });

  return (
    <motion.div
      initial="hidden"
      variants={variants}
      {...animateObject}
      css={tw`flex items-center justify-center flex-col gap-y-2`}
      ref={secRef}
    >
      <Typography as="h2" isColor css={tw`font-bold`}>
        <Counter isAnimate={isAnimate} from={from} to={to} />
      </Typography>
      <Typography
        as="span"
        type="overline"
        css={tw`uppercase tracking-[0.15em]`}
      >
        {text}
      </Typography>
    </motion.div>
  );
};

export default TransactionStats;
