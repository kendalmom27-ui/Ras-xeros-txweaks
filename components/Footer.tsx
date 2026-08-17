import Link from "next/link";
import { FaDiscord, FaTwitter, FaYoutube } from "react-icons/fa";
import { site, products } from "../lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto max-w-7xl px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold tracking-tight text-signal">
              {site.fullName}
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-ink-dim">
              Pro PC optimization to boost FPS, cut latency, and improve gaming.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={site.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-line p-3 text-muted transition hover:border-signal hover:text-signal"
                aria-label="Discord"
              >
                <FaDiscord size={20} />
              </a>
              <a
                href={site.twitterUrl}
                className="rounded-xl border border-line p-3 text-muted transition hover:border-signal hover:text-signal"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href={site.youtubeUrl}
                className="rounded-xl border border-line p-3 text-muted transition hover:border-signal hover:text-signal"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-dim">
              <li>
                <Link href="/products" className="hover:text-signal">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-signal">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-signal">
                  About us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted">
              Products
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-dim">
              {products.map((product) => (
                <li key={product.name}>
                  <Link href={product.href} className="hover:text-signal">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted">
              Support
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-dim">
              <li>
                <Link href="/discord" className="hover:text-signal">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-signal">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-signal">
                  Contact Info
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-muted md:flex-row">
          <p>© {new Date().getFullYear()} {site.fullName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-ink-dim">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-ink-dim">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-ink-dim">
              Refunds
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
