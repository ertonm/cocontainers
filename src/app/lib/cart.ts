import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;           // containerId-condition-color
  containerId: number;
  name: string;
  size: string;
  color: string;
  condition: 'new' | 'used';
  price: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  getTotal: () => number;
  clearCart: () => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (newItem) => {
        const existing = get().items.find(
          i => i.id === `${newItem.containerId}-${newItem.condition}-${newItem.color}`
        );
        if (existing) {
          set({
            items: get().items.map(i =>
              i.id === existing.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
          });
        } else {
          set({ items: [...get().items, { ...newItem, quantity: 1 }] });
        }
      },
      updateQuantity: (id, quantity) =>
        set({
          items: get().items.map(i => (i.id === id ? { ...i, quantity } : i)),
        }),
      removeItem: (id) => set({ items: get().items.filter(i => i.id !== id) }),
      getTotal: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      clearCart: () => set({ items: [] }),
    }),
    { name: 'co-cart' }
  )
);