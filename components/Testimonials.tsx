export default function Testimonials() {
  const reviews = [
    {
      name: "Ethan M.",
      rating: "★★★★★",
      text: "My FPS increased noticeably and my PC feels much smoother. The BIOS optimization alone made a huge difference."
    },
    {
      name: "Jordan K.",
      rating: "★★★★★",
      text: "Professional service from start to finish. Lower latency, faster boot times, and everything was explained clearly."
    },
    {
      name: "Alex R.",
      rating: "★★★★★",
      text: "The XERO'S Utility made optimizing Windows incredibly easy. Definitely worth it."
    }
  ];

  return (
    <section className="mx-auto mt-28 max-w-7xl px-6">
      <div className="text-center">
        <span className="eyebrow justify-center">Field Reports</span>
        <h2 className="mt-3.5 text-5xl font-black tracking-tight">
          Trusted by Gamers
        </h2>
        <p className="mt-4 text-ink-dim">
          Real feedback from our community.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">

        {reviews.map((r, i) => (

          <div
            key={r.name}
            className="panel p-8 transition duration-300 hover:-translate-y-1"
          >
            <span className="font-mono text-[.68rem] text-muted">
              ENTRY {String(i + 1).padStart(3, "0")}
            </span>

            <div className="mt-2 text-2xl text-signal">
              {r.rating}
            </div>

            <p className="mt-6 leading-8 text-ink-dim">
              &ldquo;{r.text}&rdquo;
            </p>

            <div className="mt-8 border-t border-line pt-5">
              <h3 className="font-bold text-ink">
                {r.name}
              </h3>

              <p className="font-mono text-xs text-muted">
                Verified Customer
              </p>
            </div>

          </div>

        ))}

      </div>
    </section>
  );
}
