import { Button, Image, Link, Text } from "@chakra-ui/react";
import { Column } from "./utils/chakraUtils";

function Home() {
  return (
    <Column
      mainAxisAlignment="flex-start"
      crossAxisAlignment="center"
      height="100vh"
      py="10%"
      backgroundColor="#f7f4f0"
    >
      <Image width="350px" src="https://www.paradigm.xyz/logo.svg" />
      <Text mt={6} textAlign="center" fontSize="large" width="450px">
        beep boop
      </Text>
    </Column>
  );
}

export default Home;
