import Image from "next/image";
import React from "react";

const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex  flex-col items-center gap-4 ">
        <div className="rounded-full border border-purple-950 p-0.5">
          <Image />
        </div>
        <div className="h-full w-0.5 bg-purple-950" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm md:text-base">
          <a
            href=""
            target="_blank"
            className="hover:text-purple-950 transition-colors"
          >
            @Empresa
          </a>
          <h4>Desenvolvedor Front-End</h4>
          <span className="text-zinc-500/50">
            mês ano . mes ano . (tempo trabalhado)
          </span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
            facere similique voluptatum veniam autem commodi laudantium, hic
            minus doloremque, debitis error aliquam ipsam nobis repellendus.
            Quae voluptate, autem alias culpa quas eum assumenda quidem.
            Distinctio, cupiditate vero? Iure, ad ipsa.
          </p>
        </div>
        <p className="font-semibold text-sm text-zinc-500/50 mb-3 mt-6 ">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-80 mb-8">
          <p>techs</p>
          <p>techs</p>
          <p>techs</p>
          <p>techs</p>
          <p>techs</p>
          <p>techs</p>
          <p>techs</p>
          <p>techs</p>
          <p>techs</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
