import { TitleSection } from "@/components/Title/title";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProjectDetails = () => {
  return (
    <div className="w-full sm:min-h-[700px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden ">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background:
            "url(/assets/img/hero.png) no-repeat bottom/cover, url(https://wallpapers.com/images/high/4k-programming-background-93u6nsa9n7d04r8a.webp) no-repeat center/auto",
          backgroundBlendMode: "lighten", // Mistura as imagens
        }}
      />
      <TitleSection
        subtitle="projetos"
        title="Nome do projeto"
        className="text-center items-center  sm:[&>h3]:text-4xl sm:[&>span]:text-xl [&>h3]:font-semibold [&>span]:bg-clip-text [&>span]:text-transparent [&>span]:bg-gradient-to-r from-purple-600 to-zinc-300"
      />
      <p className="text-center text-zinc-300 max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
        pariatur explicabo laborum veniam quos excepturi fugit obcaecati sunt
        quidem facilis.
      </p>
      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        <p>tech</p>
        <p>tech</p>
        <p>tech</p>
        <p>tech</p>
        <p>tech</p>
        <p>tech</p>
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a target="_blank" href="https://github.com/SteveHerison">
          <Button className="bg-purple-950 shadow-lg shadow-purple-500 hover:shadow-zinc-800 transition-all text-zinc-300">
            repositorio
          </Button>
        </a>
        <a target="_blank" href="https://github.com/SteveHerison">
          <Button className="bg-purple-950 shadow-lg shadow-purple-500 hover:shadow-zinc-800 transition-all text-zinc-300">
            Project Online
          </Button>
        </a>
      </div>

      <Link href="/projects" className="text-sm">
        Voltar para projetos
      </Link>
    </div>
  );
};

export default ProjectDetails;
