const TextEntryVariant = {
  hidden: {
    x: 0,
    opacity: 0,
  },
  visible: {
    x: ["100%", '0%'],
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

export { TextEntryVariant };
