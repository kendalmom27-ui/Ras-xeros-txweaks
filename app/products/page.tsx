import PageShell from "../../components/PageShell";
import PurchaseModal from "../../components/PurchaseModal";
import ProductBox from "../../components/ProductBox";
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
        <section className="mx-auto max-w-6xl px-6 pb-24 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
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

                <div className="aspect-square rounded-xl bg-white/[.03] p-4">
                  <ProductBox name={p.title} />
                </div>

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

              <div className="aspect-square rounded-xl bg-white/[.03] p-4">
                <ProductBox name={utility.title} />
              </div>

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
