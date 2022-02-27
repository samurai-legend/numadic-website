import { motion } from "framer-motion";

const Carrot: React.FC<any> = (props: any) => {
  const { variants } = props;
  return (
    <motion.svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={variants}
      className="carrot"
      {...props}
    >
      <path
        className="carrot-stroke"
        d="M1.61768 1.24512L6.11768 5.74512L10.6177 1.24512"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
};

export default Carrot;
