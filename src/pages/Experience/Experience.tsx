import ContiLogo from "../../assets/conti-logo.svg";
import AccentureLogo from "../../assets/accenture-logo.svg";
import { createEffect } from "solid-js";

export default function Experience() {
  return (
    <div
      id="experience-container"
      class="space-y-8 relative  
      ml-[5rem]
      before: animate-[expand]
      before:absolute 
      before:inset-0 
      before:ml-5 
      before:-translate-x-px 
      md:before:ml-[8.5rem] 
      md:before:translate-x-0 
      before:h-full 
      before:w-0.5 
      before:bg-gradient-to-b 
      before:from-blue-500 
      before:via-blue-300 
      before:to-transparent"
    >
      <div class="animate-fadeIn">
        <div class="relative ">
          <div class="md:flex items-center md:space-x-4 mb-1">
            <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
              <div class="flex animate-expand items-center justify-center w-8 h-8 rounded-full bg-yellow-500 md:order-1">
                <ContiLogo />
              </div>
              <time class="text-center font-medium text-blue-400 md:w-28">
                Apr 7, 2024
              </time>
            </div>
            <div class="text-xl">
              <h1>Embedded System Developer</h1>
            </div>
          </div>
          <div class=" p-1 text-white ml-14 md:ml-44 w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div class="relative">
          <div class="md:flex items-center md:space-x-4 mb-1">
            <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
              <div class="flex animate-expand items-center justify-center w-8 h-8 rounded-full bg-white md:order-1">
                <AccentureLogo />
              </div>
              <time class="text-center font-medium text-blue-400 md:w-28">
                Apr 7, 2024
              </time>
            </div>
            <div class="text-xl">
              <h1>Medior Frontend developer</h1>
            </div>
          </div>
          <div class=" p-1 text-white ml-14 md:ml-44 w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>

        <div class="relative">
          <div class="md:flex items-center md:space-x-4 mb-1">
            <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
              <div class="flex animate-expand items-center justify-center ml-2 w-5 h-5 rounded-full bg-white md:order-1"></div>
              <time class="text-center font-medium text-blue-400 md:w-28">
                Apr 7, 2024
              </time>
            </div>
            <div class="text-xl">
              <h1>Senior Frontend developer</h1>
            </div>
          </div>
          <div class=" p-1 text-white ml-14 md:ml-44">asd</div>
        </div>

        <div class="relative">
          <div class="md:flex items-center md:space-x-4 mb-1">
            <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
              <div class="flex animate-expand items-center justify-center ml-2 w-5 h-5 rounded-full bg-white md:order-1"></div>
              <time class="text-center font-medium text-blue-400 md:w-28">
                Apr 7, 2024
              </time>
            </div>
            <div class="text-xl">
              <h1>Full-stack developer</h1>
            </div>
          </div>
          <div class=" p-1 text-white ml-14 md:ml-44 w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  );
}
