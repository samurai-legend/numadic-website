import { motion } from "framer-motion";
import { forwardRef, useEffect, useState } from "react";
import tw from "twin.macro";

const rectPath =
  "M0.835541 13.7256C0.835541 6.5459 6.65584 0.725586 13.8355 0.725586H102.949C110.129 0.725586 115.949 6.54588 115.949 13.7256V90.9906C115.949 98.1703 110.129 103.991 102.949 103.991H74.9024C71.294 103.991 67.8479 105.49 65.3888 108.131L58.69 115.324C57.1081 117.023 54.4173 117.023 52.8355 115.324L46.1367 108.131C43.6776 105.49 40.2315 103.991 36.6231 103.991H13.8355C6.65585 103.991 0.835541 98.1703 0.835541 90.9906V13.7256Z";

const PathVariant = {
  hidden: {
    scale: 0,
    opacity: 0,
    y: 500,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      damping: 15,
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
const PaymentStatsUC: React.FC<any> = forwardRef((props: any, ref: any) => {
  const { amount, Icon, isAnimate } = props;

  const [animateObject, setAnimateObject] = useState({});

  useEffect(() => {
    isAnimate != null
      ? setAnimateObject({
          animate: isAnimate && "visible",
        })
      : setAnimateObject({
          whileInView: "visible",
          viewport: { once: true },
        });
  }, [isAnimate]);

  return (
    <motion.div
      css={[tw`relative w-max h-[max-content] self-end justify-self-center`]}
      initial="hidden"
      {...animateObject}
      transition={{ staggerChildren: 0.5, delayChildren: 0.5 }}
      ref={ref}
    >
      <motion.svg
        width="116"
        height="117"
        viewBox="0 0 116 117"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={PathVariant}
        css={tw`w-full`}
      >
        <g filter="url(#filter0_b_2_367)">
          <path d={rectPath} fill="white" fillOpacity="0.21" />
        </g>
        <defs>
          <filter
            id="filter0_b_2_367"
            x="-29.1645"
            y="-29.2744"
            width="175.114"
            height="175.873"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="15" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_2_367"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_2_367"
              result="shape"
            />
          </filter>
        </defs>
      </motion.svg>
      <div
        css={tw`absolute  top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2`}
      >
        <motion.div
          variants={ContentVariant}
          css={tw`flex justify-center items-center 
          flex-col gap-y-1`}
        >
          <Icon />
          <span css={tw`font-normal text-white text-body-1`}>₹{amount}</span>
        </motion.div>
      </div>
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
    </motion.div>
  );
});
PaymentStatsUC.displayName = "PaymentStatsUC";
export default PaymentStatsUC;
