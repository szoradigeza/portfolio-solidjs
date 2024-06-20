/* @refresh reload */
import "./index.css";

import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import App from "./app";
import { NavigationProvider } from "./hooks/useNavigation";
import "tailwindcss/tailwind.css";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <Router base={"/portfolio-solidjs"}>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </Router>
  ),
  root,
);
