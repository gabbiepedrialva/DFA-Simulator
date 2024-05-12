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
  const invalidString = useToast();
  const trapString = useToast();
  const shortString = useToast();
  const notInLanguageString = useToast();
  const emptyString = useToast();
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

  const emptyToast = () => {
    emptyString({
      title: "Empty Input",
      status: "warning",
      isClosable: true,
    });
  };

  const notInLanguageToast = () => {
    notInLanguageString({
      title: "Invalid Input",
      status: "warning",
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

  const invalidToast = () => {
    invalidString({
      title: "Invalid String",
      status: "error",
      isClosable: true,
    });
  };

  const validToast = () => {
    validString({
      title: "Valid String!",
      status: "success",
      isClosable: true,
    });
  };

  const handleTrapped = () => {
    setSimulating(false);
    trapToast();
    setData(results);
  };

  const handleShort = () => {
    setSimulating(false);
    shortToast();
    setData(results);
  };

  const handleInvalid = () => {
    setSimulating(false);
    invalidToast();
    setData(results);
  };

  const handleValid = () => {
    setSimulating(false);
    validToast();
    setData(results);
  };

  const handleInputString = () => {
    input = input.replace(/\s+/g, "").toLowerCase();
  };


  const handleTest = (e) => {
    e.preventDefault();
    handleInputString();
  
    if (!prob2) {
      if (input === "") {
        emptyToast();
      } else if (!input.match(/^[ab]+$/)) {
        notInLanguageToast();
      } else {
        results = new DFA(input, problem1, language1);
        setData(results);
      } 
    } else {
      if (input === "") {
        emptyToast();
      } else if (!input.match(/^[01]+$/)) {
        notInLanguageToast();
      } else {
        results = new DFA(input, problem2, language2);
        setData(results);
      }
    }
  };
  
  
  const handleSimulation = (e) => {
    e.preventDefault();
    handleInputString();
  
    if (!prob2) {
      if (input === "") {
        emptyToast();
      } else if (!input.match(/^[ab]+$/)) {
        notInLanguageToast();
      } else {
        setSimulating(true);
        results = new DFA(input, problem1, language1);
        const pathWithZeroes = [0].concat(...results.path.map((e) => [e, 0]));
        let messageDisplayed = false;
        pathWithZeroes.some((node, i) => {
          setTimeout(() => {
            setCurrentNode(node);
            if ((node === "T1" || node === "T2") && !messageDisplayed) {
              handleTrapped();
              messageDisplayed = true;
            } else if (i === pathWithZeroes.length - 2 && !messageDisplayed) {
                if (input.length < 7) {
                    handleShort();
                    messageDisplayed = true;
                } else if (node === 14 || node === 15) {
                    handleValid();
                    messageDisplayed = true;
                } else {
                    handleInvalid();
                    messageDisplayed = true;
                }
              }
          }, i * 200);
        });
      }
    } else {
      if (input === "") {
        emptyToast();
      } else if (!input.match(/^[01]+$/)) {
        notInLanguageToast();
      } else {
        setSimulating(true);
        results = new DFA(input, problem2, language2);
        const pathWithZeroes = [0].concat(...results.path.map((e) => [e, 0]));
        let messageDisplayed = false;
        pathWithZeroes.some((node, i) => {
          setTimeout(() => {
              setCurrentNode(node);
              if ((node === "T1" || node === "T2") && !messageDisplayed) {
                  handleTrapped();
                  messageDisplayed = true;
              } else if (node === 9 && !messageDisplayed) {
                  handleValid();
                  messageDisplayed = true;
              } else if (i === pathWithZeroes.length - 2 && !messageDisplayed) {
                  if (input.length < 6) {
                      handleShort();
                      messageDisplayed = true;
                  } else if (node === 9) {
                      handleValid();
                      messageDisplayed = true;
                      return true;
                  } else {
                      handleInvalid();
                      messageDisplayed = true;
                  }
              }
          }, i * 200);
      });
      
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
