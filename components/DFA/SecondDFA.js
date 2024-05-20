import { Badge, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  ArrowHead,
  ArrowLoop,
  ArrowBody,
  ArrowLoopLg,
  ArrowLoopSm,
} from "../components/Arrows";

const Atom = motion(Badge);

const variants = {
  initial: { y: "-50%", x: "-50%" },
  pulse: { scale: 5, transition: { duration: 0.6 } },
  bounce: {
    y: ["-50%", "-200%", "-50%"],
    x: ["-50%", "-50%", "-50%"],
    scale: 2.5,
    transition: { duration: 0.4 },
  },
  scale: { scale: 1.5 },
};

const SecondDFA = ({ currentNodeVal, simulatingStatus }) => {
  return (
    <>
      {/* NUMBERS */}

      {/* q1 q2 */}
      <Text size="label" top="32%" left="13.5%">
        0
      </Text>
      {/* q1 q3 */}
      <Text size="label" top="70%" left="15.5%">
        1
      </Text>
      {/* q9 */}
      <Text size="label" top="49.5%" left="100%">
        0,1
      </Text>
      {/* q2 q4 */}
      <Text size="label" top="32%" left="33.5%">
        0
      </Text>
      {/* q3 q4 */}
      <Text size="label" top="70%" left="33.5%">
        1
      </Text>
      {/* q4 q5 */}
      <Text size="label" top="30.5%" left="40.5%">
        0,1
      </Text>
      {/* q5 */}
      <Text size="label" top="37.5%" left="50%">
        0
      </Text>
      {/* q5 q6 */}
      <Text size="label" top="32%" left="59%">
        1
      </Text>
      {/* q6 q7 */}
      <Text size="label" top="32%" left="67%">
        0
      </Text>
      {/* q6 q8 */}
      <Text size="label" top="32%" left="85%">
        1
      </Text>
      {/* q7 q9 */}
      <Text size="label" top="70%" left="67.5%">
        1
      </Text>
      {/* q8 q9 */}
      <Text size="label" top="70%" left="85.5%">
        1
      </Text>

      {/* q7 q5 */}
      <Text size="label" top="14%" left="63.3%">
        0
      </Text>

      {/* q8 q7 */}
      <Text size="label" top="50%" left="78.5%">
        0
      </Text>

      {/* q3 q2 */}
      <Text size="label" top="50%" left="20.5%">
        0
      </Text>

      {/* q2 q3 */}
      <Text size="label" top="50%" left="27.5%">
        1
      </Text>

      {/* ARROW BODY */}

      {/* q1 q2 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["30%", "30%", "30%", "30%", "30%", "30%"]}
        left={["12.5%", "12.5%", "15%", "15%", "15%", "15%"]}
        rotate={["126", "126", "135", "135", "135", "135"]}
      />

      {/* q1 q3 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["63%", "63%", "63%", "63%", "63%", "63%"]}
        left={["21.5%", "21.5%", "19%", "19%", "19%", "19%"]}
        rotate={["-126", "-126", "-135", "-135", "-135", "-135"]}
      />

      {/* q2 q4 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["30%", "30%", "30%", "30%", "30%", "30%"]}
        left={["35%", "35%", "32.5%", "32.5%", "32.5%", "32.5%"]}
        rotate={["-126", "-126", "-135", "-135", "-135", "-135"]}
      />

      {/* q3 q4 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["60%", "60%", "60%", "60%", "60%", "60%"]}
        left={["28%", "28%", "30.5%", "30.5%", "30.5%", "30.5%"]}
        rotate={["126", "126", "135", "135", "135", "135"]}
      />

      {/* q4 q5 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["30%", "30%", "30%", "30%", "30%", "30%"]}
        left={["39.2%", "39.2%", "42%", "42%", "42%", "42%"]}
        rotate={["126", "126", "135", "135", "135", "135"]}
      />

      {/* q5 q6 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["30%", "30%", "30%", "30%", "30%", "30%"]}
        left={["60.5%", "60.5%", "58%", "58%", "58%", "58%"]}
        rotate={["-126", "-126", "-135", "-135", "-135", "-135"]}
      />

      {/* q6 q7 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["30%", "30%", "30%", "30%", "30%", "30%"]}
        left={["65.7%", "65.7%", "68.5%", "68.5%", "68.5%", "68.5%"]}
        rotate={["126", "126", "135", "135", "135", "135"]}
      />

      {/* q6 q8 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["60%", "60%", "60%", "60%", "60%", "60%"]}
        left={["72.2%", "72.2%", "69.5%", "69.5%", "69.5%", "69.5%"]}
        rotate={["-126", "-126", "-135", "-135", "-135", "-135"]}
      />

      {/* q7 q9 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["30%", "30%", "30%", "30%", "30%", "30%"]}
        left={["86.5%", "86.5%", "84%", "84%", "84%", "84%"]}
        rotate={["-126", "-126", "-135", "-135", "-135", "-135"]}
      />

      {/* q8 q9 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["60%", "60%", "60%", "60%", "60%", "60%"]}
        left={["80.9%", "80.9%", "83.5%", "83.5%", "83.5%", "83.5%"]}
        rotate={["126", "126", "135", "135", "135", "135"]}
      />

      {/* q7 q5 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["28%", "28%", "25%", "25%", "25%", "25%"]}
        left={["63.5%", "63.5%", "63.5%", "63.5%", "63.5%", "63.5%"]}
      />

      {/* q2 q3 */}
      <ArrowBody
        w={["8em", "8em", "10em", "10em", "10em", "10em"]}
        top={["50%", "50%", "50%", "50%", "50%", "50%"]}
        left={["20.2%", "20.2%", "73.7%", "73.7%", "73.7%", "73.7%"]}
        rotate="90"
      />

      {/* q3 q2 */}
      <ArrowBody
        w={["8em", "8em", "10em", "10em", "10em", "10em"]}
        top={["50%", "50%", "50%", "50%", "50%", "50%"]}
        left={["18.5%", "18.5%", "20.7%", "20.7%", "20.7%", "20.7%"]}
        rotate="90"
      />

      {/* q8 q7 */}
      <ArrowBody
        w={["8em", "8em", "10em", "10em", "10em", "10em"]}
        top={["50%", "50%", "50%", "50%", "50%", "50%"]}
        left={["71.2%", "71.2%", "22.7%", "22.7%", "22.7%", "22.7%"]}
        rotate="90"
      />

      {/* ARROW HEADS */}

      {/* q1 q2 */}
      <ArrowHead
        top={["25%", "25%", "24.5%", "24.5%", "24.5%", "24.5%"]}
        left={["20.5%", "20.5%", "20.8%", "20.8%", "20.8%", "20.8%"]}
        rotate={["-45", "-45", "-45", "-45", "-45", "-45"]}
      />

      {/* q1 q3 */}
      <ArrowHead
        top={["74.8%", "74.8%", "74.8%", "74.8%", "74.8%", "74.8%"]}
        left={["20.9%", "20.9%", "20.9%", "20.9%", "20.9%", "20.9%"]}
        rotate={["40", "40", "40", "40", "40", "40"]}
      />

      {/* q2 q3 */}
      <ArrowHead
        top={["72.5%", "72.5%", "71.9%", "71.9%", "71.9%", "71.9%"]}
        left={["25%", "25%", "25%", "25%", "25%", "25%"]}
        rotate="90"
      />

      {/* q3 q2 */}
      <ArrowHead
        top={["27.5%", "27.5%", "28.3%", "28.3%", "28.3%", "28.3%"]}
        left={["23.1%", "23.1%", "23.1%", "23.1%", "23.1%", "23.1%"]}
        rotate="270"
      />

      {/* q3 q4 */}
      <ArrowHead
        top={["57.2%", "57.2%", "57.2%", "57.2%", "57.2%", "57.2%"]}
        left={["35.1%", "35.1%", "35.1%", "35.1%", "35.1%", "35.1%"]}
        rotate={["-45", "-45", "-45", "-45", "-45", "-45"]}
      />

      {/* q2 q4 */}
      <ArrowHead
        top={["43.1%", "43.1%", "43.1%", "43.1%", "43.1%", "43.1%"]}
        left={["34.8%", "34.8%", "34.9%", "34.9%", "34.9%", "34.9%"]}
        rotate={["45", "45", "45", "45", "45", "45"]}
      />

      {/* q4 q5 */}
      <ArrowHead
        top={["25.6%", "25.6%", "25.6%", "25.6%", "25.6%", "25.6%"]}
        left={["47%", "47%", "47.3%", "47.3%", "47.3%", "47.3%"]}
        rotate={["-45", "-45", "-45", "-45", "-45", "-45"]}
      />

      {/* q5 q6 */}
      <ArrowHead
        top={["43.4%", "43.4%", "43.4%", "43.4%", "43.4%", "43.4%"]}
        left={["60.5%", "60.5%", "60.6%", "60.6%", "60.6%", "60.6%"]}
        rotate={["45", "45", "45", "45", "45", "45"]}
      />

      {/* q6 q7 */}
      <ArrowHead
        top={["26.3%", "26.3%", "26.3%", "26.3%", "26.3%", "26.3%"]}
        left={["73.2%", "73.2%", "73.5%", "73.5%", "73.5%", "73.5%"]}
        rotate={["-45", "-45", "-45", "-45", "-45", "-45"]}
      />

      {/* q6 q8 */}
      <ArrowHead
        top={["74.5%", "74.5%", "75.1%", "75.1%", "75.1%", "75.1%"]}
        left={["72.7%", "72.7%", "73%", "73%", "73%", "73%"]}
        rotate={["40", "40", "40", "40", "40", "40"]}
      />

      {/* q8 q7 */}
      <ArrowHead
        top={["27.8%", "27.8%", "28.4%", "28.4%", "28.4%", "28.4%"]}
        left={["76%", "76%", "76%", "76%", "76%", "76%"]}
        rotate="270"
      />

      {/* q7 q9 */}
      <ArrowHead
        top={["43.4%", "43.4%", "43.4%", "43.4%", "43.4%", "43.4%"]}
        left={["86.7%", "86.7%", "86.7%", "86.7%", "86.7%", "86.7%"]}
        rotate={["45", "45", "45", "45", "45", "45"]}
      />

      {/* q8 q9 */}
      <ArrowHead
        top={["57.7%", "57.7%", "58.1%", "58.1%", "58.1%", "58.1%"]}
        left={["87.8%", "87.8%", "87.6%", "87.6%", "87.6%", "87.6%"]}
        rotate={["-50", "-50", "-50", "-50", "-50", "-50"]}
      />

      {/* q7 q5 */}
      <ArrowHead
        top={["19.8%", "19.8%", "19.7%", "19.7%", "19.7%", "19.7%"]}
        left={["54.5%", "54.5%", "53.9%", "53.9%", "53.9%", "53.9%"]}
        rotate="180"
      />

      {/* ARROW LOOPS */}

      {/* q5 */}
      <ArrowLoopSm
        top="30.3%"
        left={["50%", "50%", "50%", "50%", "50%", "50%"]}
        rotate="270"
      />

      {/* q9 */}
      <ArrowLoopSm
        top="50%"
        left={["95.1%", "95.1%", "93.7%", "93.7%", "93.7%", "93.7%"]}
        rotate="180"
      />

      {/* STATES */}

      <Atom
        variant="1"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 1 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        – {/* q1 */}
      </Atom>

      <Atom
        variant="2"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 2 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        {/* q2 */}
      </Atom>
      <Atom
        variant="3"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 3 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        {/* q3 */}
      </Atom>
      <Atom
        variant="4"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 4 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        {/* q4 */}
      </Atom>
      <Atom
        variant="5"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 5 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        {/* q5 */}
      </Atom>
      <Atom
        variant="6"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 6 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        {/* q6 */}
      </Atom>
      <Atom
        variant="7"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 7 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        {/* q7 */}
      </Atom>
      <Atom
        variant="8"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 8 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        {/* q8 */}
      </Atom>
      <Atom
        variant="9"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 9 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        + {/* q9 */}
      </Atom>
    </>
  );
};

export default SecondDFA;
