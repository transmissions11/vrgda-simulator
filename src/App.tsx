import { Container, Divider, HStack, Image, Text } from "@chakra-ui/react";
import { Column, Row } from "./utils/chakraUtils";

function App() {
  return (
    <Column
      mainAxisAlignment="flex-start"
      crossAxisAlignment="flex-start"
      height="100vh"
      p={5}
    >
      <Row
        height="40%"
        mainAxisAlignment="flex-start"
        crossAxisAlignment="flex-start"
        p={5}
      >
        hi
      </Row>
      <Divider />
      <Row
        height="40%"
        mainAxisAlignment="flex-start"
        crossAxisAlignment="flex-start"
        p={5}
      >
        hi
      </Row>
    </Column>
  );
}

export default App;
