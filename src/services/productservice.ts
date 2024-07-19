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