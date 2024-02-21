import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { productService } from './productService';

export const getAllproducts = createAsyncThunk("product/get", async(thunkAPI)=>{
    try{
        return await productService.getProducts();
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const getAproducts = createAsyncThunk("product/getAproduct", async(id , thunkAPI)=>{
    try{
        return await productService.getSingleProducts(id);
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const addtoWishlist = createAsyncThunk("product/wishlist", async(prodId , thunkAPI)=>{
    try{
        return await productService.AddtoWishlist(prodId);
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})

const productState={
    product:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

export const productSlice = createSlice({
    name:"product",
    initialState:productState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(getAllproducts.pending,(state)=>{
            state.isLoading = true;
        }).addCase(getAllproducts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.product = action.payload;
        }).addCase(getAllproducts.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;

        }).addCase(addtoWishlist.pending,(state)=>{
            state.isLoading = true;
        }).addCase(addtoWishlist.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.addtoWishlist = action.payload;
            state.message="Product Added to Wishlist!!"
        }).addCase(addtoWishlist.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;

        }).addCase(getAproducts.pending,(state)=>{
            state.isLoading = true;
        }).addCase(getAproducts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.singleproduct = action.payload;
            state.message="Product Fetch Successfully!!"
        }).addCase(getAproducts.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
})
}})


export default productSlice.reducer;