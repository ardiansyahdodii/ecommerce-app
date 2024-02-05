import { create } from 'zustand'

export const useCartStore = create((set) => ({
    carts: [],

    addToCart: (product, id) => {
        set((state) => ({
            carts: state.carts.find((cart) => cart.id === id) ? state.carts.map((cart) => cart.id === id ? { ...cart, quantity: cart.quantity + 1 } : cart) : [...state.carts, { ...product, quantity: 1 }]
        }))
    },

    removeCart: (id) => set((state) => ({
        carts: state.carts.filter(cart => cart.id !== id)
    })),

    increseCart: (id) => set((state) => ({
        carts: state.carts.map(cart => cart.id === id ? { ...cart, quantity: cart.quantity + 1 } : cart)
    })),

    decreseCart: (id) => set((state) => ({
        carts: state.carts.map(cart => cart.id === id ? { ...cart, quantity: cart.quantity - 1 } : cart ).filter(cart => cart.quantity !== 0)
    })),

    clearCart: () => set((state) => ({
        carts: []
    })),
}))
