import React from "react";
import Image from "next/image";

import Gard from "../../../../public/assets/img/De.png";
import { Link } from "@/components/Link";

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
        <h3>
          <Image src={Gard} alt="dfd" width={40} height={34} /> title
        </h3>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias
          deleniti repellat aperiam numquam voluptatum optio cupiditate autem
          non assumenda.
        </p>
        <div className="flex space-x-2 gap-y-3 flex-wrap mb-8 md:max-w-96">
          <p>tags</p>
          <p>tags</p>
          <p>tags</p>
          <p>tags</p>
          <p>tags</p>
          <p>tags</p>
          <p>tags</p>
        </div>
        <Link href="/" className="text-base">
          Ver Projeto
        </Link>
      </div>
    </div>
  );
};
