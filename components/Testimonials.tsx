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
        <p className="text-cyan-400 font-bold tracking-[0.3em] uppercase">
          Testimonials
        </p>

        <h2 className="mt-4 text-5xl font-black">
          Trusted by Gamers
        </h2>

        <p className="mt-4 text-gray-400">
          Real feedback from our community.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">

        {reviews.map((r) => (

          <div
            key={r.name}
            className="rounded-3xl border border-white/10 bg-[#090909] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[0_0_35px_rgba(0,229,255,.18)]"
          >

            <div className="text-2xl text-yellow-400">
              {r.rating}
            </div>

            <p className="mt-6 leading-8 text-gray-300">
              &ldquo;{r.text}&rdquo;
            </p>

            <div className="mt-8 border-t border-white/10 pt-5">
              <h3 className="font-bold text-white">
                {r.name}
              </h3>

              <p className="text-sm text-cyan-400">
                Verified Customer
              </p>
            </div>

          </div>

        ))}

      </div>
    </section>
  );
}
