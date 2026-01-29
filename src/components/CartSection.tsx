"use client";

import React from 'react';
import { CartItem } from '@/types';

interface CartSectionProps {
    tableId: number;
    items: CartItem[];
    tip: number;
    onRemoveItem: (index: number) => void;
    onUpdateTip: (amount: number) => void;
    onSave: () => void;
    onPay: () => void;
    compactHeader?: boolean;
}

export function CartSection({
    items,
    tip,
    onRemoveItem,
    onUpdateTip,
    onSave,
    onPay,
}: CartSectionProps) {
    const subTotal = items.reduce((acc, i) => acc + i.price, 0);
    const total = subTotal + tip;

    return (
        <div className="flex flex-col h-full bg-card/95 z-20">

            {/* List */}
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                {items.length === 0 ? (
                    <div className="flex items-center justify-center h-full text-gray-500 text-sm italic">
                        Wähle Artikel aus dem Menü
                    </div>
                ) : (
                    items.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0 text-lg group">
                            <span className="flex-1 truncate pr-2 text-white font-bold">{item.name}</span>
                            <div className="flex items-center gap-4">
                                <span className="font-bold text-accent text-lg">{item.price.toFixed(2)}</span>
                                <button
                                    onClick={() => onRemoveItem(idx)}
                                    className="bg-red-500/20 text-red-500 rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors active:scale-95"
                                >
                                    &times;
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Footer */}
            <div className="bg-[#151515] border-t border-white/10 p-4 shrink-0 shadow-[0_-5px_20px_rgba(0,0,0,0.4)]">
                <div className="flex justify-between text-sm mb-2 text-gray-500">
                    <span>Zwischensumme:</span>
                    <span>{subTotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
                    <span>Trinkgeld:</span>
                    <input
                        type="number"
                        value={tip > 0 ? tip : ''}
                        onChange={(e) => onUpdateTip(parseFloat(e.target.value) || 0)}
                        placeholder="0"
                        className="w-20 text-right p-1.5 border border-white/10 rounded-md bg-white/5 text-white focus:outline-none focus:border-accent"
                    />
                </div>
                <div className="flex justify-between font-bold text-2xl text-white mb-4">
                    <span>Gesamt:</span>
                    <span className="text-accent">{total.toFixed(2)} €</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <button onClick={onSave} className="bg-white/10 hover:bg-white/20 text-white py-3.5 rounded-xl font-bold transition-all">
                        Speichern
                    </button>
                    <button onClick={onPay} className="bg-accent hover:bg-orange-600 text-white py-3.5 rounded-xl font-bold shadow-[0_0_20px_rgba(211,84,0,0.4)] hover:shadow-[0_0_25px_rgba(211,84,0,0.6)] transition-all">
                        Bezahlen
                    </button>
                </div>
            </div>
        </div>
    );
}
