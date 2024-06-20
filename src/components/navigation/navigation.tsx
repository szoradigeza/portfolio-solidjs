import navigate, { Link } from "@solidjs/router";

import { createEffect } from "solid-js";
import navigationElements from "../../constants/navigationElements";
import { useNavigation } from "../../hooks/useNavigation";
import { useLocation } from "@solidjs/router";
export default function Navigation() {
  const [state, setIdxActiveNav] = useNavigation();
  const location = useLocation();

  createEffect(() => {
    const idxActiveNav = navigationElements.findIndex((element) => {
      console.log(location.pathname.replace("/portfolio-solidjs", ""));
      console.log(element.path);
      return (
        element.path === location.pathname.replace("/portfolio-solidjs", "")
      );
    });

    console.log(location.pathname);
    if (location.pathname.replace("/portfolio-solidjs", "") === "") {
      setIdxActiveNav(0);
      return;
    }

    setIdxActiveNav(idxActiveNav);
  });

  return (
    <div class="w-full">
      <div class="flex items-center space-x-10 px-10 mx-auto pt-4 pb-8 ">
        {navigationElements.map((element, index) => (
          <div
            class={`h-6text-white transform  transition duration-300 ${
              index === state()
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
