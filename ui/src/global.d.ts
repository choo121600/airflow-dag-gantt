import type { SystemContext } from "@chakra-ui/react";
import type { ComponentType } from "react";

declare global {
  var ChakraUISystem: SystemContext | undefined;
  var AirflowPlugin: ComponentType | undefined;
}
