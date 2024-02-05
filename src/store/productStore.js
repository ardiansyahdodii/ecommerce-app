import axios from 'axios'
import { create } from 'zustand'

export const useProductStore = create((set) => ({
    categoryValue: '',
    changeCategoryValue: (value) => set((state) => ({ categoryValue: value })),

    products: [],

    getAllProduct: async () => {
        const getAllProduct = await axios.get("https://fakestoreapi.com/products")
        set((state) => ({ products: getAllProduct.data }))
    },

    getProductByCategory: async (category) => {
        const getProductByCategory = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        set((state) => ({ products: getProductByCategory.data }))
    }
}))