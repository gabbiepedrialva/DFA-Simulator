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
      <Text size="label" top="32%" left="16%">
        0
      </Text>
      {/* q1 q3 */}
      <Text size="label" top="68%" left="16%">
        1
      </Text>
      {/* q9 */}
      <Text size="label" top="49.5%" left={["100%", "100%", "97%", "97%", "97%", "94.5%"]}>
        0,1
      </Text>
      {/* q2 q4 */}
      <Text size="label" top="32%" left="32%">
        0
      </Text>
      {/* q3 q4 */}
      <Text size="label" top="68%" left="32%">
        1
      </Text>
      {/* q4 q5 */}
      <Text size="label" top="32%" left="41.6%">
        0,1
      </Text>
      {/* q5 */}
      <Text size="label" top="37.5%" left="50.1%">
        0
      </Text>
      {/* q5 q6 */}
      <Text size="label" top="32%" left="57.5%">
        1
      </Text>
      {/* q6 q7 */}
      <Text size="label" top="32%" left="68%">
        0
      </Text>
      {/* q7 q9 */}
      <Text size="label" top="32%" left="84%">
        1
      </Text>
      {/* q6 q8 */}
      <Text size="label" top="68%" left="68%">
        1
      </Text>
      {/* q8 q9 */}
      <Text size="label" top="68%" left="84%">
        1
      </Text>

      {/* q7 q5 */}
      <Text size="label" top="16%" left="63%">
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
        w={["4em", "4em", "8em", "8em", "8em", "12em"]}
        top={["30%", "30%", "30%", "30%", "30%", "30%"]}
        left={["13.5%", "13.5%", "16.5%", "16.5%", "16.5%", "17%"]}
        rotate={["126", "126", "135", "135", "135", "145"]}
      />

      {/* q1 q3 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "10em"]}
        top={["63%", "63%", "68%", "68%", "68%", "64%"]}
        left={["22.5%", "22.5%", "15%", "15%", "15%", "19%"]}
        rotate={["-126", "-126", "45.5", "45.5", "45.5", "-145"]}
      />

      {/* q2 q4 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "10em"]}
        top={["30%", "30%", "36%", "36%", "36%", "32%"]}
        left={["34%", "34%", "27.5%", "27.5%", "27.5%", "32%"]}
        rotate={["-126", "-126", "45.5", "45.5", "45.5", "-145"]}
      />

      {/* q3 q4 q5*/}
      <ArrowBody
        w={["9em", "9em", "16em", "16em", "16em", "18em"]}
        top={["47%", "47%", "47%", "47%", "47%", "49%"]}
        left={["32.5%", "32.5%", "35.5%", "35.5%", "35.5%", "34.8%"]}
        rotate={["126", "126", "135", "135", "135", "145"]}
      />

      {/* q4 q5 
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["30%", "30%", "30%", "30%", "30%", "30%"]}
        left={["73.5%", "73.5%", "42%", "42%", "42%", "42%"]}
        rotate={["126", "126", "135", "135", "135", "135"]}
      />*/}

      {/* q5 q6 *
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["30%", "30%", "30%", "30%", "30%", "30%"]}
        left={["80.5%", "80.5%", "80.5%", "58%", "58%", "58%"]}
        rotate={["-126", "-126", "-135", "-135", "-135", "-135"]}
      />/}

      {/* q5 q6 q8*/}
      <ArrowBody
        w={["9em", "9em", "16em", "16em", "16em", "18em"]}
        top={["49%", "49%", "49%", "49%", "49%", "49%"]}
        left={["68.5%", "68.5%", "66%", "66%", "66%", "65%"]}
        rotate={["-126", "-126", "-135", "-135", "-135", "-145"]}
      />

      

      {/* q6 q7 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "12em"]}
        top={["30%", "30%", "30%", "30%", "30%", "31%"]}
        left={["66%", "66%", "68.5%", "68.5%", "68.5%", "68.5%"]}
        rotate={["126", "126", "135", "135", "135", "145"]}
      />
      

      {/* q8 q9 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "10em"]}
        top={["60%", "60%", "60%", "60%", "60%", "65%"]}
        left={["79%", "79%", "81.5%", "81.5%", "81.5%", "80%"]}
        rotate={["126", "126", "135", "135", "135", "145"]}
      />

      {/* q7 q9 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "10em"]}
        top={["32%", "32%", "32%", "32%", "32%", "32%"]}
        left={["87%", "87%", "84.5%", "84.5%", "84.5%", "84%"]}
        rotate={["-126", "-126", "-135", "-135", "-135", "-145"]}
      />

      {/* q8 q9 
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["60%", "60%", "60%", "60%", "60%", "60%"]}
        left={["85.5%", "85.5%", "85.5%", "83.5%", "83.5%", "83.5%"]}
        rotate={["126", "126", "135", "135", "135", "135"]}
      />*/}

      {/* q7 q5 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "14em"]}
        top={["28%", "28%", "25%", "25%", "25%", "25%"]}
        left={["63.5%", "63.5%", "63.5%", "63.5%", "63.5%", "63.5%"]}
      />

      {/* q8 q7 */}
      <ArrowBody
        w={["8em", "8em", "10em", "10em", "10em", "12em"]}
        top={["50%", "50%", "50%", "50%", "50%", "50%"]}
        left={["71.5%", "71,5%", "73.7%", "73.7%", "73.7%", "74.4%"]}
        rotate="90"
      />

      {/* q3 q2 */}
      <ArrowBody
        w={["8em", "8em", "10em", "10em", "10em", "12em"]}
        top={["50%", "50%", "50%", "50%", "50%", "50%"]}
        left={["18.3%", "18.3%", "20.8%", "20.8%", "20.8%", "21.6%"]}
        rotate="90"
      />

      {/* q7 q5 guide 
      <ArrowBody
        w={["8em", "8em", "10em", "10em", "10em", "16em"]}
        top={["50%", "50%", "50%", "50%", "50%", "50%"]}
        left={["70%", "70%", "22.7%", "22.7%", "22.7%", "22.4%"]}
        rotate="90"
      />*/}

      {/* q2 q3 */}
      <ArrowBody
        w={["8em", "8em", "10em", "10em", "10em", "12em"]}
        top={["50%", "50%", "50%", "50%", "50%", "50%"]}
        left={["20.4%", "20.4%", "22.6%", "22.6%", "22.6%", "23.2%"]}
        rotate="90"
      />

      {/* ARROW HEADS */}

      {/* q1 q2 */}
      <ArrowHead
        top={["26.2%", "26.2%", "26.2%", "26.2%", "26.2%", "25.39%"]}
        left={["21%", "21%", "21.5%", "21.5%", "21.5%", "21.8%"]}
        rotate={["-45", "-45", "-45", "-45", "-45", "-43"]}
      />

      {/* q1 q3 */}
      <ArrowHead
        top={["73.8%", "73.8%", "74.5%", "74.5%", "74.5%", "76.2%"]}
        left={["21.5%", "21.5%", "21.1%", "21.1%", "21.1%", "21.55%"]}
        rotate={["40", "40", "40", "40", "40", "40"]}
      />

      {/* q2 q3 */}
      <ArrowHead
        top={["72.1%", "72.1%", "71.4%", "71.4%", "71.4%", "71.2%"]}
        left={["25%", "25%", "24.9%", "24.9%", "24.9%","24.7%"]}
        rotate={["90", "90", "90", "90", "90", "90"]}
      />

 
      {/* q3 q2 */}
      <ArrowHead
        top={["28%", "28%", "28.3%", "28.3%", "28.3%", "28.8%"]}
        left={["23.1%", "23.1%", "23.2%", "23.2%", "23.2%", "23.2%"]}
        rotate="270"
      />
     
      {/* q3 q4 */}
      <ArrowHead
        top={["56.7%", "56.7%", "56.5%", "56.5%", "56.5%", "55.9%"]}
        left={["34.2%", "34.2%", "34.5%", "34.5%", "34.5%", "34.8%"]}
        rotate={["-45", "-45", "-45", "-45", "-45", "-45"]}
      />


      {/* q2 q4 */}
      <ArrowHead
        top={["43.7%", "43.7%", "43.7%", "43.7%", "43.7%", "44.65%"]}
        left={["34.1%", "34.1%", "34.3%", "34.3%", "34.3%", "34.55%"]}
        rotate={["45", "45", "45", "45", "45", "45"]}
      />

      {/* q4 q5 */}
      <ArrowHead
        top={["26.8%", "26.8%", "27.3%", "27.3%", "27.3%", "25.2%"]}
        left={["47.2%", "47.2%", "47.7%", "47.7%", "47.7%", "47.8%"]}
        rotate={["-45", "-45", "-45", "-45", "-45", "-45"]}
      />

      {/* q5 q6 */}
      <ArrowHead
        top={["43.4%", "43.4%", "43.7%", "43.7%", "43.7%", "44.8%"]}
        left={["60%", "60%", "60.3%", "60.3%", "60.3%", "60.5%"]}
        rotate={["45", "45", "45", "45", "45", "45"]}
      />

      {/* q6 q7 */}
      <ArrowHead
        top={["26.3%", "26.3%", "26.3%", "26.3%", "26.3%", "25.5%"]}
        left={["73.5%", "73.5%", "73.5%", "73.5%", "73.5%", "73.7%"]}
        rotate={["-45", "-45", "-45", "-45", "-45", "-45"]}
      />

      {/* q6 q8 */}
      <ArrowHead
        top={["73%", "73%", "73%", "73%", "73%", "75.6%"]}
        left={["73%", "73%", "73.5%", "73.5%", "73.5%", "73.6%"]}
        rotate={["40", "40", "40", "40", "40", "40"]}
      />

      {/* q7 q9 */}
      <ArrowHead
        top={["43.4%", "43.4%", "43.5%", "43.5%", "43.5%", "44.5%"]}
        left={["86%", "86%", "86.4%", "86.4%", "86.4%", "86.6%"]}
        rotate={["45", "45", "45", "45", "45", "45"]}
      />

      {/* q8 q9 */}
      <ArrowHead
        top={["56.8%", "56.8%", "56.7%", "56.7%", "56.7%", "55.6%"]}
        left={["86.5%", "86.5%", "86.5%", "86.5%", "86.5%", "86.8%"]}
        rotate={["-50", "-50", "-50", "-50", "-50", "-50"]}
      />

      {/* q7 q5 */}
      <ArrowHead
        top={["19.7%", "19.7%", "19.7%", "19.7%", "19.7%", "19.7%"]}
        left={["53.9%", "53.9%", "53.9%", "53.9%", "53.9%", "52.9%"]}
        rotate="180"
      />

      {/* q8 q7 */}
      <ArrowHead
        top={["28%", "28%", "28.5%", "28.5%", "28.5%", "29.8%"]}
        left={["76.2%", "76.2%", "76.1%", "76.1%", "76.1%", "76%"]}
        rotate="270"
      />

      {/* ARROW LOOPS */}

      {/* q5 */}
      <ArrowLoopSm
        top="31%"
        left={["50%", "50%", "50%", "50%", "50%", "50%"]}
        rotate="270"
      />

      {/* q9 */}
      <ArrowLoopSm
        top="50%"
        left={["95.1%", "95.1%", "93.7%", "93.7%", "93.7%", "92.3%"]}
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
        q2{/* q2 */}
      </Atom>
      <Atom
        variant="3"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 3 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q3{/* q3 */}
      </Atom>
      <Atom
        variant="4"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 4 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q4{/* q4 */}
      </Atom>
      <Atom
        variant="5"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 5 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q5{/* q5 */}
      </Atom>
      <Atom
        variant="6"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 6 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q6{/* q6 */}
      </Atom>
      <Atom
        variant="7"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 7 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q7{/* q7 */}
      </Atom>
      <Atom
        variant="8"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 8 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q8{/* q8 */}
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
