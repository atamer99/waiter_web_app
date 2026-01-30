export interface Variant {
    [key: string]: number;
}

export interface MenuItem {
    id: string;
    name: string;
    nameEn?: string;
    category: string;
    price?: number;
    variants?: Record<string, number>;
    imageUrl?: string;
    available: boolean;
    url?: string;
}

export interface MenuData {
    [category: string]: MenuItem[];
}

export interface CartItem {
    name: string;
    price: number;
    category: string;
}

export interface HistoryRecord {
    id: string;
    tableId: number;
    timestamp: string;
    items: CartItem[];
    total: number;
    tip: number;
}

export interface Table {
    id: number;
    items: CartItem[];
    tip: number;
    status: 'free' | 'busy';
    // History is removed from Table in V2
}
