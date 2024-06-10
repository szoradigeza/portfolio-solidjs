import {
  createContext,
  createEffect,
  createSignal,
  useContext,
} from "solid-js";

import { createStore } from "solid-js/store";
import navigationElements from "../constants/navigationElements";

export const NavigationContext = createContext();

export function NavigationProvider(props) {
  const [state, setState] = createStore({ idxActiveNav: 0 });
  const activeNav = [
    state,
    (idxActiveNav) => setState({ idxActiveNav }),
    navigationElements[state.idxActiveNav],
  ];

  return (
    <NavigationContext.Provider value={activeNav}>
      {props.children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext<any>(NavigationContext);
}
