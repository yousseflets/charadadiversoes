import React from "react";
import { Button, Box, Heading } from "@chakra-ui/react";

function App() {
  return (
    <Box p={5} maxW="320px" borderWidth={1}>
      <Heading mb={4}>Welcome to Chakra UI</Heading>
      <Button colorScheme="teal">Click Me</Button>
    </Box>
  );
}

export default App;
