import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { blogService } from './blogsService'

export const getAllblogs = createAsyncThunk("blogs/get", async(thunkAPI)=>{
    try{
        return await blogService.getBlogs();
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const getAblog = createAsyncThunk("blog/get", async(id , thunkAPI)=>{
    try{
        return await blogService.getABlog(id)
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})

const BlogState={
    blog:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

export const BlogSlice = createSlice({
    name:"blog",
    initialState:BlogState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(getAllblogs.pending,(state)=>{
            state.isLoading = true;
        }).addCase(getAllblogs.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.blog = action.payload;
        }).addCase(getAllblogs.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        }).addCase(getAblog.pending,(state)=>{
            state.isLoading = true;
        }).addCase(getAblog.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.singleblog = action.payload;
        }).addCase(getAblog.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        })
}
})

export default BlogSlice.reducer;