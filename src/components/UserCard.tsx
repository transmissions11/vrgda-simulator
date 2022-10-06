import { Flex, Badge, Box, Text, Image, Code } from "@chakra-ui/react";

import { AiOutlineDollarCircle } from "react-icons/ai";
import { Player } from "../App";

function UserCard({
  player,
  ...others
}: {
  player: Player;
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
        src={`https://thispersondoesnotexist.com/image?player=${player.name}`}
      />
      <Flex align="baseline" mt={2}>
        <Badge colorScheme="green">User</Badge>
        <Text
          ml={2}
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="bold"
          color="green.800"
        >
          {player.name}
        </Text>
      </Flex>

      <Flex mt={2} align="center">
        <Box as={AiOutlineDollarCircle} color="green.400" />
        <Text ml={1} fontSize="sm">
          <b>${player.balance}</b>
        </Text>
      </Flex>

      {Object.keys(player.numOwned).map((vrgdaName) => (
        <Text mt={3}>
          <b>{vrgdaName}</b>
          {": "}
          <Code colorScheme="green">{player.numOwned[vrgdaName]}</Code>
        </Text>
      ))}
    </Box>
  );
}

export default UserCard;
