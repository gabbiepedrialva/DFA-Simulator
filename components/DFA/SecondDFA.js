import { Badge, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ArrowHead, ArrowLoop, ArrowBody, ArrowLoopLg, ArrowLoopSm } from "../components/Arrows";

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
      
      {/* qN qN */}
      <Text 
        size="label" 
        top="25%" 
        left="15%">
        0
      </Text>
      {/* qN qN */}
      <Text 
        size="label" 
        top="75%" 
        left="15%">
        1
      </Text>
      {/* qN qN */}
      <Text 
        size="label" 
        top="49.5%" 
        left="97%">
        0,1
      </Text>


      {/* ARROW BODY */}

      {/* qN qN */}
      <ArrowBody
        w={["15em", "15em", "31em", null, null, "47em"]}
        top={["58%", "58%", "55%", "55%", "55%", "55%"]}
        left="50%"
      />
      {/* qN qN */}
      <ArrowBody
        w={["8em", "8em", "11em", null, null, "11em"]}
        top={["56%", "56%", "52%", null, null, "55%"]}
        left={["65.5%", "65.5%", "67.5%", null, null, "68.5%"]}
        rotate="90"
      />
      {/* qN qN */}
      <ArrowBody
        w={["4em", "4em", "4em", null, null, "3em"]}
        top={["65%", "65%", "65%", null, null, "67%"]}
        left={["45.5%", "45.5%", "48%", null, null, "48.5%"]}
        rotate="90"
      />
      {/* qN qN */}
      <ArrowBody
        w={["5em", null, "8em", null, null, "13em"]}
        top={["71%", null, "71%", null, null, "71%"]}
        left={["36%", null, "38%", null, null, "38%"]}
        rotate={["46", null, "38", null, null, "27"]}
      />
      {/* qN qN */}
      <ArrowBody
        w={["5em", null, "8em", null, null, "13em"]}
        top={["71%", null, "71%", null, null, "71%"]}
        left={["56%", null, "58%", null, null, "58%"]}
        rotate={["46", null, "38", null, null, "27"]}
      />
      {/* qN qN */}
      <ArrowBody
        w={["5em", null, "8em", null, null, "12em"]}
        top={["29%", null, "30%", null, null, "29%"]}
        left={["56%", null, "58%", null, null, "58%"]}
        rotate={["133", null, "141", null, null, "152"]}
      />
      {/* qN qN */}
      <ArrowBody
        w={["5em", null, "8em", null, null, "12em"]}
        top={["27%", null, "29%", null, null, "29%"]}
        left={["84%", null, "82%", null, null, "82%"]}
        rotate={["227", null, "220", null, null, "208"]}
      />
      {/* qN qN */}
      <ArrowBody
        w={["3em", null, "5em", null, null, "9em"]}
        top={["93%", null, "90%", null, null, "91%"]}
        left="60%"
      />
      {/* qN qN */}
      <ArrowBody
        w={["5em", null, "8em", null, null, "12em"]}
        top={["65%", null, "65%", null, null, "65%"]}
        left={["75%", null, "77.5%", null, null, "79%"]}
        rotate={["133", null, "141", null, null, "152"]}
      />


      {/* ARROW HEADS */}

      {/* qN qN */}
      <ArrowHead
        top={["50%", null, "49.7%", null, null, "49.7%"]}
        left={["84.3%", null, "85.3%", null, null, "86.6%"]}
      />
      {/* qN qN */}
      <ArrowHead
        top={["50%", null, "49.7%", null, null, "49.7%"]}
        left={["64.2%", null, "65.3%", null, null, "66.6%"]}
      />
      {/* qN qN */}
      <ArrowHead
        top={["50%", null, "49.7%", null, null, "49.7%"]}
        left={["44.3%", null, "45.3%", null, null, "46.6%"]}
      />
      {/* qN qN */}
      <ArrowHead
        top={["50%", null, "49.7%", null, null, "49.7%"]}
        left={["24.3%", null, "25.3%", null, null, "26.6%"]}
      />
      {/* qN qN */}
      <ArrowHead
        top={["60%", null, "61%", null, null, "61.5%"]}
        left={["50.3%", null, "50.4%", null, null, "50.1%"]}
        rotate="-90"
      />
      {/* qN qN */}
      <ArrowHead
        top={["77.5%", null, "79%", null, null, "80.6%"]}
        left={["46.3%", null, "46.3%", null, null, "46.8%"]}
        rotate={["46", null, "38", null, null, "27"]}
      />
      {/* qN qN */}
      <ArrowHead
        top={["22.7%", null, "21.7%", null, null, "19.3%"]}
        left={["65.9%", null, "66.4%", null, null, "66.8%"]}
        rotate={["315", null, "324", null, null, "330"]}
      />
      {/* qN qN */}
      <ArrowHead
        top={["56.9%", null, "56.8%", null, null, "56.5%"]}
        left={["54.4%", null, "53.6%", null, null, "53%"]}
        rotate={["226", null, "218", null, null, "215"]}
      />
      {/* qN qN */}
      <ArrowHead
        top={["85.4%", null, "84.7%", null, null, "85.8%"]}
        left={["64.2%", null, "65.3%", null, null, "66.6%"]}
      />
      {/* qN qN */}
      <ArrowHead
        top={["75%", null, "74.7%", null, null, "73.6%"]}
        left={["70.2%", null, "69.9%", null, null, "70.1%"]}
        rotate="90"
      />
      {/* qN qN */}
      <ArrowHead
        top={["40.1%", null, "39.8%", null, null, "38.6%"]}
        left={["70.2%", null, "69.9%", null, null, "70.1%"]}
        rotate="90"
      />
      {/* qN qN */}
      <ArrowHead
        top={["57.2%", null, "56.5%", null, null, "56.6%"]}
        left={["85.7%", null, "86.2%", null, null, "87.1%"]}
        rotate={["315", null, "321", null, null, "330"]}
      />
      {/* qN qN */}
      <ArrowHead
        top={["42.4%", null, "44%", null, null, "44%"]}
        left={["86%", null, "86.2%", null, null, "87.1%"]}
        rotate={["40", null, "40", null, null, "30"]}
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
        q1
      </Atom>
      <Atom
        variant="2"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 2 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q2
      </Atom>
      <Atom
        variant="3"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 3 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q3
      </Atom>
      <Atom
        variant="4"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 4 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q4
      </Atom>
      <Atom
        variant="5"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 5 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q5
      </Atom>
      <Atom
        variant="6"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 6 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q6
      </Atom>
      <Atom
        variant="7"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 7 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q7
      </Atom>
      <Atom
        variant="8"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 8 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q8
      </Atom>
      <Atom
        variant="9"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 9 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        q9
      </Atom>
    </>
  );
};

export default SecondDFA;
