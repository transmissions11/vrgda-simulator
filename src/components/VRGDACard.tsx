import { Flex, Badge, Box, Text, Image, Code } from "@chakra-ui/react";

import { AiOutlineDollarCircle } from "react-icons/ai";
import { VRGDA } from "../App";

function VRGDACard({
  vrgda,
  price,
  ...others
}: {
  vrgda: VRGDA;
  price: number;
  [key: string]: any;
}) {
  return (
    <Box
      p={5}
      width="320px"
      height="100%"
      borderRadius={6}
      borderWidth="1px"
      {...others}
    >
      <Image
        borderRadius="md"
        src={`https://loremflickr.com/640/480/transport?player=${vrgda.name}`}
      />
      <Flex align="baseline" mt={2}>
        <Badge colorScheme="red">Item</Badge>
        <Text
          ml={2}
          textTransform="uppercase"
          fontSize="red"
          fontWeight="bold"
          color="red.800"
        >
          {vrgda.name}
        </Text>
      </Flex>

      <Flex mt={2} align="center">
        <Code colorScheme="red">${price.toFixed(2)}</Code>
      </Flex>
    </Box>
  );
}

export default VRGDACard;
