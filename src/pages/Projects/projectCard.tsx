import Image from "next/image";
import Gard from "../../../public/assets/img/k.webp";
const ProjectCard = () => {
  return (
    <div className="rounded-xl h-[436px] flex flex-col overflow-y-hidden border-2 hover:border-purple-950 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={380}
          height={200}
          src={Gard}
          alt="f"
          unoptimized
          className="group-hover:scale-110 transition-all object-cover w-full h-full duration-500"
        />
      </div>

      <div className="flex-1 flex flex-col p-8 ">
        <strong className="group-hover:text-purple-950 transition-colors">
          Qualquer projeto
        </strong>
        <p className="mt-2 line-clamp-4 mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          dolore, expedita praesentium repellendus modi rem beatae quod atque
          odit incidunt!
        </p>
        <span className="text-sm mt-auto block truncate">
          tech, tech, tech, tech, tech, tech, tech, tech, tech, tech
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
