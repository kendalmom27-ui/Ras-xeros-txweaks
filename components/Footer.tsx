import Link from "next/link";
import { FaDiscord, FaTwitter, FaYoutube } from "react-icons/fa";
import { site, products } from "../lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-black tracking-wide text-cyan-400">
              {site.fullName}
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              Pro PC optimization to boost FPS, cut latency, and improve gaming.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={site.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 p-3 text-gray-400 transition hover:border-cyan-500/50 hover:text-cyan-400"
                aria-label="Discord"
              >
                <FaDiscord size={20} />
              </a>
              <a
                href={site.twitterUrl}
                className="rounded-lg border border-white/10 p-3 text-gray-400 transition hover:border-cyan-500/50 hover:text-cyan-400"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href={site.youtubeUrl}
                className="rounded-lg border border-white/10 p-3 text-gray-400 transition hover:border-cyan-500/50 hover:text-cyan-400"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/products" className="hover:text-cyan-400">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400">
                  About us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Products</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              {products.map((product) => (
                <li key={product.name}>
                  <Link href={product.href} className="hover:text-cyan-400">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Support</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/discord" className="hover:text-cyan-400">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-cyan-400">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400">
                  Contact Info
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-gray-300">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Refunds
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
