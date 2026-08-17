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
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-ink transition hover:text-signal"
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
            className="btn btn-ghost hidden px-5 py-2.5 text-sm sm:inline-flex"
          >
            Discord
          </Link>
          <Link
            href="/free-bios"
            className="btn btn-primary px-5 py-2.5 text-sm"
          >
            Try Free →
          </Link>
        </div>
      </div>
    </nav>
  );
}
