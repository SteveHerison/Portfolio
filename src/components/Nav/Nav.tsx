"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className=" space-x-5 hidden md:flex">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname && "text-purple-950"
          } capitalize font-semibold text-sm hover:text-purple-900 transition-all `}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
