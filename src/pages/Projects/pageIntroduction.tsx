import { Link } from "@/components/Link";
import { TitleSection } from "@/components/Title/title";
import { ArrowBigLeftDash } from "lucide-react";

const PageIntroduction = () => {
  return (
    <section className="w-full h-[560px] lg:h-[700px] flex flex-col items-center justify-center bg-heroImage bg-no-repeat bg-cover bg-right-bottom">
      <TitleSection
        subtitle="projetos"
        title="Projetos"
        className="text-center [&>h3]:text-4xl [&>h3]:font-semibold [&>span]:bg-clip-text [&>span]:text-transparent [&>span]:bg-gradient-to-r from-purple-400 to-purple-950"
      />
      <div className="flex flex-col items-center">
        <p className="text-center my-6 text-sm sm:text-base max-w-[640px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ut?
          Distinctio ad quisquam labore repudiandae. Dolor in illo excepturi
          ad!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          ut? Distinctio ad quisquam labore repudiandae. Dolor in illo excepturi
          ad!
        </p>
        <Link
          href="/"
          className="hover:text-purple-600 transition-colors flex items-center"
        >
          <ArrowBigLeftDash />
          voltar para home
        </Link>
      </div>
    </section>
  );
};

export default PageIntroduction;
