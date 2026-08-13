"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { addons as allAddons } from "../lib/site";
import { useScrollLock } from "../lib/useScrollLock";

type Addon = (typeof allAddons)[number];

export default function PurchaseModal({
  product,
  price,
  addons,
}: {
  product: string;
  price: string;
  addons?: readonly Addon[];
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  useScrollLock(open);

  const basePrice = Number(price.replace(/[^0-9.]/g, "")) || 0;
  const chosen = (addons ?? []).filter((a) => selected.includes(a.id));
  const addonTotal = chosen.reduce((sum, a) => sum + a.price, 0);
  const total = basePrice + addonTotal;

  const toggle = (addon: Addon) => {
    setSelected((current) =>
      current.includes(addon.id)
        ? current.filter((id) => id !== addon.id)
        : [...current, addon.id]
    );
  };

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
              className="panel flex max-h-[92vh] w-full max-w-4xl flex-col overflow-y-auto md:overflow-hidden"
            >
              <div className="flex flex-none items-center justify-between border-b border-line px-8 py-5">
                <h2 className="text-2xl font-black tracking-tight text-ink">
                  Complete Purchase
                </h2>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="px-2 font-mono text-2xl leading-none text-muted transition hover:text-alert"
                >
                  ×
                </button>
              </div>

              <div className="grid min-h-0 flex-1 md:grid-cols-[1.35fr_1fr]">
                <div className="p-8 md:min-h-0 md:overflow-y-auto">
                  <div className="border border-line bg-bg-raised-2 p-5">
                    <div className="flex justify-between">
                      <span className="font-mono text-xs text-muted">PACKAGE</span>
                      <span className="font-bold text-ink">{product}</span>
                    </div>

                    <div className="mt-3 flex justify-between">
                      <span className="font-mono text-xs text-muted">BASE PRICE</span>
                      <span className="font-mono font-bold text-ink tabular-nums">
                        ${basePrice}
                      </span>
                    </div>
                  </div>

                  {addons && addons.length > 0 && (
                    <div className="mt-6">
                      <span className="eyebrow">Optional Add-ons</span>
                      <p className="mt-2 text-sm text-ink-dim">
                        Pick any extras you want bundled with this package.
                      </p>

                      <div className="mt-4 space-y-2">
                        {addons.map((addon) => {
                          const isSelected = selected.includes(addon.id);
                          return (
                            <label
                              key={addon.id}
                              className={`flex cursor-pointer items-start gap-3 border p-4 transition ${
                                isSelected
                                  ? "border-signal bg-signal-dim"
                                  : "border-line bg-bg-raised-2 hover:border-line-strong"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => toggle(addon)}
                                className="mt-1 h-4 w-4 flex-none accent-[#57F0A6]"
                              />
                              <span className="flex-1">
                                <span className="flex items-baseline justify-between gap-3">
                                  <span className="font-bold text-ink">{addon.name}</span>
                                  <span className="font-mono text-sm font-bold text-signal tabular-nums">
                                    +${addon.price}
                                  </span>
                                </span>
                                <span className="mt-1 block text-sm text-ink-dim">
                                  {addon.description}
                                </span>
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t border-line p-8 md:min-h-0 md:overflow-y-auto md:border-t-0 md:border-l">
                  <span className="font-mono text-xs tracking-widest text-muted">
                    ORDER SUMMARY
                  </span>

                  <div className="mt-4 space-y-2 border-b border-line pb-4 text-sm">
                    <div className="flex justify-between gap-3">
                      <span className="text-ink-dim">{product}</span>
                      <span className="font-mono text-ink tabular-nums">${basePrice}</span>
                    </div>
                    {chosen.map((addon) => (
                      <div key={addon.id} className="flex justify-between gap-3">
                        <span className="text-ink-dim">{addon.name}</span>
                        <span className="font-mono text-signal tabular-nums">
                          +${addon.price}
                        </span>
                      </div>
                    ))}
                    {chosen.length === 0 && (
                      <p className="font-mono text-xs text-muted">No add-ons selected</p>
                    )}
                  </div>

                  <div className="mt-4 flex items-baseline justify-between">
                    <span className="font-mono text-xs tracking-widest text-muted">
                      TOTAL
                    </span>
                    <span className="font-mono text-4xl font-black text-signal tabular-nums">
                      ${total}
                    </span>
                  </div>

                  <div className="panel panel-alert mt-6 p-5 text-center">
                    <p className="font-mono text-xs tracking-widest text-alert">CASH APP</p>

                    <div className="mt-2 font-mono text-2xl font-black break-all text-alert">
                      $kendalfelixxs
                    </div>

                    <button
                      onClick={copyCashApp}
                      className="mt-4 w-full rounded-none bg-alert px-4 py-3 font-mono text-sm font-bold tracking-wide text-[#1A0E00] hover:brightness-110"
                    >
                      {copied ? "✔ Copied!" : "Copy Cash App"}
                    </button>
                  </div>

                  <p className="mt-5 text-sm text-ink-dim">
                    Send ${total} and open a Discord ticket with your payment
                    screenshot and the add-ons you picked.
                  </p>

                  <a
                    href="https://discord.gg/ZWXkTTSuc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 block w-full rounded-none bg-signal py-3 text-center font-mono text-sm font-bold tracking-wide text-[#04140D] hover:brightness-110"
                  >
                    Join Discord
                  </a>

                  <button
                    onClick={() => setOpen(false)}
                    className="mt-3 w-full border border-line py-3 font-mono text-sm font-bold text-ink hover:border-alert hover:text-alert"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
