export const Button = {
  baseStyle: {
    _focus: "",
  },
  sizes: {
    regular: {
      fontSize: ["0.7em", "0.7em", "0.9em"],
      px: "4",
      py: "2",
    },
  },
  variants: {
    data: {
      _hover: "",
      cursor: "default",
      py: "1",
      px: "2",
      ml: "3",
      mr: "1",
      fontWeight: "bold",
      color: "gray.700",
      textTransform: "uppercase",

      fontSize: ["0.7em", "0.7em", "0.9em"],
      bg: "gray.100",
    },
    clear: {
      bg: "none",
      _hover: "",
      fontSize: ["0.7em", "0.7em", "0.9em"],
    },
  },
  defaultProps: {
    size: "regular",
  },
};

export const Input = {
  baseStyle: {
    _focus: "",
  },
  sizes: {},
  variants: {},
  defaultProps: {},
};

export const Heading = {
  baseStyle: {
    _focus: "",
  },
  sizes: {},
  variants: {
    regular: {
      fontSize: ["0.8em", "0.8em", "1.2em", "1.2em"],
    },
    title: {
      fontSize: ["2em", "2.4em", "2.9em", "2.9em", "2.9em", "3.5em"],
    },
  },
  defaultProps: {
    variant: "regular",
  },
};

export const Tag = {
  baseStyle: {
    _focus: "",
  },
  sizes: {
    regular: {
      rounded: "md",
      fontSize: ["0.7em", "0.7em", "0.9em"],
    },
  },
  variants: {},
  defaultProps: {},
};

export const Flex = {
  baseStyle: {},
  sizes: {
    heightWrap: {
      h: ["12em", "12em", "18em", "18em", "18em", "20em"],
    },
  },
  variants: {
    heightWrap: {
      pos: "relative",
      borderBottom: "solid 1px",
      borderColor: "gray.200",
    },
  },
  defaultProps: {},
};

export const Text = {
  baseStyle: {},
  sizes: {
    label: {
      pos: "absolute",
      translateX: "-50%",
      translateY: "-50%",
      transform: "auto",

      fontWeight: "semibold",
      fontSize: ["0.6em", "0.6em", "1em", "1em", "1em", "1em"],
    },
  },
  variants: {},
  defaultProps: {},
};
