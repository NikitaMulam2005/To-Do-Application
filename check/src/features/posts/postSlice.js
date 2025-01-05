import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const baseURL = 'http://localhost:5000/notes'
const initialState = {
    posts: [],
    status: 'idle',
    error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    return new Promise((resolve)=>{
        setTimeout(async()=>{
        const response = await axios.get(baseURL)
        resolve(response.data)
      },2000)
        }
    )
    
})

export const addPost = createAsyncThunk('posts/addPost', async (postData) => {
    const response = await axios.post(baseURL, postData)
    return response.data
})

export const updatePost = createAsyncThunk('posts/updatePost', async (updatedData) => {
    const response = await axios.put(`${baseURL}/${updatedData._id}`,updatedData)
    return response.data
})
export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
    const response = await axios.delete(`${baseURL}/${id}`)
    return id
})
const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducer: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                console.log("fetching..")
                state.status = "loading",
                    state.error = null
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.posts=action.payload
                state.status="succeeded",
                state.error=null

            })
            .addCase(fetchPosts.rejected, (state, action)=>{
                state.status="failed",
                state.error=action.error.message
            })
            .addCase(addPost.fulfilled, (state, action)=>{
                  state.posts.push(action.payload)
    })
            .addCase(updatePost.fulfilled, (state,action)=>{
                 state.posts= state.posts.map((post)=>(
                    post._id===action.payload._id? action.payload : post
                 ))
            })
            .addCase(deletePost.fulfilled ,(state,action)=>{
                state.posts= state.posts.filter((post)=>
                     post._id !==action.payload
            )
            })
    }
}
);

export const getAllPosts = (state) => state.posts.posts
export const getStatus = (state) => state.posts.status
export const getError = (state) => state.posts.error



export default postSlice.reducer