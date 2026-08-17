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
  triggerLabel = "Purchase →",
  triggerClassName = "btn btn-primary mt-10 w-full",
}: {
  product: string;
  price: string;
  addons?: readonly Addon[];
  triggerLabel?: string;
  triggerClassName?: string;
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
    await navigator.clipboard.writeText("$kendalfelixxxs");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className={triggerClassName}>
        {triggerLabel}
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
                <h2 className="text-2xl font-semibold tracking-tight">
                  Complete Purchase
                </h2>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="px-2 text-2xl leading-none text-muted transition hover:text-white"
                >
                  ×
                </button>
              </div>

              <div className="grid min-h-0 flex-1 md:grid-cols-[1.35fr_1fr]">
                <div className="p-8 md:min-h-0 md:overflow-y-auto">
                  <div className="rounded-xl border border-line bg-white/[.04] p-5">
                    <div className="flex justify-between">
                      <span className="text-xs text-muted">Package</span>
                      <span className="font-semibold text-white">{product}</span>
                    </div>

                    <div className="mt-3 flex justify-between">
                      <span className="text-xs text-muted">Base price</span>
                      <span className="font-semibold text-white tabular-nums">
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
                                  ? "rounded-xl border-signal bg-signal-dim"
                                  : "rounded-xl border-line bg-white/[.04] hover:border-line-strong"
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
                                  <span className="font-semibold text-white">{addon.name}</span>
                                  <span className="text-sm font-semibold text-signal tabular-nums">
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
                  <span className="eyebrow">Order Summary</span>

                  <div className="mt-4 space-y-2 border-b border-line pb-4 text-sm">
                    <div className="flex justify-between gap-3">
                      <span className="text-ink-dim">{product}</span>
                      <span className="text-ink tabular-nums">${basePrice}</span>
                    </div>
                    {chosen.map((addon) => (
                      <div key={addon.id} className="flex justify-between gap-3">
                        <span className="text-ink-dim">{addon.name}</span>
                        <span className="text-signal tabular-nums">
                          +${addon.price}
                        </span>
                      </div>
                    ))}
                    {chosen.length === 0 && (
                      <p className="text-xs text-muted">No add-ons selected</p>
                    )}
                  </div>

                  <div className="mt-4 flex items-baseline justify-between">
                    <span className="text-xs tracking-widest text-muted uppercase">
                      Total
                    </span>
                    <span className="bg-gradient-to-r from-signal-light to-signal bg-clip-text text-4xl font-bold text-transparent tabular-nums">
                      ${total}
                    </span>
                  </div>

                  <div className="panel panel-alert mt-6 p-5 text-center">
                    <p className="text-xs tracking-widest text-signal uppercase">
                      Cash App
                    </p>

                    <div className="mt-2 text-2xl font-semibold break-all text-white">
                      $kendalfelixxxs
                    </div>

                    <button
                      onClick={copyCashApp}
                      className="btn btn-primary mt-4 w-full"
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
                    className="btn btn-primary mt-5 w-full"
                  >
                    Join Discord
                  </a>

                  <button
                    onClick={() => setOpen(false)}
                    className="btn btn-ghost mt-3 w-full"
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
