"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "../lib/site";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-black tracking-tight text-ink transition hover:text-signal"
        >
          <svg viewBox="0 0 20 20" className="h-5 w-5 flex-none" aria-hidden="true">
            <polyline
              points="1,14 6,14 8,4 12,18 14,10 19,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              className="text-signal"
            />
          </svg>
          {site.name.toUpperCase()}
        </Link>

        <div className="hidden items-center gap-8 font-medium text-ink-dim md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-signal ${
                pathname === link.href ? "text-signal" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/discord"
            className="hidden rounded-none border border-line-strong px-4 py-2 text-sm font-semibold text-ink transition hover:border-alert hover:text-alert sm:inline-block"
          >
            Discord
          </Link>
          <Link
            href="/free-bios"
            className="rounded-none bg-signal px-4 py-2 font-mono text-sm font-bold tracking-wide text-[#04140D] transition hover:brightness-110"
          >
            TRY FREE →
          </Link>
        </div>
      </div>
    </nav>
  );
}
