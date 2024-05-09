import { Badge, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  ArrowHead,
  ArrowLoopSm,
  ArrowLoopLg,
  ArrowBody,
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

const FirstDFA = ({ currentNode, simulating }) => {
  return (
    <>
      {/* ARROW LOOP */}
      {/* q14 */}
      <ArrowLoopSm
        top="21%"
        left={["101.2%", "101.2%", "100%", "100%", "100%", "100%"]}
        rotate="180"
      />
      {/* q15 */}
      <ArrowLoopSm
        top="81%"
        left={["101.2%", "101.2%", "100%", "100%", "100%", "100%"]}
        rotate="180"
      />
      {/* T */}
      <ArrowLoopSm
        top="36%"
        left={["42.8%", "42.8%", "41.5%", "41.5%", "41.5%", "41.5%"]}
        rotate="180"
      />
      {/* T */}
      <ArrowLoopSm
        top="66%"
        left={["42.8%", "42.8%", "41.5%", "41.5%", "41.5%", "41.5%"]}
        rotate="180"
      />
      {/* ARROW BODY */}
      {/* q1 q2 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["30%", "30%", "30%", "30%", "30%", "30%"]}
        left={["7.5%", "7.5%", "10%", "10%", "10%", "10%"]}
        rotate={["126", "126", "135", "135", "135", "135"]}
      />
      {/* q1 q3 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["71%", "71%", "71%", "71%", "71%", "71%"]}
        left={["7.5%", "7.5%", "10%", "10%", "10%", "10%"]}
        rotate={["54", "54", "45.5", "45.5", "45.5", "45.5"]}
      />
      {/* q2 q4 */}
      <ArrowBody
        w={["3em", "3em", "4em", "4em", "4em", "4em"]}
        top={["28%", "28%", "25.5%", "25.5%", "25.5%", "25.5%"]}
        left="24%"
        rotate="0"
      />
      {/* q4 q7 */}
      <ArrowBody
        w={["3em", "3em", "4em", "4em", "4em", "4em"]}
        top={["28%", "28%", "25.5%", "25.5%", "25.5%", "25.5%"]}
        left="37%"
        rotate="0"
      />
      {/* q3 q6 */}
      <ArrowBody
        w={["3em", "3em", "4em", "4em", "4em", "4em"]}
        top={["88%", "88%", "85.5%", "85.5%", "85.5%", "85.5%"]}
        left="24%"
        rotate="0"
      />
      {/* q6 q9 */}
      <ArrowBody
        w={["3em", "3em", "4em", "4em", "4em", "4em"]}
        top={["88%", "88%", "85.5%", "85.5%", "85.5%", "85.5%"]}
        left="37%"
        rotate="0"
      />
      {/* q9 q10 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["60%", "60%", "60%", "60%", "60%", "60%"]}
        left={["46.5%", "46.5%", "49%", "49%", "49%", "49%"]}
        rotate={["126.5", "126.5", "134", "134", "134", "134"]}
      />
      {/* q7 q10 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["40%", "40%", "35%", "35%", "35%", "35%"]}
        left={["46.4%", "46.4%", "46.7%", "46.7%", "46.7%", "46.7%"]}
        rotate={["53.5", "53.5", "45.5", "45.5", "45.5", "45.5"]}
      />
      {/* q5 q8 */}
      <ArrowBody
        w={["3em", "3em", "4em", "4em", "4em", "4em"]}
        top={["58%", "58%", "55.7%", "55.7%", "55.7%", "55.7%"]}
        left="37%"
        rotate="0"
      />
      {/* q8 q10 */}
      <ArrowBody
        w={["3em", "3em", "4em", "4em", "4em", "4em"]}
        top={["58%", "58%", "55.7%", "55.7%", "55.7%", "55.7%"]}
        left="50%"
        rotate="0"
      />
      {/* q10 q11 */}
      <ArrowBody
        w={["3em", "3em", "4em", "4em", "4em", "4em"]}
        top={["58%", "58%", "55.7%", "55.7%", "55.7%", "55.7%"]}
        left="63%"
        rotate="0"
      />
      {/* q11 q12 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["30%", "30%", "30%", "30%", "30%", "30%"]}
        left={["72.5%", "72.5%", "75%", "75%", "75%", "75%"]}
        rotate={["126", "126", "135", "135", "135", "135"]}
      />
      {/* q11 q13 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["71%", "71%", "71%", "71%", "71%", "71%"]}
        left={["73%", "73%", "75.2%", "75.2%", "75.2%", "75.2%"]}
        rotate={["54", "54", "45.5", "45.5", "45.5", "45.5"]}
      />
      {/* q4 q7 */}
      <ArrowBody
        w={["3em", "3em", "4em", "4em", "4em", "4em"]}
        top={["28%", "28%", "25.5%", "25.5%", "25.5%", "25.5%"]}
        left="89%"
        rotate="0"
      />
      {/* q3 q6 */}
      <ArrowBody
        w={["3em", "3em", "4em", "4em", "4em", "4em"]}
        top={["88%", "88%", "85.5%", "85.5%", "85.5%", "85.5%"]}
        left="89%"
        rotate="0"
      />
      {/* q5 T q7 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["30%", "30%", "30%", "30%", "30%", "30%"]}
        left={["33.5%", "33.5%", "36%", "36%", "36%", "36%"]}
        rotate={["126.5", "126.5", "134", "134", "134", "134"]}
      />
      {/* q6 T 
      <ArrowBody
        w={["2em", "2em", "4em", "4em", "4em", "4em"]}
        top={["70%", "70%", "70%", "70%", "70%", "70%"]}
        left={["29.2%", "29.2%", "31.7%", "31.7%", "31.7%", "31.7%"]}
        rotate={["126.5", "126.5", "134", "134", "134", "134"]}
      /> */}
      {/* q6 T q8 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["60%", "60%", "60%", "60%", "60%", "60%"]}
        left={["33.5%", "33.5%", "36%", "36%", "36%", "36%"]}
        rotate={["126.5", "126.5", "134", "134", "134", "134"]}
      />
      {/* q4 T q8 
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["43%", "43%", "35%", "35%", "35%", "35%"]}
        left={["35%", "35%", "33.7%", "33.7%", "33.7%", "33.7%"]}
        rotate={["53.5", "53.5", "45.5", "45.5", "45.5", "45.5"]}
      /> */}
      {/* q4 T q8 */}
      <ArrowBody
        w={["2em", "2em", "4em", "4em", "4em", "4em"]}
        top={["30%", "30%", "30%", "30%", "30%", "30%"]}
        left={["29.2%", "29.2%", "31.5%", "31.5%", "31.5%", "31.5%"]}
        rotate={["53.5", "53.5", "45.5", "45.5", "45.5", "45.5"]}
      />
      {/* q3 q5 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["60%", "60%", "60%", "60%", "60%", "60%"]}
        left={["20.3%", "20.3%", "23%", "23%", "23%", "23%"]}
        rotate={["126", "126", "134", "134", "134", "134"]}
      />
      {/* q2 q5 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "8em"]}
        top={["40%", "40%", "40%", "40%", "40%", "40%"]}
        left={["20.5%", "20.5%", "23%", "23%", "23%", "23%"]}
        rotate={["54", "54", "45.5", "45.5", "45.5", "45.5"]}
      />
      {/* q12 q13 */}
      <ArrowBody
        w={["8em", "8em", "10em", "10em", "10em", "10em"]}
        top={["50%", "50%", "50%", "50%", "50%", "50%"]}
        left={["77%", "77%", "79.5%", "79.5%", "79.5%", "79.5%"]}
        rotate="90"
      />
      {/* q13 q12 */}
      <ArrowBody
        w={["8em", "8em", "10em", "10em", "10em", "10em"]}
        top={["50%", "50%", "50%", "50%", "50%", "50%"]}
        left={["78.9%", "78.9%", "81%", "81%", "81%", "81%"]}
        rotate="90"
      />
      {/* q15 q12 */}
      <ArrowBody
        w={["8em", "8em", "14em", "14em", "14em", "14em"]}
        top={["51%", "51%", "52%", "52%", "52%", "52%"]}
        left={["85%", "85%", "86.9%", "86.9%", "86.9%", "86.9%"]}
        rotate={["75", "75", "70", "70", "70", "70"]}
      />
      {/* q14 q13 */}
      <ArrowBody
        w={["8em", "8em", "14em", "14em", "14em", "14em"]}
        top={["51%", "51%", "48%", "48%", "48%", "48%"]}
        left={["84%", "84%", "86.9%", "86.9%", "86.9%", "86.9%"]}
        rotate={["104.5", "104.5", "110", "110", "110", "110"]}
      />
      {/* q6 q9 */}
      <ArrowBody
        w={["3em", "3em", "5.14em", "5.14em", "5.14em", "5.14em"]}
        top={["91.5%", "91.5%", "91.5%", "91.5%", "91.5%", "91.5%"]}
        left={["21.65%", "21.65%", "23.65%", "23.65%", "23.65%", "23.65%"]}
        rotate={["20.5", "20.5", "20.5", "20.5", "20.5", "20.5"]}
      />
      {/* q9 q6 */}
      <ArrowBody
        w={["2.9em", "2.9em", "5.04em", "5.04em", "5.04em", "5.04em"]}
        top={["77%", "77%", "81.9%", "81.9%", "81.9%", "81.9%"]}
        left={["35.5%", "35.5%", "35.5%", "35.5%", "35.5%", "35.5%"]}
        rotate={["160", "160", "160", "160", "160", "160"]}
      />
      {/* ArrowHead */}
      {/* q1 q2 */}
      <ArrowHead
        top={["26.4%", "26.4%", "26.4%", "26.4%", "26.4%", "26.4%"]}
        left={["15%", "15%", "15%", "15%", "15%", "15%"]}
        rotate={["-48", "-48", "-44", "-44", "-44", "-44"]}
      />
      {/* q1 q3 */}
      <ArrowHead
        top={["74.3%", "74.3%", "74.3%", "74.3%", "74.3%", "74.3%"]}
        left={["14.6%", "14.6%", "14.7%", "14.7%", "14.7%", "14.7%"]}
        rotate={["52", "52", "44", "44", "44", "44"]}
      />
      {/* q2 q5 */}
      <ArrowHead
        top={["43.5%", "43.5%", "43.7%", "43.7%", "43.7%", "43.7%"]}
        left={["27.8%", "27.8%", "27.9%", "27.9%", "27.9%", "27.9%"]}
        rotate={["52", "52", "44", "44", "44", "44"]}
      />
      {/* q3 q5 */}
      <ArrowHead
        top={["56.25%", "56.25%", "56.2%", "56.2%", "56.2%", "56.2%"]}
        left={["27.85%", "27.85%", "27.9%", "27.9%", "27.9%", "27.9%"]}
        rotate={["-48", "-48", "-44", "-44", "-44", "-44"]}
      />
      {/* q5 T */}
      <ArrowHead
        top={["41.2%", "41.2%", "41.1%", "41.1%", "41.1%", "41.1%"]}
        left={["34.4%", "34.4%", "34.45%", "34.45%", "34.45%", "34.45%"]}
        rotate={["-48", "-48", "-44", "-44", "-44", "-44"]}
      />
      {/* q6 T */}
      <ArrowHead
        top={["71.4%", "71.4%", "71.22%", "71.22%", "71.22%", "71.22%"]}
        left={["34.6%", "34.6%", "34.48%", "34.48%", "34.48%", "34.48%"]}
        rotate={["-48", "-48", "-44", "-44", "-44", "-44"]}
      />
      {/* q4 T */}
      <ArrowHead
        top={["28.8%", "28.8%", "29.1%", "29.1%", "29.1%", "29.1%"]}
        left={["34.3%", "34.3%", "34.3%", "34.3%", "34.3%", "34.3%"]}
        rotate={["52", "52", "44", "44", "44", "44"]}
      />
      {/* q7 T */}
      <ArrowHead
        top={["28.8%", "28.8%", "28.9%", "28.9%", "28.9%", "28.9%"]}
        left={["39.7%", "39.7%", "39.6%", "39.6%", "39.6%", "39.6%"]}
        rotate={["136", "136", "138", "138", "138", "138"]}
      />
      {/* q9 q3 */}
      <ArrowHead
        top={["83%", "83%", "83.5%", "83.5%", "83.5%", "83.5%"]}
        left={["21.7%", "21.7%", "20.85%", "20.85%", "20.85%", "20.85%"]}
        rotate={["-155", "-155", "-155", "-155", "-155", "-155"]}
      />
      {/* q8 T */}
      <ArrowHead
        top={["58.7%", "58.7%", "59%", "59%", "59%", "59%"]}
        left={["39.7%", "39.7%", "39.6%", "39.6%", "39.6%", "39.6%"]}
        rotate={["136", "136", "138", "138", "138", "138"]}
      />
      {/* q2 q4 */}
      <ArrowHead
        top={["20.4%", "20.4%", "20.4%", "20.4%", "20.4%", "20.4%"]}
        left={["26%", "26%", "26.7%", "26.7%", "26.7%", "26.7%"]}
        rotate={["0", "0", "0", "0", "0", "0"]}
      />
      {/* q4 q7 */}
      <ArrowHead
        top={["20.4%", "20.4%", "20.4%", "20.4%", "20.4%", "20.4%"]}
        left={["38.9%", "38.9%", "39.8%", "39.8%", "39.8%", "39.8%"]}
        rotate={["0", "0", "0", "0", "0", "0"]}
      />
      {/* q3 q6 */}
      <ArrowHead
        top={["80.4%", "80.4%", "80.4%", "80.4%", "80.4%", "80.4%"]}
        left={["26%", "26%", "26.7%", "26.7%", "26.7%", "26.7%"]}
        rotate={["0", "0", "0", "0", "0", "0"]}
      />
      {/* q5 q8 */}
      <ArrowHead
        top={["50.4%", "50.4%", "50.4%", "50.4%", "50.4%", "50.4%"]}
        left={["38.9%", "38.9%", "39.8%", "39.8%", "39.8%", "39.8%"]}
        rotate={["0", "0", "0", "0", "0", "0"]}
      />
      {/* q6 q9 */}
      <ArrowHead
        top={["80.4%", "80.4%", "80.4%", "80.4%", "80.4%", "20.4%"]}
        left={["38.9%", "38.9%", "39.8%", "39.8%", "39.8%", "39.8%"]}
        rotate={["0", "0", "0", "0", "0", "0"]}
      />
      {/* q8 q10 */}
      <ArrowHead
        top={["50.4%", "50.4%", "50.4%", "50.4%", "50.4%", "50.4%"]}
        left={["52%", "52%", "52.7%", "52.7%", "52.7%", "52.7%"]}
        rotate={["0", "0", "0", "0", "0", "0"]}
      />
      {/* q10 q11 */}
      <ArrowHead
        top={["50.4%", "50.4%", "50.4%", "50.4%", "50.4%", "50.4%"]}
        left={["65%", "65%", "65.8%", "65.8%", "65.8%", "65.8%"]}
        rotate={["0", "0", "0", "0", "0", "0"]}
      />
      {/* q7 q10 */}
      <ArrowHead
        top={["43.5%", "43.5%", "43.7%", "43.7%", "43.7%", "43.7%"]}
        left={["53.8%", "53.8%", "53.8%", "53.8%", "53.8%", "53.8%"]}
        rotate={["52", "52", "44", "44", "44", "44"]}
      />
      {/* q3 q5 */}
      <ArrowHead
        top={["56.3%", "56.3%", "56.2%", "56.2%", "56.2%", "56.2%"]}
        left={["54.1%", "54.1%", "53.9%", "53.9%", "53.9%", "53.9%"]}
        rotate={["-48", "-48", "-44", "-44", "-44", "-44"]}
      />
      {/* q11 q12 */}
      <ArrowHead
        top={["26.4%", "26.4%", "26.4%", "26.4%", "26.4%", "26.4%"]}
        left={["80%", "80%", "80%", "80%", "80%", "80%"]}
        rotate={["-48", "-48", "-44", "-44", "-44", "-44"]}
      />
      {/* q11 q13 */}
      <ArrowHead
        top={["74%", "74%", "74%", "74%", "74%", "74%"]}
        left={["79.8%", "79.8%", "79.8%", "79.8%", "79.8%", "79.8%"]}
        rotate={["52", "52", "44", "44", "44", "44"]}
      />
      {/* q12 q14 */}
      <ArrowHead
        top={["20.4%", "20.4%", "20.4%", "20.4%", "20.4%", "20.4%"]}
        left={["91%", "91%", "91.7%", "91.7%", "91.7%", "91.7%"]}
        rotate={["0", "0", "0", "0", "0", "0"]}
      />
      {/* q13 q15 */}
      <ArrowHead
        top={["80.4%", "80.4%", "80.4%", "80.4%", "80.4%", "80.4%"]}
        left={["91%", "91%", "91.7%", "91.7%", "91.7%", "91.7%"]}
        rotate={["0", "0", "0", "0", "0", "0"]}
      />
      {/* q12 q13 */}
      <ArrowHead
        top={["72.3%", "72.3%", "71.7%", "71.7%", "71.7%", "71.7%"]}
        left={["81.65%", "81.65%", "81.835%", "81.835%", "81.835%", "81.835%"]}
        rotate={["90", "90", "90", "90", "90", "90"]}
      />
      {/* q13 q12 */}
      <ArrowHead
        top={["27.6%", "27.6%", "28.3%", "28.3%", "28.3%", "28.3%"]}
        left={["83.6%", "83.6%", "83.35%", "83.35%", "83.35%", "83.35%"]}
        rotate={["-90", "-90", "-90", "-90", "-90", "-90"]}
      />
      {/* q15 q12 */}
      <ArrowHead
        top={["25.2%", "25.2%", "26%", "26%", "26%", "26%"]}
        left={["85.8%", "85.8%", "85.15%", "85.15%", "85.15%", "85.15%"]}
        rotate={["-110", "-110", "-117", "-117", "-117", "-117"]}
      />
      {/* q14 q13 */}
      <ArrowHead
        top={["73.9%", "73.9%", "74%", "74%", "74%", "72%"]}
        left={["85.3%", "85.3%", "85.1%", "85.1%", "85.1%", "85.1%"]}
        rotate={["110", "110", "117", "117", "117", "117"]}
      />
      {/* LETTERS */}
      {/* q1 q2 */}
      <Text 
        size="label" 
        top="32%" 
        left="10%">
        a
      </Text>
      {/* q1 q3 */}
      <Text 
        size="label" 
        top="67.5%" 
        left="10%">
        b
      </Text>
      {/* q2 q5 */}
      <Text 
        size="label" 
        top="32%" 
        left="25%">
        b
      </Text>
      {/* q4 T */}
      <Text 
        size="label" 
        top={["29%", "29%", "29%", "29%", "29%", "29%"]} 
        left={["31.5%", "31.5%", "32.8%", "32.8%", "32.8%", "32.8%"]}>
        a
      </Text>
      {/* q7 T */}
      <Text 
        size="label" 
        top="29%" 
        left={["42.5%", "42.5%", "41.5%", "41.5%", "41.5%", "41.5%"]}>
        b
      </Text>
      {/* T */}
      <Text 
        size="label" 
        top="35%" 
        left="44.8%">
        a,b
      </Text>
      {/* q5 T */}
      <Text 
        size="label" 
        top="40.6%" 
        left="32.8%">
        b
      </Text>
      {/* q3 q5 */}
      <Text 
        size="label" 
        top="67.5%" 
        left="25%">
        b
      </Text>
      {/* q2 q4 */}
      <Text 
        size="label" 
        top="17%" 
        left="23.5%">
        a
      </Text>
      {/* q4 q7 */}
      <Text 
        size="label"
        top="17%" 
        left="36.5%">
        b
      </Text>
      {/* q3 q6 */}
      <Text 
        size="label" 
        top="77%" 
        left="23.5%">
        a
      </Text>
      {/* q5 q8 */}
      <Text 
        size="label" 
        top="47.5%" 
        left="36.5%">
        a
      </Text>
      {/* q8 T */}
      <Text 
        size="label" 
        top="58%" 
        left="41.5%">
        a
      </Text>
      {/* q6 T */}
      <Text 
        size="label" 
        top="70.5%" 
        left="32.8%">
        a
      </Text>
      {/* T */}
      <Text 
        size="label" 
        top="65%" 
        left="44.8%">
        a,b
      </Text>
      {/* q6 q9 */}
      <Text 
        size="label" 
        top="77%" 
        left="36.5%">
        b
      </Text>
      {/* q9 q3 */}
      <Text 
        size="label" 
        top={["92%", "92%", "94.5%", "94.5%", "94.5%", "94.5%"]} 
        left="30.5%">
        b
      </Text>
      {/* q7 q10 */}
      <Text 
        size="label" 
        top="31.5%" 
        left="50.5%">
        a
      </Text>
      {/* q9 q10 */}
      <Text 
        size="label" 
        top="67.5%" 
        left="50.5%">
        a
      </Text>
      {/* q8 q10 */}
      <Text 
        size="label" 
        top="47.5%" 
        left="49.5%">
        b
      </Text>
      {/* q10 q11 */}
      <Text 
        size="label" 
        top="47.5%" 
        left="62.9%">
        a,b
      </Text>
      {/* q11 q12 */}
      <Text 
        size="label" 
        top="32%" 
        left="75%">
        a
      </Text>
      {/* q11 q13 */}
      <Text 
        size="label" 
        top="67.5%" 
        left="75%">
        b
      </Text>
      {/* q12 q13 */}
      <Text 
        size="label" 
        top="47.5%" 
        left="80.5%">
        b
      </Text>
      {/* q13 q12 */}
      <Text 
        size="label" 
        top="47.5%" 
        left="84.7%">
        a
      </Text>
      {/* q12 q14 */}
      <Text 
        size="label" 
        top="17%" 
        left="88.5%">
        a
      </Text>
      {/* q13 q15 */}
      <Text 
        size="label" 
        top="77%" 
        left="88.5%">
        b
      </Text>
      {/* q14 q13 */}
      <Text 
        size="label" 
        top="40%" 
        left="92.2%">
        b
      </Text>
      {/* q14 q14 */}
      <Text 
        size="label" 
        top="20%" 
        left="102.2%">
        a
      </Text>
      {/* q15 q15 */}
      <Text 
        size="label" 
        top="80%" 
        left="102.2%">
        b
      </Text>
      {/* q15 q12 */}
      <Text 
        size="label" 
        top="60%" 
        left="92.2%">
        a
      </Text>
      <Atom
        variant="q1"
        variants={variants}
        initial="initial"
        animate={currentNode == 1 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        –
      </Atom>
      <Atom
        variant="q2"
        variants={variants}
        initial="initial"
        animate={currentNode == 2 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q2
      </Atom>
      <Atom
        variant="q3"
        variants={variants}
        initial="initial"
        animate={currentNode == 3 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q3
      </Atom>
      <Atom
        variant="q4"
        variants={variants}
        initial="initial"
        animate={currentNode == 4 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q4
      </Atom>
      <Atom
        variant="q5"
        variants={variants}
        initial="initial"
        animate={currentNode == 5 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q5
      </Atom>
      <Atom
        variant="q6"
        variants={variants}
        initial="initial"
        animate={currentNode == 6 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q6
      </Atom>
      <Atom
        variant="q7"
        variants={variants}
        initial="initial"
        animate={currentNode == 7 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q7
      </Atom>
      <Atom
        variant="q8"
        variants={variants}
        initial="initial"
        animate={currentNode == 8 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q8
      </Atom>
      <Atom
        variant="q9"
        variants={variants}
        initial="initial"
        animate={currentNode == 9 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q9
      </Atom>
      <Atom
        variant="q10"
        variants={variants}
        initial="initial"
        animate={currentNode == 10 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q10
      </Atom>
      <Atom
        variant="q11"
        variants={variants}
        initial="initial"
        animate={currentNode == 11 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q11
      </Atom>
      <Atom
        variant="q12"
        variants={variants}
        initial="initial"
        animate={currentNode == 12 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q12
      </Atom>
      <Atom
        variant="q13"
        variants={variants}
        initial="initial"
        animate={currentNode == 13 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        q13
      </Atom>
      <Atom
        variant="q14"
        variants={variants}
        initial="initial"
        animate={currentNode == 14 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        +
      </Atom>
      <Atom
        variant="q15"
        variants={variants}
        initial="initial"
        animate={currentNode == 15 ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        +
      </Atom>
      <Atom
        variant="q16"
        variants={variants}
        initial="initial"
        animate={currentNode == "T" ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        T
      </Atom>
      <Atom
        variant="q17"
        variants={variants}
        initial="initial"
        animate={currentNode == "T" ? "pulse" : ""}
        whileHover={!simulating && "scale"}
      >
        T
      </Atom>

    </>
  );
};

export default FirstDFA;