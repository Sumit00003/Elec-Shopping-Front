import { createSlice, createAsyncThunk , createAction } from '@reduxjs/toolkit'
import { authService } from './UserService'
import { toast } from 'react-toastify';

export const registerUser = createAsyncThunk("user/register", async(userData , thunkAPI)=>{
    try{
        return await authService.register(userData);
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})

export const loginUser = createAsyncThunk("user/login", async(userData , thunkAPI)=>{
    try{
        return await authService.login(userData);
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})

export const getUserProdwishlist = createAsyncThunk("user/wishlist", async( thunkAPI)=>{
    try{
        return await authService.getUserWishlist();
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const addProdToCart = createAsyncThunk("user/cart/add", async(cartData , thunkAPI)=>{
    try{
        return await authService.addToCart(cartData);
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const getUserCart = createAsyncThunk("user/cart/get", async( data ,thunkAPI)=>{
    try{
        return await authService.getCart(data);
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const deleteCartPRoduct = createAsyncThunk("user/cart/product/delete", async(data, thunkAPI)=>{
    try{
        return await authService.removeProdFromCart(data)
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const EmptyUserCart = createAsyncThunk("user/cart/empty", async(data ,thunkAPI)=>{
    try{
        return await authService.emptycart(data)
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const upadateCartPRoduct = createAsyncThunk("user/cart/product/update", async(cartDetail, thunkAPI)=>{
    try{
        return await authService.upadateProdFromCart(cartDetail)
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const createAorder = createAsyncThunk("user/cart/create-order", async(orderDetail, thunkAPI)=>{
    try{
        return await authService.createOrder(orderDetail)
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const GetUserOrder = createAsyncThunk("user/getmyorder", async(thunkAPI)=>{
    try{
        return await authService.getuserorder()
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const updateProfile = createAsyncThunk("user/profile-update", async(data ,thunkAPI)=>{
    try{
        return await authService.updateUser(data)
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const ForgotPasswordToken = createAsyncThunk("user/pass/token", async(data ,thunkAPI)=>{
    try{
        return await authService.forgotPasswdToken(data)
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const ResetPasswd = createAsyncThunk("user/pass/reset", async(data ,thunkAPI)=>{
    try{
        return await authService.resetPasswdToken(data)
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const resetState = createAction("Reset_all");
const getCustfromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;

const initialState={
    user:getCustfromLocalStorage,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

export const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(registerUser.pending,(state)=>{
            state.isLoading = true;
        }).addCase(registerUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.createdUser = action.payload;
            localStorage.setItem("token",action.payload.token)
            if(state.isSuccess === true){
                toast.success("User Created Successfully");
            }
        }).addCase(registerUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError === true){
                toast.error(action.payload.response.data.message);
            }

        }).addCase(loginUser.pending,(state)=>{
            state.isLoading = true;
        }).addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.user = action.payload;
            if(state.isSuccess === true){
                toast.success("User Login Successfully");
            }
        }).addCase(loginUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isError === true){
                toast.error(action.payload.response.data.message);
            }

        }).addCase(getUserProdwishlist.pending,(state)=>{
            state.isLoading = true;
        }).addCase(getUserProdwishlist.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.wishlist = action.payload;
        }).addCase(getUserProdwishlist.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;

        }).addCase(addProdToCart.pending,(state)=>{
            state.isLoading = true;
        }).addCase(addProdToCart.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.cartProduct = action.payload;
            if(state.isSuccess === true){
                toast.info("Product Added to Cart!!");}
        }).addCase(addProdToCart.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;

        }).addCase(getUserCart.pending,(state)=>{
            state.isLoading = true;
        }).addCase(getUserCart.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.cartProduct = action.payload;
        }).addCase(getUserCart.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;

        }).addCase(deleteCartPRoduct.pending,(state)=>{
            state.isLoading = true;
        }).addCase(deleteCartPRoduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.deletedCartProduct = action.payload;
            if(state.isSuccess === true){
                toast.success("Product Deleted Successfully");}
        }).addCase(deleteCartPRoduct.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isSuccess === false){
                toast.error("Something Went Wrong!!");}

        }).addCase(upadateCartPRoduct.pending,(state)=>{
            state.isLoading = true;
        }).addCase(upadateCartPRoduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.updatedCartProduct = action.payload;
            if(state.isSuccess === true){
                toast.success("Updated Cart Successfully");}
        }).addCase(upadateCartPRoduct.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isSuccess === false){
                toast.error("Something Went Wrong!!");}

        }).addCase(createAorder.pending,(state)=>{
            state.isLoading = true;
        }).addCase(createAorder.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.orderedProduct = action.payload;
            if(state.isSuccess === true){
                toast.success("Ordered Created Successfully");}
        }).addCase(createAorder.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isSuccess === false){
                toast.error("Something Went Wrong!!");}

        }).addCase(GetUserOrder.pending,(state)=>{
            state.isLoading = true;
        }).addCase(GetUserOrder.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.getorderedProduct = action.payload;
        }).addCase(GetUserOrder.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;

        }).addCase(updateProfile.pending,(state)=>{
            state.isLoading = true;
        }).addCase(updateProfile.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.updatedUSer = action.payload;
                let currentUserData = JSON.parse(localStorage.getItem('customer'))
                console.log(JSON.parse(currentUserData))
                let newUserData ={
                    _id : currentUserData?._id,
                    token:currentUserData?.token,
                    firstname:action?.payload?.firstname,
                    lastname:action?.payload?.lastname,
                    email:action?.payload?.email,
                    mobile:action?.payload?.mobile,
                }
                localStorage.setItem("customer",JSON.stringify(newUserData))
                state.user = newUserData
                toast.success("Profile Update Successfully");
        }).addCase(updateProfile.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
            if(state.isSuccess === false){
                toast.error("Something Went Wrong!!");}
            })

            .addCase(ForgotPasswordToken.pending,(state)=>{
                state.isLoading = true;
            }).addCase(ForgotPasswordToken.fulfilled,(state,action)=>{
                state.isLoading=false;
                state.isError=false;
                state.isSuccess=true;
                state.token = action.payload;
                if(state.isSuccess === true){
                    toast.success("Forgot Password Email Sent Successfully");}
            }).addCase(ForgotPasswordToken.rejected,(state,action)=>{
                state.isLoading=false;
                state.isError=true;
                state.isSuccess=false;
                state.message=action.error;
                if(state.isSuccess === false){
                    toast.error("Something Went Wrong!!");}
                })
                .addCase(ResetPasswd.pending,(state)=>{
                    state.isLoading = true;
                }).addCase(ResetPasswd.fulfilled,(state,action)=>{
                    state.isLoading=false;
                    state.isError=false;
                    state.isSuccess=true;
                    state.token = action.payload;
                    if(state.isSuccess === true){
                        toast.success("Password Update Successfully");}
                }).addCase(ResetPasswd.rejected,(state,action)=>{
                    state.isLoading=false;
                    state.isError=true;
                    state.isSuccess=false;
                    state.message=action.error;
                    if(state.isSuccess === false){
                        toast.error("Something Went Wrong!!");}
                    })
                    .addCase(EmptyUserCart.pending,(state)=>{
                        state.isLoading = true;
                    }).addCase(EmptyUserCart.fulfilled,(state,action)=>{
                        state.isLoading=false;
                        state.isError=false;
                        state.isSuccess=true;
                        state.deletedCart = action.payload;
                        
                    }).addCase(EmptyUserCart.rejected,(state,action)=>{
                        state.isLoading=false;
                        state.isError=true;
                        state.isSuccess=false;
                        state.message=action.error;
                        
                    }).addCase(resetState, () => initialState);


    }
})

export default authSlice.reducer;