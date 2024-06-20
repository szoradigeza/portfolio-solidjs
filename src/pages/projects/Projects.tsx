import { createSignal } from "solid-js";
import { Index } from "solid-js";
import AccentureSecureImage from "../../assets/images.jpeg";

import ProjectContainer, {
  ProjectContainerProps,
} from "./components/ProjectContainer";
import "./Projects.css";

const projects: ProjectContainerProps[] = [
  {
    image: AccentureSecureImage,
    name: "KPI Filler Tool",
    description:
      "The KPI Form Filler is an innovative software solution designed to streamline and automate the process of completing Key Performance Indicator (KPI) forms for companies of all sizes.",
    technologies: ["angular", "nodejs", "azure"],
  },
  {
    image: AccentureSecureImage,
    name: "Event Expense Tool",
    description:
      "User-friendly application tailored specifically for managing expenses related hotel bookings, travel, meals, and other associated costs. By integrating advanced analytics, seamless data entry, and compliance features, the tool ensures that every aspect of expense handling is efficient, transparent, and compliant with relevant regulations.",
    technologies: ["angular", "nodejs", "azure"],
  },
  {
    image: AccentureSecureImage,
    name: "Trouble Ticket",
    description:
      "This app is designed for British telecommunacation company to streamline their trouble ticket management process. It helps in tracking, managing, and resolving technical issues for the users.",
    technologies: ["react", "aws"],
  },
  {
    image: AccentureSecureImage,
    name: "Telecom Order Manager",
    description:
      "This app is designed for British telecommunaction company, with it companies can design their new phones and  order them.",
    technologies: ["react", "aws"],
  },
  {
    image: AccentureSecureImage,
    name: "Warranty calc",
    description:
      "WarrantyCalc is a specialized application designed specifically for German automotive company  to streamline the process of warranty posting and claims calculation. This application simplifies the handling of warranty claims by automating calculations and ensuring compliance with company's warranty policies and guidelines.",
    technologies: ["angular", "nodejs", "azure"],
  },
  {
    image: AccentureSecureImage,

    name: "Federated modules",
    description:
      "For easier development and microarchitecture, it was necessary for the header and footer to be a federated module. With it, developers don't have to deal with update and install header and footer package anymore.",
    technologies: ["react"],
  },
];

export default function Projects() {
  return (
    <div class="m-auto">
      <h1 class="text-xl">Few projects I've been working on...</h1>
      <div class=" mt-10 grid custom-grid gap-x-[5px] gap-y-[10px]">
        {projects.map((project) => (
          <ProjectContainer {...project} />
        ))}
      </div>
    </div>
  );
}
