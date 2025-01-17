import Link from "next/link";
import { Nav } from "./Nav";

const NavLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
];

export const Header = () => {
  return (
    <header className="w-full h-20 md:h-24 flex items-center container mx-auto">
      <div className=" flex justify-between w-full">
        {/* Logo */}
        <Link href="/">
          <h1 className="">
            HerisonTech<span className="text-purple-950 text-2xl">.</span>
          </h1>
        </Link>
        <nav className="flex items-center space-x-2 md:space-x-4 text-xs sm:text-sm md:text-base ">
          {NavLinks.map((item) => (
            <Nav {...item} key={item.label} />
          ))}
          <button className=" bg-black/1 p-1 rounded-full bg-zinc-200 hover:shadow-xl hover:bg-purple-950 hover:text-white transition-all">
            Hire me
          </button>
        </nav>
      </div>
    </header>
  );
};
