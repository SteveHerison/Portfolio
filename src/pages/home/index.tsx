"use client";
import { Photo } from "@/components/Photo";
import { RedesSociais } from "@/components/RedesSociais";
import { RicheText } from "@/components/RichText";
import { HomePageInfo } from "@/types/pageInfo";

type HomeSectionProps = {
  homeInfo: HomePageInfo;
};
const Home = ({ homeInfo }: HomeSectionProps) => {
  return (
    <main className=" w-full py-16 flex-1 min-h-[700px] flex items-center justify-center md:gap-20 bg-heroImage bg-no-repeat bg-cover bg-right-bottom">
      <section className="relative flex py-16 items-start justify-between flex-col-reverse lg:flex-row gap-10 containers">
        <div className="flex items-center flex-col md:items-start space-y-4">
          <h2>Software Developer</h2>
          <p className="flex flex-col items-center text-3xl md:items-start xl:text-5xl sm:text-4xl">
            {`Hello I'm`} <br />
            <span className="font-semibold text-zinc-50 md:text-purple-900">
              Steve Herison
            </span>
          </p>
          <div className="text-center md:text-start text-sm">
            <RicheText content={homeInfo.introduction.raw} />
          </div>

          <div className="flex flex-col md:flex-row w-full justify-between items-center space-y-4">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1kPJwsO4D2g40OusKT3xIhcPvas8_1sC6/view"
            >
              <button className="cursor-pointer flex justify-between bg-zinc-500/10 px-2 py-2 rounded-full hover:text-white tracking-wider shadow-xl hover:bg-purple-950 hover:scale-105 duration-500 hover:ring-1 ring-zinc-100 font-mono w-[150px]">
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
            </a>

            <RedesSociais />
          </div>
        </div>

        <div className="w-full h-full flex lg:justify-end justify-center ">
          <Photo homeInfo={homeInfo} />
        </div>
      </section>
    </main>
  );
};

export default Home;
