import axios from "axios"

export const getAllProduct = () => {
    const getAllProduct = axios.get("https://fakestoreapi.com/products")
    
    return getAllProduct

}

export const getProductByCategory = (category) => {
    const getProductByCategory = axios.get(`https://fakestoreapi.com/products/category/${category}`)

    return getProductByCategory
}