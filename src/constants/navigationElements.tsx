import { Component } from "solid-js";
import Experience from "../pages/Experience/Experience";
import Introduction from "../pages/introduction";
import Projects from "../pages/projects";

interface NavigationElement {
  title: string;
  path: string;
  component: Component;
}

const navigationElements: NavigationElement[] = [
  { title: "Introduction", path: "/", component: Introduction },
  { title: "Experience", path: "/about", component: Experience },
  { title: "Projects", path: "/projects", component: Projects },
];

export default navigationElements;
