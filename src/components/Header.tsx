"use client";

import React from 'react';
import { RotateCw, FileText } from 'lucide-react';

interface HeaderProps {
    onReset: () => void;
    onShowHistory: () => void;
}

export function Header({ onReset, onShowHistory }: HeaderProps) {
    return (
        <header className="bg-white/5 backdrop-blur-md border-b border-white/10 p-4 shrink-0 z-40 sticky top-0 flex justify-between items-center h-[90px]">
            <button
                onClick={onReset}
                className="text-gray-400 hover:text-white transition-colors bg-white/5 p-3 rounded-lg"
            >
                <RotateCw size={20} />
            </button>

            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold tracking-widest uppercase text-white font-serif">
                    LE BARON
                </h1>
                <span className="text-[10px] text-accent tracking-[5px] uppercase mt-1">Lounge & Bar</span>
            </div>

            <button
                onClick={onShowHistory}
                className="text-gray-400 hover:text-white transition-colors bg-white/5 p-3 rounded-lg"
            >
                <FileText size={20} />
            </button>
        </header>
    );
}
