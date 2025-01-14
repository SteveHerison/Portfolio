import Link from "next/link";

import Nav from "../Nav";

const Header = () => {
  return (
    <header className="flex items-center justify-center w-full h-20 ">
      <div className="flex items-center justify-between w-full px-2">
        {/* Logo */}
        <Link href="/">
          <h1 className="">
            HerisonTech<span className="text-purple-950 text-2xl">.</span>
          </h1>
        </Link>
        <div className="flex items-center gap-5">
          <Nav />
          <button className=" bg-black/5 p-1 rounded-full">Hire me</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
