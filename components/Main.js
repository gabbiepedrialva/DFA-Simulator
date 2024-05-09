import { Flex, useToast, Divider } from "@chakra-ui/react";
import { useState } from "react";

import { DFA, problem1, problem2, language1, language2 } from "./DFA/Logic";
import LeftBox from "./components/LeftBox";
import RightBox from "./components/RightBox";

const Main = () => {
  const regex1 = "(bab)*(b+a)(bab+aba)(a+b)*(aa+bb)*(b+a+bb)(a+b)*(aa+bb)";
  const regex2 = "(1+0)*(11+00)(00+11)*(1+0+11)(1+0+11)*(101+111)(101+111)*(1+0*+11)(1+0*+11)*";

  const [string, setString] = useState("");
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  const [prob2, setProb2] = useState(false);
  const [currentNode, setCurrentNode] = useState(0);
  const [simulating, setSimulating] = useState(false);

  const validString = useToast();
  const trapString = useToast();
  const shortString = useToast();
  const notInLanguageString = useToast();
  const closeToasts = useToast();

  let input = string;
  let results = "";

  const handleTextChange = (e) => {
    const stringValue = e.target.value;
    setString(stringValue);
    const countValue = e.target.value.length;
    setCount(countValue);
  };
  const handleReset = () => {
    setString("");
    setCount(0);
    setData("");
    closeAll();
  };
  const handleSwitch = () => {
    setProb2((prev) => !prev);
    setData("");
    closeAll();
  };

  const closeAll = () => {
    closeToasts.closeAll();
  };
  const validToast = () => {
    validString({
      title: "Valid String!",
      status: "success",
      isClosable: true,
    });
  };
  const trapToast = () => {
    trapString({
      title: "Invalid: Trapped",
      status: "error",
      isClosable: true,
    });
  };
  const shortToast = () => {
    shortString({
      title: "Invalid: Too Short",
      status: "error",
      isClosable: true,
    });
  };
  const notInLanguageToast = () => {
    notInLanguageString({
      title: "Empty/Invalid Input",
      status: "warning",
      isClosable: true,
    });
  };

  const handleValid = () => {
    // console.log("DONE OK");
    setSimulating(false);
    validToast();
    setData(results);
  };
  const handleTrapped = () => {
    // console.log("DONE TRAPPED");
    setSimulating(false);
    trapToast();
    setData(results);
  };
  const handleShort = () => {
    // console.log("DONE SHORT");
    setSimulating(false);
    shortToast();
    setData(results);
  };

  const handleInputString = () => {
    input = input.replace(/\s+/g, "").toLowerCase();
  };

  const handleTest = (e) => {
    e.preventDefault();
    handleInputString();

    if (!prob2) {
      if (input == "") {
        notInLanguageToast();
        // console.log("No valid configuration for input string/empty");
      } else if (input.includes("a") || input.includes("b")) {
        // console.log("PROB1");
        results = new DFA(input, problem1, language1);
        // console.log(results);
        setData(results);
      } else {
        notInLanguageToast();
        // console.log("No valid configuration for input string!!");
      }
    } else {
      if (input == "") {
        notInLanguageToast();
        // console.log("No valid configuration for input string/empty");
      } else if (input.includes("0") || input.includes("1")) {
        // console.log("PROB2");
        results = new DFA(input, problem2, language2);
        // console.log(results);
        setData(results);
      } else {
        notInLanguageToast();
        // console.log("No valid configuration for input string!!");
      }
    }
  };

  const handleSimulation = (e) => {
    e.preventDefault();
    handleInputString();

    if (!prob2) {
      if (input == "") {
        notInLanguageToast();
        // console.log("No valid configuration for input string/empty");
      } else if (input.includes("a") || input.includes("b")) {
        setSimulating(true);
        // console.log("PROB1");
        results = new DFA(input, problem1, language1);
        // console.log(results);
        const pathWithZeroes = [0].concat(...results.path.map((e) => [e, 0]));
        // console.log(pathWithZeroes);
        pathWithZeroes.some((node, i) => {
          setTimeout(() => {
            setCurrentNode(node);
            node == pathWithZeroes[pathWithZeroes.length - 2] &&
            !pathWithZeroes.includes("T") &&
            !pathWithZeroes.includes("eos")
              ? handleValid()
              : node == "T" && pathWithZeroes.slice(-4)[0] == "T"
              ? handleTrapped()
              : pathWithZeroes.slice(-4)[3 - 1] == node &&
                !pathWithZeroes.includes("T") &&
                handleShort();
          }, i * 200);
        });
      } else {
        notInLanguageToast();
        // console.log("No valid configuration for input string!!");
      }
    } else {
      if (input == "") {
        notInLanguageToast();
        // console.log("No valid configuration for input string/empty");
      } else if (input.includes("0") || input.includes("1")) {
        setSimulating(true);
        // console.log("PROB2");
        results = new DFA(input, problem2, language2);
        // console.log(results);
        const pathWithZeroes = [0].concat(...results.path.map((e) => [e, 0]));
        // console.log(pathWithZeroes);
        pathWithZeroes.some((node, i) => {
          setTimeout(() => {
            setCurrentNode(node);
            node == pathWithZeroes[pathWithZeroes.length - 2] &&
            !pathWithZeroes.includes("eos")
              ? handleValid()
              : pathWithZeroes.slice(-4)[3 - 1] == node && handleShort();
          }, i * 200);
        });
      } else {
        notInLanguageToast();
        // console.log("No valid configuration for input string!!");
      }
    }
  };

  return (
    <Flex
      direction={["column", "column", "column", "column", "column", "row"]}
      align="center"
    >
      <LeftBox
        handleTest={handleTest}
        data={data}
        prob2={prob2}
        string={string}
        handleTextChange={handleTextChange}
        simulating={simulating}
        handleSimulation={handleSimulation}
        handleReset={handleReset}
        count={count}
        regex1={regex1}
        regex2={regex2}
      />
      <Divider
        display={["block", null, "block", null, null, "none"]}
        mt="6"
        mb="2"
      />
      <RightBox
        prob2={prob2}
        simulating={simulating}
        regex1={regex1}
        regex2={regex2}
        currentNode={currentNode}
        handleSwitch={handleSwitch}
      />
    </Flex>
  );
};

export default Main;
