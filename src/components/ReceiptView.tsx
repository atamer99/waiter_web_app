"use client";

import React from "react";
import { CartItem } from "@/types";

interface ReceiptViewProps {
  tableId: number;
  items: CartItem[];
  total: number;
  tip: number;
}

export function ReceiptView({ tableId, items, total, tip }: ReceiptViewProps) {
  const date = new Date().toLocaleString("de-DE");

  // Group items by category and then by name
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = {};
    if (!acc[item.category][item.name]) acc[item.category][item.name] = 0;
    acc[item.category][item.name]++;
    return acc;
  }, {} as Record<string, Record<string, number>>);

  return (
    <div
      id="receipt-print-area"
      className="hidden font-mono text-black p-4 max-w-[80mm] mx-auto bg-white"
      style={
        {
          "--t-xs": "0.7rem",
          "--t-sm": "0.85rem",
          "--t-md": "1rem",
          "--t-lg": "1.35rem",
          "--t-xl": "1.6rem",
          "--t-xxl": "2.2rem",
        } as React.CSSProperties
      }
    >
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="font-bold uppercase tracking-wider mb-1 text-[var(--t-lg)]">
          LE BARON
        </h2>
        <div className="uppercase text-[var(--t-xs)]">Lounge & Bar</div>
        <div className="mt-2 border-b border-black/20 pb-2 mb-2 w-full text-[var(--t-xs)]">
          Welcome to Le Baron
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-col items-center mb-4">
        <span className="font-black my-2 text-[var(--t-xxl)]">
          TISCH {tableId}
        </span>
        <span className="text-[var(--t-xs)]">{date}</span>
      </div>

      {/* Items */}
      <div className="mb-4 border-b border-black pb-4">
        {Object.entries(groupedItems).map(([category, itemsMap]) => (
          <div key={category} className="mb-8">
            {/* Category — smaller */}
            <div className="font-black underline mb-3 uppercase text-[var(--t-md)]">
              {category}
            </div>

            {Object.entries(itemsMap).map(([name, count]) => (
              <div
                key={name}
                className="flex items-start gap-3 mb-3 pl-2"
              >
                {/* Quantity — bigger */}
                <span className="font-black shrink-0 text-[var(--t-xl)]">
                  {count}×
                </span>

                {/* Item name — bigger */}
                <span className="truncate leading-snug font-medium text-[var(--t-xl)]">
                  {name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-[var(--t-xs)]">
        <p>************</p>
        <p className="mt-1">Guten Appetit</p>
        <p>************</p>
      </div>
    </div>
  );
}
