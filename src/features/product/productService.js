import axios from 'axios'
import { base_url, config } from '../../utils/axiosConfig';

const getProducts = async(userData)=>{
    const response = await axios.get(`${base_url}product/`);
    if(response.data){
        return response.data
    }
}

const getSingleProducts = async(id)=>{
    const response = await axios.get(`${base_url}product/${id}`);
    if(response.data){
        return response.data
    }
}

const AddtoWishlist = async(prodId)=>{
    const response = await axios.put(`${base_url}product/wishlist`,{prodId},config);
    if(response.data){
        return response.data
    }
}

export const productService={
    getProducts,
    AddtoWishlist,
    getSingleProducts

}