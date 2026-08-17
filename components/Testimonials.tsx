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
      text: "The Rasx Utility made optimizing Windows incredibly easy. Definitely worth it."
    }
  ];

  return (
    <section className="mx-auto mt-28 max-w-7xl px-6">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Reviews</span>
        <h2 className="mt-4 text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold tracking-tight">
          Trusted by Gamers
        </h2>
        <p className="mt-4 text-lg text-ink-dim">
          Real feedback from our community
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">

        {reviews.map((r) => (

          <div
            key={r.name}
            className="panel p-7 transition duration-300 hover:-translate-y-1 hover:border-signal/40"
          >
            <div className="text-lg text-signal">
              {r.rating}
            </div>

            <p className="mt-5 leading-8 text-ink-dim">
              &ldquo;{r.text}&rdquo;
            </p>

            <div className="mt-7 border-t border-line pt-5">
              <h3 className="font-semibold text-white">
                {r.name}
              </h3>

              <p className="text-xs text-muted">
                Verified Customer
              </p>
            </div>

          </div>

        ))}

      </div>
    </section>
  );
}
