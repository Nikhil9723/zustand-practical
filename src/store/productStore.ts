import { create } from "zustand";

export type ProductData = {
    id: number,
    title: string,
}

interface CartStore {
    cart: ProductData[] | [],
    addCart: (product: ProductData) => void,
    removeCart: (productId: number) => void,
    clearCart: () => void,
}

export const useCartStore = create<CartStore>((set) => ({
    cart: [],
    addCart: (product) => set((state) => ({cart: [...state.cart, product]})),
    removeCart: (productId) => set((state) => ({cart: state.cart.filter(product => product.id !== productId)})),
    clearCart: () => set({cart: []}),
}));
