import {
  Flex,
  Input,
  Button,
  Text,
  Heading,
  Box,
  Divider,
  Tag,
  Code,
} from "@chakra-ui/react";

import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const LeftBox = ({
  handleTest,
  data,
  prob2,
  string,
  handleReset,
  handleTextChange,
  handleSimulation,
  simulating,
  count,
  regex1,
  regex2,
}) => {
  return (
    <>
      <Box
        w={["20em", "20em", "40em", "40em", "40em", "30em"]}
        mr={[0, 0, 0, 0, 0, 24]}
        mt={[14, 14, 16, 16, 16, 0]}
      >
        <Flex align="flex-end" justify="space-between">
          <Heading variant="title">DFA Simulator</Heading>
          <Code fontSize={["0.5em", null, "0.6em", null, null, "0.6em"]}>
            BETA
          </Code>
        </Flex>

        <Divider mb="6" />

        <Box>
          <form onSubmit={handleTest}>
            <Flex align="center">
              <Heading>Input String:</Heading>
              <Flex align="center">
                {data && (
                  <Button
                    variant="data"
                    rightIcon={
                      data.result == "Valid" ? (
                        <Box color="teal.300">
                          <FaCheck />
                        </Box>
                      ) : (
                        data.result == "Invalid" && (
                          <Box color="pink.300">
                            <ImCross />
                          </Box>
                        )
                      )
                    }
                  >
                    {data.result}
                  </Button>
                )}
              </Flex>
            </Flex>
            <Input
              maxLength="500"
              fontSize={["0.7em", "0.7em", "0.9em"]}
              my={3}
              placeholder={!prob2 ? "e.g. ababaabb" : "e.g. 000101"}
              value={string}
              onChange={handleTextChange}
            />
            <Flex justify="space-between" align="center">
              <Flex>
                <Button type="submit" disabled={simulating}>
                  Validate
                </Button>
                <Button
                  isLoading={simulating}
                  loadingText="simulating..."
                  spinnerPlacement="start"
                  onClick={handleSimulation}
                  ml={2}
                  disabled={simulating}
                >
                  Simulate
                </Button>
                <Button
                  variant="clear"
                  onClick={handleReset}
                  disabled={simulating}
                >
                  Clear
                </Button>
              </Flex>
              <Text
                fontWeight="semibold"
                fontSize={["0.7em", "0.7em", "0.9em"]}
              >
                Limit: {count}/500
              </Text>
            </Flex>
            <Divider my="6" />
            {/* DIVIDER OF LEFT CONTAINER */}
            <Flex
              align="center"
              direction={["column", "column", "row", "row", "row", "none"]}
              display={["flex", "flex", "flex", "flex", "flex", "none"]}
              // justify="space-between"
            >
              <Heading>Regular Expression:</Heading>
              <Tag my={1} fontSize={["0.7em", "0.7em", "0.9em"]}>
                {!prob2 ? regex1 : regex2}
              </Tag>
            </Flex>
            <Flex
              my={2}
              direction={["column", "column", "row", "row", "row", "none"]}
              display={["flex", "flex", "flex", "flex", "flex", "none"]}
              align="center"
            >
              <Heading>Language Accepted:</Heading>
              <Tag my={1} fontSize={["0.7em", "0.7em", "0.9em"]}>
                {!prob2 ? "[a, b]" : "[0, 1]"}
              </Tag>
            </Flex>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default LeftBox;
