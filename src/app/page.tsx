"use client";

import React, { useEffect, useState } from 'react';
import { Table, HistoryRecord } from '@/types';
import { TOTAL_TABLES, STORAGE_KEY } from '@/lib/data';
import { Header } from '@/components/Header';
import { TableGrid } from '../components/TableGrid';
import { OrderModal } from '@/components/OrderModal';
import { HistoryModal } from '@/components/HistoryModal';
import { ReceiptView } from '@/components/ReceiptView';

// Separate storage key for history to avoid data loss on table reset
const HISTORY_STORAGE_KEY = 'lebaron_pos_v2_history';

export default function Home() {
  const [tables, setTables] = useState<Record<number, Table>>({});
  const [history, setHistory] = useState<HistoryRecord[]>([]);
  const [activeTableId, setActiveTableId] = useState<number | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from Storage
  useEffect(() => {
    const storedTables = localStorage.getItem(STORAGE_KEY);
    const storedHistory = localStorage.getItem(HISTORY_STORAGE_KEY);

    if (storedTables) {
      setTables(JSON.parse(storedTables));
    } else {
      initializeTables();
    }

    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }

    setIsLoaded(true);
  }, []);

  // Save to Storage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tables));
      localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history));
    }
  }, [tables, history, isLoaded]);

  const initializeTables = () => {
    const initial: Record<number, Table> = {};
    for (let i = 1; i <= TOTAL_TABLES; i++) {
      initial[i] = { id: i, items: [], tip: 0, status: 'free' };
    }
    setTables(initial);
  };

  const handleReset = () => {
    if (confirm("ALLES LÖSCHEN? (Tables & History)")) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(HISTORY_STORAGE_KEY);
      initializeTables();
      setHistory([]);
      setActiveTableId(null);
    }
  };

  const updateTable = (id: number, updates: Partial<Table>) => {
    setTables(prev => ({
      ...prev,
      [id]: { ...prev[id], ...updates }
    }));
  };

  const handleAddItem = (name: string, price: number, category: string) => {
    if (activeTableId === null) return;
    const current = tables[activeTableId];
    const newItems = [...current.items, { name, price, category }];
    updateTable(activeTableId, { items: newItems, status: 'busy' });
  };

  const handleRemoveItem = (index: number) => {
    if (activeTableId === null) return;
    const current = tables[activeTableId];
    const newItems = [...current.items];
    newItems.splice(index, 1);
    updateTable(activeTableId, { items: newItems, status: newItems.length > 0 ? 'busy' : 'free' });
  };

  const handleUpdateTip = (amount: number) => {
    if (activeTableId === null) return;
    updateTable(activeTableId, { tip: amount });
  };

  const handlePay = () => {
    if (activeTableId === null) return;
    const t = tables[activeTableId];
    if (t.items.length === 0) {
      setActiveTableId(null);
      return;
    }

    if (confirm(`Tisch ${activeTableId} abrechnen?`)) {
      const total = t.items.reduce((acc, i) => acc + i.price, 0) + (t.tip || 0);

      const record: HistoryRecord = {
        id: Date.now().toString(),
        tableId: activeTableId,
        timestamp: new Date().toLocaleString('de-DE'),
        items: [...t.items],
        total: total,
        tip: t.tip
      };

      // Update History Global State
      setHistory(prev => [...prev, record]);

      // Clear Table
      updateTable(activeTableId, {
        items: [],
        tip: 0,
        status: 'free'
      });
      setActiveTableId(null);
    }
  };

  // Convert map to array for Grid
  const tablesList = Object.values(tables).sort((a, b) => a.id - b.id);

  if (!isLoaded) return null; // Prevent hydration mismatch

  return (
    <>
      <main className="flex flex-col h-screen bg-background text-foreground">
        <Header
          onReset={handleReset}
          onShowHistory={() => setShowHistory(true)}
        />

        <TableGrid
          tables={tablesList}
          onTableClick={setActiveTableId}
        />

        {/* Order Modal (Fullscreen) */}
        {activeTableId !== null && (
          <OrderModal
            tableId={activeTableId}
            items={tables[activeTableId].items}
            tip={tables[activeTableId].tip}
            onAddItem={handleAddItem}
            onRemoveItem={handleRemoveItem}
            onUpdateTip={handleUpdateTip}
            onSave={() => setActiveTableId(null)}
            onPay={handlePay}
          />
        )}

        {/* History Modal (Global, Fullscreen) */}
        {showHistory && (
          <HistoryModal
            records={history}
            onClose={() => setShowHistory(false)}
          />
        )}
      </main>

      {/* Global Receipt View (Hidden until printed) - Moved outside main for correct print visibility */}
      {activeTableId !== null && (
        <ReceiptView
          tableId={activeTableId}
          items={tables[activeTableId].items}
          total={tables[activeTableId].items.reduce((a, b) => a + b.price, 0) + (tables[activeTableId].tip || 0)}
          tip={tables[activeTableId].tip}
        />
      )}
    </>
  );
}
