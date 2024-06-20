import ContiLogo from "../../assets/conti-logo.svg";
import AccentureLogo from "../../assets/accenture-logo.svg";
import { createEffect } from "solid-js";
import { Link } from "@solidjs/router";

export default function Experience() {
  return (
    <div
      id="experience-container"
      class="space-y-8 relative  
      ml-[5rem]
      before: animate-[expand]
      before:absolute 
      before:inset-0 
      before:ml-4 
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
      <div class="max-w-[40rem] mr-4 mb-8">
        <div class="relative ">
          <div class="md:flex items-center md:space-x-4 mb-1">
            <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
              <div class="flex animate-expand items-center justify-center w-8 h-8 rounded-full bg-yellow-500 md:order-1">
                <ContiLogo />
              </div>
              <time class="text-center font-medium text-blue-400 md:w-28">
                Oct 1, 2018
              </time>
            </div>
            <div class="text-xl">
              <h1>Embedded System Developer</h1>
            </div>
          </div>
          <div class="text-justify p-1 text-white ml-14 md:ml-44 ">
            I was part of a team of 12, responsible for ECU software
            implementation and developing web applications to support
            management's daily work.
            <br />
            <Link class="text-yellow-400 " href="/projects">
              See more in the projects section.
            </Link>
          </div>
        </div>
        <div class="relative">
          <div class="md:flex items-center md:space-x-4 mb-1">
            <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
              <div class="flex animate-expand items-center justify-center w-8 h-8 rounded-full bg-white md:order-1">
                <AccentureLogo />
              </div>
              <time class="text-center font-medium text-blue-400 md:w-28">
                Jun 1, 2021
              </time>
            </div>
            <div class="text-xl">
              <h1>Medior Frontend developer</h1>
            </div>
          </div>
          <div class="text-justify p-1 text-white ml-14 md:ml-44 ">
            Since I enjoyed web development more, I felt it was better to focus
            on that, though embedded systems development remained a hobby :)
            <br />
            Here, I've been working for 2 contractors on different projects.
          </div>
        </div>

        <div class=" relative">
          <div class="md:flex items-center md:space-x-4 mb-1">
            <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
              <div class="flex animate-expand items-center justify-center ml-1.5 w-5 h-5 rounded-full bg-white md:order-1"></div>
              <time class="text-center font-medium text-blue-400 md:w-28">
                Jun 1, 2023
              </time>
            </div>
            <div class="text-xl">
              <h1>Senior Frontend developer</h1>
            </div>
          </div>
          <div class=" text-justify p-1 text-white ml-14 md:ml-44 ">
            I was working for a British telecommunications company. I was
            responsible for collaborating with cross-functional teams, including
            designers, BE developers and project managers to create high-quality
            web applications.
            <br />
            Stack: React, Java Spring
          </div>
        </div>

        <div class="relative">
          <div class="md:flex items-center md:space-x-4 mb-1">
            <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
              <div class="flex animate-expand items-center justify-center ml-1.5 w-5 h-5 rounded-full bg-white md:order-1"></div>
              <time class="text-center font-medium text-blue-400 md:w-28">
                Oct 1, 2023
              </time>
            </div>
            <div class="text-xl">
              <h1>Full-stack developer</h1>
            </div>
          </div>
          <div class="  text-justify p-1 text-white ml-14 md:ml-44 ">
            I've been working for a German automotive company. Since I've always
            been drawn to full-stack development and had experience because of
            hobby projects, the new project presented a great opportunity for me
            to transition into this role. <br /> Currently, my team is dedicated
            to developing applications for financial departments.
            <br />
            Stack: Angular, Nodejs, PostgreSQL
          </div>
        </div>
      </div>
    </div>
  );
}
