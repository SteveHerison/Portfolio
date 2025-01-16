"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  label: string;
  href: string;
};
export const Nav = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(isActive && "text-purple-950", "hover:text-purple-800")}
    >
      <span>_</span>
      {label}
    </Link>
  );
};
