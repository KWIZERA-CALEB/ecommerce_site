import axios from 'axios'
import { Product } from '../utils/producttypes'

const APP_URL = import.meta.env.VITE_APP_API_URL

export const fetchProducts = async (): Promise<Product[]>=> {
    try {
        const response = await axios.get(`${APP_URL}/products`)
        return response.data.product
    }catch (error){
        console.log(`Failed to fetch products ${error}`)
        throw error
    }
}

export const createProduct = async (formData: FormData)=> {
    try{
        const response = await axios.post(`${APP_URL}/products/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log("Products Added")
        console.log(response.data)
    }catch(error) {
        console.log(`Error ocurred ${error}`)
        throw error
    }
}

export const deleteProduct = async (id: number)=> {
    try {
        const response = await axios.delete(`${APP_URL}/product/delete/${id}`)
        return response
    }catch(error) {
        console.log(`Error occured ${error}`)
        throw error
    }
}