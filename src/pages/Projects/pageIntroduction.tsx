import { Link } from "@/components/Link";
import { TitleSection } from "@/components/Title/title";

const PageIntroduction = () => {
  return (
    <section className="w-full h-[460px] lg:h-[630px] flex flex-col items-center justify-center">
      <TitleSection
        subtitle="projetos"
        title="Projetos"
        className="text-center [&>h3]:text-4xl"
      />
      <div className="flex flex-col items-center">
        <p className="text-center my-6 text-sm sm:text-base max-w-[640px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ut?
          Distinctio ad quisquam labore repudiandae. Dolor in illo excepturi
          ad!Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          ut? Distinctio ad quisquam labore repudiandae. Dolor in illo excepturi
          ad!
        </p>
        <Link href="/">voltar para home</Link>
      </div>
    </section>
  );
};

export default PageIntroduction;
