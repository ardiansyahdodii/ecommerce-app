import axios from "axios"

export const getAllProduct = () => {
    const getAllProduct = axios.get("https://fakestoreapi.com/products")
    
    return getAllProduct

}