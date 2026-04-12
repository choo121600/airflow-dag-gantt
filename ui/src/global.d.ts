import type { SystemContext } from "@chakra-ui/react";

declare global {
  var ChakraUISystem: SystemContext | undefined;
}
