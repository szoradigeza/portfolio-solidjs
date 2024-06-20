import { createSignal } from "solid-js";
import ReactLogo from "../../../assets/React-icon.svg";
import NodejsLogo from "../../../assets/Node.js_logo.svg";
import AngularLogo from "../../../assets/Angular_full_color_logo.svg";
import AzureLogo from "../../../assets/azure-icon-svgrepo-com.svg";
import AwsLogo from "../../../assets/awslogo.svg";

const iconMapper = {
  react: ReactLogo,
  nodejs: NodejsLogo,
  angular: AngularLogo,
  azure: AzureLogo,
  aws: AwsLogo,
};

export interface ProjectContainerProps {
  description: string;
  image: any;
  name: string;
  technologies: (keyof typeof iconMapper)[];
}

export default function ProjectContainer({
  name,
  description,
  image,
  technologies,
}: ProjectContainerProps) {
  const [displayDetails, setDisplayDetails] = createSignal(false);

  const handleMouseOver = () => {
    setDisplayDetails(true);
  };

  const handleMouseLeave = () => {
    setDisplayDetails(false);
  };

  return (
    <div>
      <div
        class="bg-gray-50 mx-auto bg-opacity-50
       
        w-[15rem] h-[15rem]
        overflow-visible
      "
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        {displayDetails() ? (
          <div
            class="            
            flex
            flex-col
            w-[18rem] 
            min-h-[18rem]
            absolute
            z-50
            ml-[-1.5rem]
            mt-[-1.5rem]
            group
            project-details
            bg-black   rounded-2xl shadow-lg bg-opacity-70 backdrop-filter backdrop-blur-lg
            "
            onMouseLeave={handleMouseLeave}
          >
            <div class="flex justify-center align-middle ml-auto mr-auto mb-6">
              <h1 class="text-xl pt-4">{name}</h1>
            </div>
            <div class="flex-1 flex-grow self-end mt-auto  ml-4 mr-4">
              <span>{description}</span>
            </div>
            <div class="flex justify-center align-middle mt-auto">
              {technologies.map((t) => iconMapper[t])}
            </div>
          </div>
        ) : undefined}
        <img src={image} alt="Project Image" class="w-full h-52 " />
        <div class="p-1  bg-black    shadow-lg bg-opacity-25 backdrop-filter ">
          <span class="text-white  ">{name}</span>
        </div>
      </div>
    </div>
  );
}
