import Image from "next/image";

import Gard from "../../../../public/assets/img/k.webp";
import { Link } from "@/components/Link";
import { ArrowBigRightDash } from "lucide-react";

export const ProjectsCards = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-12 gap-6">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src={Gard}
          alt="Projeto1"
          className="rounded-xl bg-cover border md:min-h-full w-full h-52 sm:h-80 lg:w-[420px]"
        />
      </div>
      <div className="flex lg:items-center gap-3  text-xl flex-col items-start">
        <h3 className="flex flex-col items-center text-base md:text-xl">
          <Image src={Gard} alt="dfd" width={40} height={34} /> title
        </h3>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias
          deleniti repellat aperiam numquam voluptatum optio cupiditate autem
          non assumenda.
        </p>
        <div className="flex space-x-2 gap-y-3 flex-wrap mb-8 md:max-w-96 text-sm">
          <p>tags</p>
          <p>tags</p>
          <p>tags</p>
          <p>tags</p>
          <p>tags</p>
          <p>tags</p>
          <p>tags</p>
        </div>
        <Link
          href="/"
          className="text-base flex items-center hover:text-purple-950 transition-colors"
        >
          Ver Projeto
          <ArrowBigRightDash />
        </Link>
      </div>
    </div>
  );
};
