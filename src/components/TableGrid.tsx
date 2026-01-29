"use client";

import React from 'react';
import { Table } from '@/types';
import { Users } from 'lucide-react';

interface TableGridProps {
    tables: Table[];
    onTableClick: (id: number) => void;
}

export function TableGrid({ tables, onTableClick }: TableGridProps) {
    return (
        <div className="p-4 overflow-y-auto grow custom-scrollbar">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 pb-20">
                {tables.map((table) => {
                    const hasItems = table.items.length > 0;
                    const subTotal = table.items.reduce((acc, item) => acc + item.price, 0);
                    const total = subTotal + (table.tip || 0);

                    return (
                        <button
                            key={table.id}
                            onClick={() => onTableClick(table.id)}
                            className={`
                relative h-32 rounded-xl flex flex-col justify-center items-center transition-all duration-200 active:scale-95
                ${hasItems
                                    ? 'bg-card border border-accent/40 shadow-[0_0_15px_rgba(211,84,0,0.15)]'
                                    : 'bg-card border border-glass-border shadow-sm hover:border-white/20'}
              `}
                        >
                            {/* Status Indicator Dot */}
                            <div className={`absolute top-3 right-3 w-3 h-3 rounded-full ${hasItems ? 'bg-accent animate-pulse' : 'bg-success'}`} />

                            <div className="flex flex-col items-center gap-1">
                                <Users size={20} className={hasItems ? 'text-accent' : 'text-gray-500'} />
                                <span className="text-2xl font-bold mt-1 text-white">Tisch {table.id}</span>
                            </div>

                            {hasItems ? (
                                <div className="mt-2 text-lg font-bold text-accent">
                                    {total.toFixed(2)} €
                                </div>
                            ) : (
                                <span className="text-xs text-gray-500 mt-2">Frei</span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
