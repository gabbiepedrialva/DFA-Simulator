import {
  Box,
  VStack,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const CFG = ({ prob2 }) => {
  return (
    <>
      <Popover isLazy placement="top">
        <PopoverTrigger>
          <Button mx="2">Show CFG</Button>
        </PopoverTrigger>
        <PopoverContent
          maxW={["17em", null, "16em", null, null, "16em"]}
          _focus=""
          bg="gray.50"
          fontSize={["0.7em", "0.7em", "0.9em"]}
        >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader fontWeight="semibold">
            Context-free Grammar
          </PopoverHeader>
          <PopoverBody align="center">
            {!prob2 ? (
              <VStack>
                <Text>{"S	→ ROYGBIGV"}</Text>
                <Text>{"R	→ babR | Λ"}</Text>
                <Text>{"O	→ a | b"}</Text>
                <Text>{"Y	→ aba | bab"}</Text>
                <Text>{"G	→ OG | Λ"}</Text>
                <Text>{"B	→ VB | Λ"}</Text>
                <Text>{"I	→ O | bb"}</Text>
                <Text>{"V	→ aa | bb"}</Text>
              </VStack>
            ) : (
              <VStack>
                <Text>{"S	→ ROYGRBR"}</Text>
                <Text>{"R	→ 0R | 1R | Λ"}</Text>
                <Text>{"O	→ 00 | 11"}</Text>
                <Text>{"Y	→ OY | Λ"}</Text>
                <Text>{"G	→ 0 | 1 | 11"}</Text>
                <Text>{"B	→ 101 | 111"}</Text>
              </VStack>
            )}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default CFG;
