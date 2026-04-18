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

// Airflow 3.x react_apps 로더는 ESM dynamic import 후 globalThis.AirflowPlugin 을 조회한다.
globalThis.AirflowPlugin = PluginComponent;

export default PluginComponent;
