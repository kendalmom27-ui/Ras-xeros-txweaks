"use client";

import { motion } from "framer-motion";
import { gameBenchmarks } from "../../lib/site";

export default function GameBenchmarks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            Tests in Your Favorite Games
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            See the real performance gains with our optimization tweaks
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gameBenchmarks.map((bench, index) => (
            <motion.div
              key={bench.game}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold">{bench.game}</h3>
                <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-bold text-green-400">
                  +{bench.boost}%
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-gray-400">With Tweaks</span>
                    <span className="font-bold text-cyan-400">
                      {bench.withTweaks} FPS
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-cyan-500"
                      style={{
                        width: `${Math.min(100, (bench.withTweaks / 1200) * 100)}%`,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-gray-400">Without</span>
                    <span className="font-bold text-gray-500">
                      {bench.without} FPS
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gray-600"
                      style={{
                        width: `${Math.min(100, (bench.without / 1200) * 100)}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Tested on i7 12700KF • RTX 3070 • 32GB DDR4 4000MHz
        </p>
      </div>
    </section>
  );
}
