"use client";

import React, { useState } from 'react';
import { CartItem } from '@/types';
import { MenuSection } from '@/components/MenuSection';
import { CartSection } from '@/components/CartSection';
import { ChevronLeft, Printer } from 'lucide-react';

interface OrderModalProps {
    tableId: number;
    items: CartItem[];
    tip: number;
    onAddItem: (name: string, price: number, category: string) => void;
    onRemoveItem: (index: number) => void;
    onUpdateTip: (amount: number) => void;
    onSave: () => void;
    onPay: () => void;
}

export function OrderModal({
    tableId,
    items,
    tip,
    onAddItem,
    onRemoveItem,
    onUpdateTip,
    onSave,
    onPay
}: OrderModalProps) {

    const handlePrint = () => {
        window.print();
    };

    const total = items.reduce((acc, i) => acc + i.price, 0) + tip;

    return (
        <div className="fixed inset-0 z-50 bg-background flex flex-col h-full w-full animate-in slide-in-from-bottom duration-300">

            {/* 1. Navbar */}
            <div className="bg-card border-b border-white/10 p-3 flex justify-between items-center shrink-0 z-20 shadow-md">
                <button
                    onClick={onSave}
                    className="bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors"
                >
                    <ChevronLeft size={18} /> Zurück
                </button>

                <div className="flex flex-col items-center">
                    <span className="text-white font-bold">Tisch {tableId}</span>
                    <span className="text-xs text-accent">{total.toFixed(2)} €</span>
                </div>

                <button
                    onClick={handlePrint}
                    className="bg-accent text-white px-3 py-2 rounded-lg hover:bg-orange-600 transition-colors shadow-sm flex items-center gap-2 shrink-0"
                    title="Rechnung drucken"
                >
                    <Printer size={20} />
                    <span className="hidden sm:inline font-bold">Drucken</span>
                </button>
            </div>

            {/* 2. Main Content Split */}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
                {/* Menu (Top on Mobile, Left on Desktop) */}
                <div className="flex-1 overflow-hidden relative z-10">
                    <MenuSection onAddItem={onAddItem} />
                </div>

                {/* Cart (Bottom on Mobile, Right on Desktop) */}
                <div className="h-[50%] md:h-full md:w-[400px] border-t md:border-t-0 md:border-l border-white/10 bg-card z-20 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
                    <CartSection
                        tableId={tableId}
                        items={items}
                        tip={tip}
                        onRemoveItem={onRemoveItem}
                        onUpdateTip={onUpdateTip}
                        onSave={onSave}
                        onPay={onPay}
                        compactHeader={true}
                    />
                </div>
            </div>

            {/* 3. Hidden Receipt Removed from here. It is now at Page level for better printing support */}
        </div>
    );
}
