import Link from "next/link";
import { Nav } from "./Nav";

const NavLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Project",
    href: "/project",
  },
];

const Header = () => {
  return (
    <header className="w-full h-24 flex items-center">
      <div className=" flex justify-between w-full">
        {/* Logo */}
        <Link href="/">
          <h1 className="">
            HerisonTech<span className="text-purple-950 text-2xl">.</span>
          </h1>
        </Link>
        <nav className="flex items-center space-x-2 md:space-x-4 text-xs sm:text-sm md:text-base">
          {NavLinks.map((item) => (
            <Nav {...item} key={item.label} />
          ))}
          <button className=" bg-black/5 p-1 rounded-full">Hire me</button>
        </nav>
      </div>
    </header>
  );
};
export default Header;
