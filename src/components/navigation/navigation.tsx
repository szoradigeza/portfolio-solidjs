import navigate, { Link } from "@solidjs/router";

import { createEffect } from "solid-js";
import navigationElements from "../../constants/navigationElements";
import { useNavigation } from "../../hooks/useNavigation";
export default function Navigation() {
  const [state, setIdxActiveNav] = useNavigation();

  createEffect(() => {
    const idxActiveNav = navigationElements.findIndex((element) => {
      return element.path === location.pathname;
    });
    setIdxActiveNav(idxActiveNav);
  });

  return (
    <div class="w-full">
      <div class="flex items-center space-x-10 px-10 mx-auto pt-4 pb-8 ">
        {navigationElements.map((element, index) => (
          <div
            class={`h-6text-white transform  transition duration-300 ${
              index === state.idxActiveNav
                ? "text-yellow-400 scale-125"
                : "hover:text-yellow-400 hover:scale-125"
            }`}
          >
            <Link href={element.path} onClick={() => setIdxActiveNav(index)}>
              {element.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
