"use client";

import { RedesSociais } from "@/components/RedesSociais";
import { RicheText } from "@/components/RichText";
import { TechBadge } from "@/components/TechBadge";

import { HomePageInfo } from "@/types/pageInfo";
import { motion } from "framer-motion";
import Image from "next/image";

type HomeSectionProps = {
  homeInfo: HomePageInfo;
};
const Home = ({ homeInfo }: HomeSectionProps) => {
  return (
    <main className=" w-full py-16 flex-1 min-h-[700px] flex items-center justify-center md:gap-20 bg-heroImage bg-no-repeat bg-cover bg-right-bottom">
      <section className="relative flex py-16 items-start justify-between flex-col-reverse lg:flex-row gap-10 containers">
        <motion.div
          className="flex items-center flex-col md:items-start space-y-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
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
          <div className="flex w-full flex-wrap gap-x-2 gap-y-3 lg:max-w-96">
            {homeInfo.technologies.map((tech, i) => (
              <TechBadge
                name={tech.name}
                key={`intro-tech-${tech.name}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.2, delay: i * 0.1 }}
              />
            ))}
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center w-full h-full flex items-center justify-center lg:justify-end"
        >
          <Image
            src={homeInfo.profilePicture.url}
            quality={100}
            height={420}
            width={420}
            alt="Foto Principal"
            className="w-72 h-72 object-cover rounded-full"
          />
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
