import { lazy } from "solid-js";
import type { RouteDefinition } from "@solidjs/router";

import Home from "./pages/projects";
import navigationElements from "./constants/navigationElements";

export const routes: RouteDefinition[] = navigationElements.map((element) => ({
  path: element.path,
  component: element.component,
}));
