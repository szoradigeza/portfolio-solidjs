import { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";

import Navigation from "./components/navigation/navigation";

import navigationElements from "./constants/navigationElements";

const App: Component = () => {
  return (
    <>
      <div class="main">
        <div class="back-img">
          <div class="flex flex-col	justify-center items-center pb-20">
            <div class=" text-white mt-10 bg-black h-[90vh] w-3/4 rounded-2xl overflow-hidden shadow-lg text-white bg-black  bg-opacity-80 backdrop-filter backdrop-blur-lg ">
              <Navigation />
              <div class="flex h-[calc(100%-64px)] flex-col justify-between	">
                <Routes>
                  {navigationElements.map((element) => (
                    <Route path={element.path} component={element.component} />
                  ))}
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
