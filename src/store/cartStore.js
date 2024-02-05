import { create } from 'zustand'

export const useCartStore = create((set) => ({
    cart: [],
    // setCart: (cart) => set((state) => ({ cart: cart })),
    addToCart: (product) => set((state) => (console.log(state))),
}))
