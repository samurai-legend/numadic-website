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

const EntryVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};
export { TextEntryVariant, EntryVariant };
