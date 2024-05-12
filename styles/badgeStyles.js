export const Badge = {
  baseStyle: {
    _focus: "",
  },
  sizes: {
    node: {
      bg: "gray.700",
      color: ["gray.200", null, "gray.200"],

      // h: ["2em", "2em", "3.5em", "3.5em"],
      h: "3em",
      w: "3em",
      // w: ["2em", "2em", "3.5em", "3.5em"],

      boxShadow: "xl",
      border: "2px",
      rounded: "50%",

      pos: "absolute",
      transform: "auto",
      translateX: "-50%",
      translateY: "-50%",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      textTransform: "none",
      fontSize: ["0.5em", "0.5em", "0.9em", "0.9em", "0.9em", "1em"],
      fontWeight: "500",
    },
  },
  variants: {
    q1: {
      top: "50%",
      left: "4.5%",

      borderColor: "blue.300",
    },
    q2: {
      top: "20%",
      left: "17.5%",

      borderColor: "teal.300",
    },
    q3: {
      top: "80%",
      left: "17.5%",

      borderColor: "teal.300",
    },
    q4: {
      top: "20%",
      left: "30.5%",

      borderColor: "teal.300",
    },
    q5: {
      top: "50%",
      left: "30.5%",

      borderColor: "teal.300",
    },
    q6: {
      top: "80%",
      left: "30.5%",

      borderColor: "teal.300",
    },
    q7: {
      top: "20%",
      left: "43.5%",

      borderColor: "teal.300",
    },
    q8: {
      top: "50%",
      left: "43.5%",

      borderColor: "teal.300",
    },
    q9: {
      top: "80%",
      left: "43.5%",

      borderColor: "teal.300",
    },
    q10: {
      top: "50%",
      left: "56.5%",

      borderColor: "teal.300",
    },
    q11: {
      top: "50%",
      left: "69.5%",

      borderColor: "teal.300",
    },
    q12: {
      top: "20%",
      left: "82.5%",

      borderColor: "teal.300",
    },
    q13: {
      top: "80%",
      left: "82.5%",

      borderColor: "teal.300",
    },
    q14: {
      top: "20%",
      left: "95.5%",

      borderColor: "green.300",
    },
    q15: {
      top: "80%",
      left: "95.5%",

      borderColor: "green.300",
    },
    q16: {
      top: "35%",
      left: "37%",

      borderColor: "red.300",
    },
    q17: {
      top: "65%",
      left: "37%",

      borderColor: "red.300",
    },
    1: {
      top: "50%",
      left: "11%",

      borderColor: "blue.300",
    },
    2: {
      top: "20%",
      left: "24%",

      borderColor: "teal.300",
    },
    3: {
      top: "80%",
      left: "24%",

      borderColor: "teal.300",
    },
    4: {
      top: "50%",
      left: "37%",

      borderColor: "teal.300",
    },
    5: {
      top: "20%",
      left: "50%",

      borderColor: "teal.300",
    },
    6: {
      top: "50%",
      left: "63%",

      borderColor: "teal.300",
    },
    7: {
      top: "20%",
      left: "76%",

      borderColor: "teal.300",
    },
    8: {
      top: "80%",
      left: "76%",

      borderColor: "teal.300",
    },
    9: {
      top: "50%",
      left: "89%",

      borderColor: "green.300",
    },
  },
  defaultProps: {
    size: "node",
  },
};
