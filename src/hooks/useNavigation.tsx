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
  const [activeIdx, setActiveIdx] = createSignal(null);

  return (
    <NavigationContext.Provider value={[activeIdx, setActiveIdx]}>
      {props.children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext<any>(NavigationContext);
}
