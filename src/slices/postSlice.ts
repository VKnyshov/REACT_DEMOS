import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { IPost } from "../models/IPost";
import { postService } from "../services/api.service";

type PostSliceType = {
    posts: IPost[];
};

const postInitialState: PostSliceType = {
    posts: [],
};

export const loadPosts = createAsyncThunk(
    "postSlice/loadPosts",
    async (_, thunkAPI) => {
        try {
            const posts = await postService.getPosts();
            return posts.data;
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const postSlice = createSlice({
    name: "postSlice",
    initialState: postInitialState,
    reducers: {},
    extraReducers: (builder) =>
        builder.addCase(loadPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        }),
});

export const postActions = {
    ...postSlice.actions,
    loadPosts,
};

export default postSlice.reducer;