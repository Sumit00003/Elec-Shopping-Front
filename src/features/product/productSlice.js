import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { productService } from './productService';
import { toast } from 'react-toastify';

export const getAllproducts = createAsyncThunk("product/get", async(data , thunkAPI)=>{
    try{
        return await productService.getProducts(data);
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
export const addRating = createAsyncThunk("product/rating", async(data , thunkAPI)=>{
    try{
        return await productService.rateProduct(data);
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
        .addCase(addRating.pending,(state)=>{
            state.isLoading = true;
        }).addCase(addRating.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.rating = action.payload;
            state.message="Rating Added Successfully!!"
            if(state.isSuccess){
                toast.success("Rating Added Successfully!!")
            }
        }).addCase(addRating.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError){
                toast.error("Something Wrong!")
            }

        })
}})


export default productSlice.reducer;