import axios from "axios"

export const getAllProduct = async () => {
    const getAllProduct = await axios.get("https://fakestoreapi.com/products")
    
    return getAllProduct

}

export const getProductByCategory = async (category) => {
    const getProductByCategory = await axios.get(`https://fakestoreapi.com/products/category/${category}`)

    return getProductByCategory
}

export const getSingleProduct =async (id) => {
    const getSingleProduct = await axios.get(`https://fakestoreapi.com/products/${id}`)
    // console.log(getSingleProduct);
    return getSingleProduct
}