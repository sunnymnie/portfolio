import { Box, useColorModeValue } from "@chakra-ui/react";

const Intro = ({ children }) => {
  return (
    <Box
      borderRadius="lg"
      bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      mt={6}
      mb={6}
      p={3}
      textAlign="center"
    >
      {children}
    </Box>
  );
};

export default Intro;
