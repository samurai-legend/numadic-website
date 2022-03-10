import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion, useAnimationFrame } from "framer-motion";
import { IsColliding } from "helpers/colliding";
import { forwardRef, useContext, useEffect, useRef, useState } from "react";
import tw from "twin.macro";
import { GlobalLineContext } from "../layouts/horizontalScroll";

const MessageBubble = styled(motion.div)((props: any) => [
  tw`h-24 w-full bg-gray-medium rounded-xl py-2 relative`,
  tw`before:(contents[""] absolute h-5 w-5 bg-gray-medium )`,
  css`
    &:before {
      ${tw`z-[-1]`}
      border-radius: 0 0 8px 0;
    }
  `,

  props.direction == "bottom" && [
    tw`before:(top-[90%] left-1/2 -translate-x-1/2 rotate-45)`,
  ],
  props.direction == "right" && [
    tw`before:(left-[90%] top-1/2 -translate-y-1/2 -rotate-45)`,
  ],
  props.direction == "left" && [
    tw`before:(right-[90%] top-1/2 -translate-y-1/2 rotate-[135deg])`,
  ],
]);

const PaymentStatsUC: React.FC<any> = ({
  amount,
  Icon,
  animate,
  direction,
  ...props
}: any) => {
  const PathVariant = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        damping: 25,
        mass: 0.02,
      },
    },
  };

  const CheckPathVariant = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const CircleVariant = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const ContentVariant = {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: 90,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const { lineGroupRef } = useContext(GlobalLineContext);

  const ref = useRef(null);
  const [isAnimate, setAnimate] = useState(false);

  useAnimationFrame((t) => {
    if (animate) {
      if (lineGroupRef.current && ref.current) {
        setAnimate(
          IsColliding(lineGroupRef.current, ref.current, "horizontal")
        );
      }
    }
  });

  const [animateObject, setAnimateObject] = useState({});

  useEffect(() => {
    animate != null
      ? setAnimateObject({
          animate: isAnimate && "visible",
        })
      : setAnimateObject({
          whileInView: "visible",
          viewport: { once: true },
        });
  }, [animate, isAnimate]);

  return (
    <motion.div
      css={[
        tw`relative w-full max-w-[105px] h-[max-content] self-end justify-self-center`,
      ]}
      {...props}
      initial="hidden"
      {...animateObject}
      transition={{ staggerChildren: 0.5, delayChildren: 0.5 }}
      ref={ref}
    >
      <MessageBubble
        variants={PathVariant}
        direction={direction ? direction : "bottom"}
      >
        <motion.div
          variants={ContentVariant}
          css={tw`flex justify-center items-center 
        flex-col gap-y-1`}
        >
          <div css={tw`h-10 w-8`}>{Icon}</div>
          <span css={tw`font-normal text-white text-body-1`}>₹{amount}</span>
        </motion.div>
        <motion.div
          variants={CircleVariant}
          css={tw`h-8 w-8 flex justify-center items-center rounded-full bg-success absolute -top-2 -right-2 border-[#242021] border-2`}
        >
          <motion.svg
            width="17"
            height="14"
            viewBox="0 0 17 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M1.58759,8.40805L5.4509,12.0181L14.9685,2.49097"
              variants={CheckPathVariant}
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
      </MessageBubble>
    </motion.div>
  );
};

export default PaymentStatsUC;
