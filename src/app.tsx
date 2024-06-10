import { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";

import Navigation from "./components/navigation/navigation";

import navigationElements from "./constants/navigationElements";
import Footer from "./components/Footer/Footer";

const App: Component = () => {
  return (
    <>
      <div class="main">
        <div class="back-img">
          <div class="flex flex-col	justify-center items-center pb-20">
            <div class="sm:w-full sm: h-auto lg:w-2/3 text-white mt-10 bg-black  w-full rounded-2xl shadow-lg bg-opacity-80 backdrop-filter backdrop-blur-lg ">
              <Navigation />
              <div class="flex h-[calc(100%-64px)] flex-col justify-between	">
                <Routes>
                  {navigationElements.map((element) => (
                    <Route path={element.path} component={element.component} />
                  ))}
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
