"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdSpeed } from "react-icons/md";
import { navLinks, site } from "../lib/site";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-black tracking-wide text-white transition hover:text-cyan-400 md:text-2xl"
        >
          <MdSpeed className="text-cyan-400" size={28} />
          {site.name}
        </Link>

        <div className="hidden items-center gap-8 font-medium text-white md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-cyan-400 ${
                pathname === link.href ? "text-cyan-400" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/discord"
            className="hidden rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold transition hover:border-cyan-500/50 hover:text-cyan-400 sm:inline-block"
          >
            Discord
          </Link>
          <Link
            href="/free-bios"
            className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-bold text-black transition hover:bg-cyan-400"
          >
            Try Free
          </Link>
        </div>
      </div>
    </nav>
  );
}

