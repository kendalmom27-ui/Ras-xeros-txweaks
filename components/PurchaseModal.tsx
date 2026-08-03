"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

export default function PurchaseModal({
  product,
  price,
}: {
  product: string;
  price: string;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyCashApp = async () => {
    await navigator.clipboard.writeText("$kendalfelixxs");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mt-10 w-full rounded-xl bg-cyan-500 py-3 font-bold text-black transition hover:bg-cyan-400"
      >
        Purchase
      </button>

      {typeof document !== "undefined" &&
        open &&
        createPortal(
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/80 backdrop-blur-md"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-[480px] rounded-3xl border border-cyan-500/30 bg-[#090909] p-8 shadow-[0_0_60px_rgba(0,229,255,.20)]"
            >
              <h2 className="text-3xl font-black text-white">
                Complete Purchase
              </h2>

              <div className="mt-6 rounded-xl bg-white/5 p-5">
                <div className="flex justify-between">
                  <span className="text-gray-400">Product</span>
                  <span className="font-bold text-white">{product}</span>
                </div>

                <div className="mt-3 flex justify-between">
                  <span className="text-gray-400">Price</span>
                  <span className="text-2xl font-black text-cyan-400">
                    {price}
                  </span>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-green-500/30 bg-green-500/10 p-6 text-center">
                <p className="text-green-300">CASH APP</p>

                <div className="mt-2 text-4xl font-black text-green-400">
                  $kendalfelixxs
                </div>

                <button
                  onClick={copyCashApp}
                  className="mt-5 rounded-xl bg-green-500 px-6 py-3 font-bold text-black hover:bg-green-400"
                >
                  {copied ? "✔ Copied!" : "Copy Cash App"}
                </button>
              </div>

              <p className="mt-6 text-center text-gray-400">
                After sending payment, join our Discord and create a ticket with your payment screenshot.
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href="https://discord.gg/ZWXkTTSuc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-xl bg-cyan-500 py-3 text-center font-bold text-black hover:bg-cyan-400"
                >
                  Join Discord
                </a>

                <button
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-xl border border-white/20 py-3 font-bold text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

