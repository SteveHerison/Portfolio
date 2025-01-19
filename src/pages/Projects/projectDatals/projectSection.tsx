import Image from "next/image";
import Gard from "../../../../public/assets/img/k.webp";

const sections = [
  {
    title: "Login",
    image: Gard,
  },
  {
    title: "Home",
    image: Gard,
  },
];
const ProjectSection = () => {
  return (
    <section className="containers my-12 md:my32 flex flex-col gap-8 md:gap-32 text-zinc-500">
      {sections.map((sections) => (
        <div
          key={sections.title}
          className="flex flex-col items-center gap-6 md:gap-12"
        >
          <h2>{sections.title}</h2>
          <Image
            src={sections.image}
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-xl object-cover text-purple-950"
            alt={`Imagem da sessão ${sections.title}`}
            unoptimized
          />
        </div>
      ))}
    </section>
  );
};

export default ProjectSection;
