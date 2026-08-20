import Image from "next/image";

const GRID =
  "absolute inset-0 [background-image:linear-gradient(rgba(45,212,191,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,.07)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_50%_60%,black_20%,transparent_75%)]";

const STAGE =
  "relative aspect-square overflow-hidden rounded-xl bg-[radial-gradient(90%_70%_at_50%_118%,rgba(45,212,191,.20),transparent_70%),linear-gradient(160deg,rgba(255,255,255,.05),rgba(255,255,255,.015))]";

const FLOOR =
  "absolute inset-0 [box-shadow:inset_0_-40px_50px_-30px_rgba(7,11,12,.9)]";

/** Angled book/case cover for the service packages. */
export function ServiceArt({ title }: { title: string }) {
  return (
    <div className={STAGE}>
      <div aria-hidden className={GRID} />
      <div className="absolute inset-0 flex items-center justify-center p-[18px] [perspective:1000px]">
        <div className="flex h-[92%] [transform:rotateY(-24deg)_rotateX(3deg)] [transform-style:preserve-3d] [filter:drop-shadow(0_24px_34px_rgba(0,0,0,.65))_drop-shadow(0_0_30px_rgba(45,212,191,.16))]">
          <div className="flex w-4 items-center justify-center rounded-l-[3px] bg-gradient-to-r from-[#05090a] to-[#151d1f]">
            <span className="rotate-180 text-[0.4rem] font-semibold tracking-[0.22em] text-white/30 [writing-mode:vertical-rl]">
              RASX TWEAKS
            </span>
          </div>
          <div className="relative flex w-28 flex-col items-center justify-center gap-[11px] overflow-hidden rounded-r-[4px] border border-l-0 border-white/10 bg-gradient-to-br from-[#242c2e] to-[#0f1517] px-3 py-4">
            <span className="absolute inset-x-0 top-3 text-center text-[0.42rem] font-semibold tracking-[0.3em] text-white/40">
              RASX
            </span>
            <span className="text-center text-base leading-[1.15] font-bold tracking-tight text-white whitespace-pre-line">
              {title}
            </span>
            <span className="h-[2.5px] w-[38px] rounded-full bg-gradient-to-r from-teal-300 to-teal-400 [box-shadow:0_0_12px_rgba(45,212,191,.7)]" />
            <span className="text-[0.42rem] font-semibold tracking-[0.24em] text-white/45 uppercase">
              PC Optimization
            </span>
            <span
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,.12),transparent_45%)]"
            />
          </div>
        </div>
      </div>
      <div aria-hidden className={FLOOR} />
    </div>
  );
}

/** Tilted app window showing the real Rasx Utility screenshot. */
export function UtilityArt() {
  return (
    <div className={STAGE}>
      <div aria-hidden className={GRID} />
      <div className="absolute inset-0 flex items-center justify-center [perspective:900px]">
        <div className="w-[118%] overflow-hidden rounded-[9px] border border-white/15 bg-[#0b1011] [transform:rotateY(-16deg)_rotateX(7deg)_rotate(-1.5deg)] [transform-style:preserve-3d] [box-shadow:0_26px_60px_rgba(0,0,0,.6),0_0_0_1px_rgba(45,212,191,.14),0_0_44px_rgba(45,212,191,.22)]">
          <div className="flex items-center gap-[5px] border-b border-white/10 bg-gradient-to-b from-white/[.07] to-white/[.02] px-[9px] py-[6px]">
            <span className="size-1.5 rounded-full bg-white/20" />
            <span className="size-1.5 rounded-full bg-white/20" />
            <span className="size-1.5 rounded-full bg-teal-400 [box-shadow:0_0_8px_rgba(45,212,191,.8)]" />
            <span className="ml-[5px] text-[0.5rem] font-semibold tracking-[0.2em] text-white/55 uppercase">
              Rasx Utility
            </span>
          </div>
          <div className="relative aspect-[1280/719] overflow-hidden">
            <Image
              src="/rasx-utility-dashboard.png"
              alt="Rasx Utility dashboard"
              fill
              sizes="(max-width: 768px) 100vw, 360px"
              className="object-cover object-top"
              priority
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(115deg,rgba(94,234,212,.14),transparent_42%)]"
            />
          </div>
        </div>
      </div>
      <div aria-hidden className={FLOOR} />
    </div>
  );
}
File 2 — app/products/page.tsx (replace all)

import PageShell from "../../components/PageShell";
import PurchaseModal from "../../components/PurchaseModal";
import { ServiceArt, UtilityArt } from "../../components/PackageArt";
import Testimonials from "../../components/Testimonials";
import { addons } from "../../lib/site";

/**
 * `rating` / `reviewCount` are intentionally left unset — the card only shows
 * a star row once real numbers are filled in, so the storefront never displays
 * review counts we don't actually have.
 */
const packages = [
  {
    title: "Full Optimization",
    art: "FULL\nOPTIMIZATION",
    price: "$25",
    priceLabel: "From $25",
    badge: "Best Seller",
    featured: true,
    hasAddons: true,
    rating: null as number | null,
    reviewCount: null as number | null,
  },
  {
    title: "Extreme Tweaks",
    art: "EXTREME\nTWEAKS",
    price: "$15",
    priceLabel: "$15",
    badge: null,
    featured: false,
    hasAddons: false,
    rating: null as number | null,
    reviewCount: null as number | null,
  },
];

const utility = {
  title: "Rasx Utility",
  priceLabel: "Free",
  badge: "Included",
};

export default function ProductsPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-bg pt-28 text-ink">
        <section className="relative mx-auto max-w-6xl px-6 pb-24 md:px-8">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-44 left-1/2 h-[420px] w-[900px] -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(45,212,191,.10),transparent_70%)]"
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <span className="eyebrow">Instant Delivery</span>
            <h1 className="mt-4 text-[clamp(2.1rem,4vw,3rem)] font-bold tracking-tight">
              Choose Your Package
            </h1>
            <p className="mt-4 text-lg text-ink-dim">
              The price you see is the price you pay — no upsells, no surprises.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.title}
                className={`panel relative flex flex-col p-5 text-center transition duration-300 hover:-translate-y-1 ${
                  p.featured ? "card-featured" : "hover:border-signal/40"
                }`}
              >
                {p.badge && (
                  <span
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 ${
                      p.featured ? "badge-solid" : "badge-pill px-4 py-1.5"
                    }`}
                  >
                    {p.badge}
                  </span>
                )}

                <ServiceArt title={p.art} />

                <h2 className="mt-5 text-xl font-semibold">{p.title}</h2>
                <p className="mt-1 text-xs tracking-widest text-muted uppercase">
                  Rasx Tweaks
                </p>

                {p.rating !== null && p.reviewCount !== null && (
                  <p className="mt-3 text-sm text-signal">
                    {"★".repeat(Math.round(p.rating))}
                    <span className="ml-1.5 text-muted">({p.reviewCount})</span>
                  </p>
                )}

                <p className="mt-3 text-2xl font-semibold text-white tabular-nums">
                  {p.priceLabel}
                </p>

                <div className="mt-auto pt-5">
                  <PurchaseModal
                    product={p.title}
                    price={p.price}
                    addons={p.hasAddons ? addons : undefined}
                    triggerLabel="View Details"
                    triggerClassName={`btn w-full ${
                      p.featured ? "btn-primary" : "btn-outline"
                    }`}
                  />
                </div>
              </div>
            ))}

            <div className="panel relative flex flex-col p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-signal/40">
              <span className="badge-pill absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5">
                {utility.badge}
              </span>

              <UtilityArt />

              <h2 className="mt-5 text-xl font-semibold">{utility.title}</h2>
              <p className="mt-1 text-xs tracking-widest text-muted uppercase">
                Rasx Tweaks
              </p>

              <p className="mt-3 text-2xl font-semibold text-white">
                {utility.priceLabel}
              </p>

              <div className="mt-auto pt-5">
                <a href="/downloads" className="btn btn-outline w-full">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-muted">
            Free BIOS optimization and the Rasx Utility are included with every
            package.
          </p>

          <Testimonials />
        </section>
      </main>
    </PageShell>
  );
}
