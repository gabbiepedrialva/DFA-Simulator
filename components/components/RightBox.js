import { Flex, Button, Heading, Tag } from "@chakra-ui/react";

import { CgChevronRight } from "react-icons/cg";

import FirstDFA from "../DFA/FirstDFA";
import SecondDFA from "../DFA/SecondDFA";
import CFG from "./CFG";

const RightBox = ({
  prob2,
  simulating,
  regex1,
  regex2,
  currentNode,
  handleSwitch,
}) => {
  return (
    <>
      <Flex
        direction="column"
        mb={[14, 14, 16, 16, 16, 0]}
        w={["20em", null, "40em", null, null, "60em"]}
      >
        <Flex
          h={["12em", null, "18em", null, null, "18em"]}
          pos="relative"
          borderBottom="solid 1px"
          borderColor="gray.200"
        >
          {!prob2 ? (
            <FirstDFA currentNode={currentNode} simulating={simulating} />
          ) : (
            <SecondDFA
              currentNodeVal={currentNode}
              simulatingStatus={simulating}
            />
          )}
        </Flex>
        <Flex
          align="center"
          my="3"
          direction="row"
          justify={["flex-end", null, "flex-end", null, null, "space-between"]}
        >
          <Heading display={["none", null, "none", null, null, "flex"]}>
            Regular Expression: <Tag as="span">{!prob2 ? regex1 : regex2}</Tag>
          </Heading>
          <Flex>
            <CFG prob2={prob2} />
            <Button
              disabled={simulating}
              onClick={handleSwitch}
              rightIcon={<CgChevronRight />}
            >
              Switch RegEx
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default RightBox;
