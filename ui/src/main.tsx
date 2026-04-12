import { ChakraProvider } from "@chakra-ui/react";
import type { FC } from "react";
import { GanttPage } from "src/pages/GanttPage";
import { localSystem } from "./theme";

const PluginComponent: FC = () => {
  const system = globalThis.ChakraUISystem ?? localSystem;

  return (
    <ChakraProvider value={system}>
      <GanttPage />
    </ChakraProvider>
  );
};

export default PluginComponent;
