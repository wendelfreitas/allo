"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MenuItem, CartItem } from "../app/api/_data/types";

interface CartState {
  items: CartItem[];
  restaurantId: string | null;
  restaurantName: string | null;
  isOpen: boolean;

  addItem: (menuItem: MenuItem, restaurantId: string, restaurantName: string) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  getItemCount: () => number;
  getSubtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      restaurantId: null,
      restaurantName: null,
      isOpen: false,

      addItem: (menuItem: MenuItem, restaurantId: string, restaurantName: string) => {
        const state = get();

        if (state.restaurantId && state.restaurantId !== restaurantId) {
          // Will be handled by UI with a confirmation dialog
          return;
        }

        const existingItem = state.items.find(
          (item) => item.menuItem.id === menuItem.id
        );

        if (existingItem) {
          set({
            items: state.items.map((item) =>
              item.menuItem.id === menuItem.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                    totalPrice: (item.quantity + 1) * item.menuItem.price,
                  }
                : item
            ),
          });
        } else {
          set({
            items: [
              ...state.items,
              {
                id: `cart-${menuItem.id}-${Date.now()}`,
                menuItem,
                quantity: 1,
                totalPrice: menuItem.price,
              },
            ],
            restaurantId,
            restaurantName,
          });
        }
      },

      removeItem: (itemId: string) => {
        const state = get();
        const newItems = state.items.filter((item) => item.id !== itemId);
        set({
          items: newItems,
          restaurantId: newItems.length > 0 ? state.restaurantId : null,
          restaurantName: newItems.length > 0 ? state.restaurantName : null,
        });
      },

      updateQuantity: (itemId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }
        set({
          items: get().items.map((item) =>
            item.id === itemId
              ? {
                  ...item,
                  quantity,
                  totalPrice: quantity * item.menuItem.price,
                }
              : item
          ),
        });
      },

      clearCart: () =>
        set({
          items: [],
          restaurantId: null,
          restaurantName: null,
        }),

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set({ isOpen: !get().isOpen }),

      getItemCount: () =>
        get().items.reduce((sum, item) => sum + item.quantity, 0),

      getSubtotal: () =>
        get().items.reduce((sum, item) => sum + item.totalPrice, 0),
    }),
    {
      name: "allo-cart",
      partialize: (state) => ({
        items: state.items,
        restaurantId: state.restaurantId,
        restaurantName: state.restaurantName,
      }),
    }
  )
);
