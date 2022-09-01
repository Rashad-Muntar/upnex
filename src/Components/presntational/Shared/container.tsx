import React, { PropsWithChildren } from "react";
import { Box, Flex } from "@chakra-ui/react";

function Container({ children }: PropsWithChildren) {
  return (
    <Box w="100%" maxWidth="1300px">
      {children}
    </Box>
  );
}

export default Container;
