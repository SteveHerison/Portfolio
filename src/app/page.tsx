import RedesSociais from "@/components/RedesSociais";

export default function Home() {
  return (
    <main className="w-full h-full py-4 relative px-4">
      <section className="flex flex-col md:flex-row h-full items-center justify-center md:justify-between">
        <div className="flex items-center flex-col md:items-start space-y-4">
          <h2>Software Developer</h2>
          <p className="flex flex-col items-center text-3xl md:items-start xl:text-5xl sm:text-4xl">
            {`Hello I'm`} <br />
            <span className="font-semibold text-purple-950">Steve Herison</span>
          </p>
          <p className="text-center text-sm">
            Desenvolvedor em constante busca de desafios, entusiasta para ajudar
            na próxima solução de que precisa. Transformo ideias em resultados
            com foco, criatividade e impacto.
          </p>
          <div className="flex flex-col md:flex-row w-full justify-between items-center space-y-4">
            <button className="flex items-center border border-purple-950 rounded-full p-1 text-purple-950 ">
              <p className="font-semibold">DOWNLOAD CV</p>
              <img src="" alt="foto" />
            </button>

            <RedesSociais />
          </div>
        </div>
        <div className="w-full items-center justify-center">
          {" "}
          <p>eip</p>{" "}
        </div>
      </section>
    </main>
  );
}
