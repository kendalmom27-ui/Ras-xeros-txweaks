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
        className="mt-10 w-full rounded-none bg-signal py-3 font-mono text-sm font-bold tracking-wide text-[#04140D] transition hover:brightness-110"
      >
        PURCHASE →
      </button>

      {typeof document !== "undefined" &&
        open &&
        createPortal(
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[999999] flex items-center justify-center bg-bg/90 p-4 backdrop-blur-md"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="panel max-h-[90vh] w-[480px] max-w-full overflow-y-auto p-8"
            >
              <h2 className="text-3xl font-black tracking-tight text-ink">
                Complete Purchase
              </h2>

              <div className="mt-6 border border-line bg-bg-raised-2 p-5">
                <div className="flex justify-between">
                  <span className="font-mono text-xs text-muted">PRODUCT</span>
                  <span className="font-bold text-ink">{product}</span>
                </div>

                <div className="mt-3 flex justify-between">
                  <span className="font-mono text-xs text-muted">PRICE</span>
                  <span className="font-mono text-2xl font-black text-signal">
                    {price}
                  </span>
                </div>
              </div>

              <div className="panel panel-alert mt-6 p-6 text-center">
                <p className="font-mono text-xs tracking-widest text-alert">CASH APP</p>

                <div className="mt-2 font-mono text-3xl font-black text-alert">
                  $kendalfelixxs
                </div>

                <button
                  onClick={copyCashApp}
                  className="mt-5 rounded-none bg-alert px-6 py-3 font-mono text-sm font-bold tracking-wide text-[#1A0E00] hover:brightness-110"
                >
                  {copied ? "✔ Copied!" : "Copy Cash App"}
                </button>
              </div>

              <p className="mt-6 text-center text-sm text-ink-dim">
                After sending payment, join our Discord and create a ticket with your payment screenshot.
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href="https://discord.gg/ZWXkTTSuc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-none bg-signal py-3 text-center font-mono text-sm font-bold tracking-wide text-[#04140D] hover:brightness-110"
                >
                  Join Discord
                </a>

                <button
                  onClick={() => setOpen(false)}
                  className="flex-1 border border-line py-3 font-mono text-sm font-bold text-ink hover:border-alert hover:text-alert"
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
