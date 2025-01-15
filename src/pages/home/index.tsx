"use client";
import Photo from "@/components/Photo";
import RedesSociais from "@/components/RedesSociais";

const Home = () => {
  return (
    <main className="w-full flex-1 flex items-center justify-center pb-20 ">
      <section className="flex items-start justify-between flex-col-reverse lg:flex-row h-full w-full gap-20">
        <div className="flex items-center flex-col md:items-start space-y-4">
          <h2>Software Developer</h2>
          <p className="flex flex-col items-center text-3xl md:items-start xl:text-5xl sm:text-4xl">
            {`Hello I'm`} <br />
            <span className="font-semibold text-purple-950">Steve Herison</span>
          </p>
          <p className="text-center md:text-start text-sm">
            Desenvolvedor em constante busca de desafios, entusiasta para ajudar
            na próxima solução de que precisa. Transformo ideias em resultados
            com foco, criatividade e impacto.
          </p>
          <div className="flex flex-col md:flex-row w-full justify-between items-center space-y-4">
            <button className="cursor-pointer flex justify-between bg-zinc-500/10 px-2 py-2 rounded-full hover:text-white tracking-wider shadow-xl hover:bg-purple-950 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]">
              <p>DOWNLOAD CV</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 26 24"
                strokeWidth="3"
                stroke="currentColor"
                className="w-5 h-5 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                ></path>
              </svg>
            </button>

            <RedesSociais />
          </div>
        </div>

        <div className="w-full h-full flex lg:justify-end justify-center ">
          <Photo />
        </div>
      </section>
    </main>
  );
};

export default Home;
