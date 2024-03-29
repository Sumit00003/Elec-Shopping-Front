import axios from 'axios'
import { base_url } from '../../utils/axiosConfig';

const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
 
};

const register = async(userData)=>{
    const response = await axios.post(`${base_url}user/register`,userData);
    if(response.data){
       return response.data
    }}


const login = async(userData)=>{
    const response = await axios.post(`${base_url}user/login`,userData);
    if(response.data){
        localStorage.setItem("customer", JSON.stringify(response.data));
    }
        return response.data
    }

const getUserWishlist = async()=>{
    const response = await axios.get(`${base_url}user/get-wishlist`,config);
    if(response.data){
        return response.data
        }
    }
    
const addToCart = async (cartData) => {
    const response = await axios.post(`${base_url}user/cart`, cartData, config);
    if (response.data) {
        return response.data
    }
}
const getCart = async (data) => {
    const response = await axios.get(`${base_url}user/cart`, data, config);
    if (response.data) {
        return response.data
    }
}
const emptycart = async (data) => {
    const response = await axios.delete(`${base_url}user/emptycart`,data,config);
    if (response.data) {
        return response.data
    }
}
const removeProdFromCart = async (data) => {
    const response = await axios.delete(`${base_url}user/delete-product-cart/${data.id}`, data.config2);
    if (response.data) {
        return response.data
    }
}
const upadateProdFromCart = async (cartDetail) => {
    const response = await axios.delete(`${base_url}user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`, config);
    if (response.data) {
        return response.data
    }
}
const createOrder = async (orderDetail) => {
    const response = await axios.post(`${base_url}user/cart/create-order`,orderDetail, config);
    if (response.data) {
        return response.data
    }
}
const getuserorder = async () => {
    const response = await axios.get(`${base_url}user/getmyorder`, config);
    if (response.data) {
        return response.data
    }
}

const updateUser = async (data) => {
    const response = await axios.put(`${base_url}user/edit-user`, data.data , data.config2);
    if (response.data) {
        return response.data
    }
}

const forgotPasswdToken = async (data) => {
    const response = await axios.post(`${base_url}user/forgot-password-token`, data );
    if (response.data) {
        return response.data
    }
}
const resetPasswdToken = async (data) => {
    const response = await axios.put(`${base_url}user/reset-password/${data.token}`, {password:data?.password});
    if (response.data) {
        return response.data
    }
}
export const authService={
    register,
    login,
    getUserWishlist,
    addToCart,getCart,
    upadateProdFromCart,
    removeProdFromCart,
    createOrder,
    getuserorder,
    updateUser,
    forgotPasswdToken,
    resetPasswdToken,
    emptycart
}