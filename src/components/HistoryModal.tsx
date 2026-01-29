"use client";

import React from 'react';
import { HistoryRecord } from '@/types';
import { X, Calendar } from 'lucide-react';

interface HistoryModalProps {
    records: HistoryRecord[];
    onClose: () => void;
}

export function HistoryModal({ records, onClose }: HistoryModalProps) {
    const sortedRecords = [...records].reverse();
    const dailyTotal = records.reduce((acc, r) => acc + r.total, 0);

    return (
        <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex flex-col animate-in fade-in duration-200">
            <div className="bg-card border-b border-white/10 p-4 flex justify-between items-center shrink-0">
                <div>
                    <h3 className="font-bold text-xl text-white">Tagesprotokoll</h3>
                    <div className="text-xs text-secondary flex items-center gap-1 mt-1">
                        <Calendar size={12} /> {new Date().toLocaleDateString('de-DE')}
                    </div>
                </div>
                <button onClick={onClose} className="text-white bg-white/10 p-2 rounded-full hover:bg-white/20">
                    <X size={24} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                {sortedRecords.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64 text-secondary">
                        <Calendar size={48} className="mb-4 opacity-20" />
                        <p>Keine Transaktionen heute.</p>
                    </div>
                ) : (
                    sortedRecords.map((record) => (
                        <div key={record.id} className="bg-card border border-white/5 p-4 rounded-xl mb-3 shadow-sm">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <span className="bg-white/10 text-white text-xs px-2 py-0.5 rounded mr-2">Tisch {record.tableId}</span>
                                    <span className="text-xs text-secondary">{record.timestamp}</span>
                                </div>
                                <span className="font-bold text-accent text-lg">{record.total.toFixed(2)} €</span>
                            </div>
                            <div className="text-sm text-gray-400 pl-2 border-l-2 border-white/10 mt-2">
                                {record.items.map(i => i.name).join(', ')}
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="p-4 bg-card border-t border-white/10 shrink-0">
                <div className="flex justify-between items-center text-xl font-bold text-white">
                    <span>Tagesumsatz:</span>
                    <span className="text-success">{dailyTotal.toFixed(2)} €</span>
                </div>
            </div>
        </div>
    );
}
