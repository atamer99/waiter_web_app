"use client";

import React from 'react';
import { CartItem } from '@/types';

interface ReceiptViewProps {
    tableId: number;
    items: CartItem[];
    total: number;
    tip: number;
}

export function ReceiptView({ tableId, items, total, tip }: ReceiptViewProps) {
    const date = new Date().toLocaleString('de-DE');

    // Group items by category and then by name (to count quantities)
    const groupedItems = items.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = {};
        }
        if (!acc[item.category][item.name]) {
            acc[item.category][item.name] = 0;
        }
        acc[item.category][item.name]++;
        return acc;
    }, {} as Record<string, Record<string, number>>);

    return (
        <div id="receipt-print-area" className="hidden font-mono text-black p-4 max-w-[80mm] mx-auto bg-white">
            {/* Header */}
            <div className="text-center mb-4">
                <h2 className="text-xl font-bold uppercase tracking-wider mb-1">LE BARON</h2>
                <div className="text-xs uppercase">Lounge & Bar</div>
                <div className="text-xs mt-2 border-b border-black/20 pb-2 mb-2 w-full">Welcome to Le Baron</div>
            </div>

            {/* Meta */}
            {/* Meta */}
            <div className="flex flex-col items-center mb-4">
                <span className="text-4xl font-black my-2">TISCH {tableId}</span>
                <span className="text-xs">{date}</span>
            </div>

            {/* Items Grouped by Category */}
            <div className="text-sm mb-4 border-b border-black pb-4">
                {Object.entries(groupedItems).map(([category, itemsMap]) => (
                    <div key={category} className="mb-8">
                        <div className="font-black underline mb-4 uppercase text-2xl">
                            {category}
                        </div>

                        {Object.entries(itemsMap).map(([name, count]) => (
                            <div key={name} className="flex items-start gap-3 mb-2 pl-2">
                                <span className="font-black text-xl shrink-0">
                                    {count}×
                                </span>

                                <span className="truncate text-2xl leading-snug font-medium">
                                    {name}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>


            {/* Footer */}
            <div className="text-center mt-8 text-xs">
                <p>************</p>
                <p className="mt-1">Guten Appetit</p>
                <p>************</p>
            </div>
        </div>
    );
}
