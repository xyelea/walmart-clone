import { create } from "zustand";
import { Product } from "./typings/productTypings";
import { devtools, persist } from "zustand/middleware";

interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        addToCart: (product) => {
          set((state) => ({
            cart: [...state.cart, product],
          }));
        },
        removeFromCart: (product) => {
          const productToRemove = get().cart.findIndex(
            (p) => p.meta.sku === product.meta.sku
          );

          set((state) => {
            const newCart = [...state.cart];
            newCart.splice(productToRemove, 1);
            return {
              cart: newCart,
            };
          });
        },
      }),
      { name: "shopping-cart-storage" }
    )
  )
);
