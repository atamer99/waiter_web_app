"use client";

import React, { useState } from 'react';
import { MenuItem } from '@/types'; // Import from Types mainly
import { MENU_DATA as STATIC_DATA } from '@/lib/data'; // Import data

interface MenuSectionProps {
    onAddItem: (name: string, price: number, category: string) => void;
}

const CATEGORY_COLORS: Record<string, string> = {
    "Rossa Pizza": "bg-red-600/20 text-red-500 border-red-500/50",
    "Bianca Pizza": "bg-yellow-100/10 text-yellow-200 border-yellow-200/30",
    "Dolce Pizza": "bg-pink-400/20 text-pink-400 border-pink-400/50",
    "Kinder": "bg-blue-400/20 text-blue-400 border-blue-400/50",
    "Pane": "bg-amber-700/20 text-amber-600 border-amber-600/50",
    "Antipasti": "bg-purple-500/20 text-purple-400 border-purple-400/50",
    "Di zuppe": "bg-amber-500/20 text-amber-500 border-amber-500/50",
    "Insalata": "bg-emerald-500/20 text-emerald-500 border-emerald-500/50",
    "PASTA": "bg-yellow-500/20 text-yellow-500 border-yellow-500/50",
    "Pasti speciali": "bg-indigo-500/20 text-indigo-400 border-indigo-400/50",
    "Hamburger": "bg-amber-800/20 text-amber-700 border-amber-700/50",
    "Dolce": "bg-pink-500/20 text-pink-500 border-pink-500/50",
    "Desserts": "bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-400/50",
    "Icecreme": "bg-cyan-400/20 text-cyan-400 border-cyan-400/50",
    "Milch Shake": "bg-sky-500/20 text-sky-400 border-sky-400/50",
    "Mojito": "bg-lime-500/20 text-lime-400 border-lime-400/50",
    "cocktail": "bg-orange-500/20 text-orange-400 border-orange-400/50",
    "Frischer Saft": "bg-orange-400/20 text-orange-400 border-orange-400/50",
    "kalter kaffee": "bg-stone-400/20 text-stone-300 border-stone-300/50",
    "heisse Getränke": "bg-stone-500/20 text-stone-400 border-stone-500/50",
    "Softdrinks": "bg-cyan-500/20 text-cyan-500 border-cyan-500/50",
};

export function MenuSection({ onAddItem }: MenuSectionProps) {
    const categories = Object.keys(STATIC_DATA);
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [variantModal, setVariantModal] = useState<{ item: MenuItem | null, isOpen: boolean }>({ item: null, isOpen: false });

    const handleItemClick = (item: MenuItem) => {
        if (item.variants) {
            setVariantModal({ item, isOpen: true });
        } else if (item.price !== undefined) {
            onAddItem(item.name, item.price, item.category);
        }
    };

    const closeVariantModal = () => setVariantModal({ item: null, isOpen: false });

    return (
        <div className="flex flex-col h-full bg-background/50">
            {/* Categories Scroll */}
            <div className="bg-card/50 backdrop-blur-sm p-3 flex gap-3 overflow-x-auto whitespace-nowrap shrink-0 no-scrollbar border-b border-white/5">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`
              px-5 py-3 rounded-xl text-base sm:text-lg font-bold transition-all border
              ${activeCategory === cat
                                ? (CATEGORY_COLORS[cat] || 'bg-white text-black border-white')
                                : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10'}
            `}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Items Grid */}
            <div className="flex-1 overflow-y-auto p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 content-start custom-scrollbar">
                {STATIC_DATA[activeCategory]?.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleItemClick(item)}
                        className="bg-card border border-white/5 hover:border-white/20 rounded-xl p-3 flex flex-col justify-between items-center shadow-lg min-h-[90px] active:bg-white/5 active:scale-95 transition-all text-center group"
                    >
                        <span className="text-lg sm:text-xl font-bold text-gray-200 group-hover:text-white leading-tight line-clamp-3 uppercase tracking-wide font-sans">{item.name}</span>
                        <span className="text-accent font-black text-xl sm:text-2xl mt-2 font-sans">
                            {item.price ? `${item.price.toFixed(2)} €` : '...'}
                        </span>
                    </button>
                ))}
            </div>

            {/* Variants Modal */}
            {variantModal.isOpen && variantModal.item?.variants && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-6 animate-in fade-in duration-200">
                    <div className="bg-card border border-white/10 p-6 rounded-2xl w-full max-w-sm flex flex-col shadow-2xl">
                        <h3 className="text-xl font-bold mb-6 text-center text-white">{variantModal.item.name}</h3>
                        <div className="flex flex-col gap-3">
                            {Object.entries(variantModal.item.variants).map(([vName, vPrice]) => (
                                <button
                                    key={vName}
                                    onClick={() => {
                                        onAddItem(`${variantModal.item!.name} (${vName})`, vPrice, variantModal.item!.category);
                                        closeVariantModal();
                                    }}
                                    className="bg-white/5 hover:bg-accent text-white py-4 rounded-xl transition-colors flex justify-between px-6 font-medium border border-white/5"
                                >
                                    <span>{vName}</span>
                                    <span>{vPrice.toFixed(2)} €</span>
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={closeVariantModal}
                            className="mt-6 py-3 text-gray-500 hover:text-white transition-colors"
                        >
                            Abbrechen
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
