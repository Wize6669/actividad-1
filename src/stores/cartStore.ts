import { create } from 'zustand';
import type { CartItem } from '../models/CartItem.ts';

interface CartState {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addToCart: (item) => {
    const items = get().items;
    const existingItem = items.find(i => i.id === item.id);

    if (existingItem) {
      set({
        items: items.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        ),
      });
    } else {
      set({ items: [...items, item] });
    }
  },

  removeFromCart: (id) => {
    set({ items: get().items.filter(i => i.id !== id) });
  },

  clearCart: () => {
    set({ items: [] });
  },

  increaseQuantity: (id) => {
    set({
      items: get().items.map(i =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      ),
    });
  },

  decreaseQuantity: (id) => {
    set({
      items: get().items
        .map(i => i.id === id ? { ...i, quantity: i.quantity - 1 } : i)
        .filter(i => i.quantity > 0),
    });
  },

  totalPrice: () => {
    return get().items.reduce((acc, item) => {
      const price = item.discount
        ? item.price * (1 - item.discount)
        : item.price;
      return acc + price * item.quantity;
    }, 0);
  },
}));
