const TextEntryVariant = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

export { TextEntryVariant };
