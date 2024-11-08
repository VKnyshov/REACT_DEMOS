import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { IComment } from "../models/IComment";
import { commentService } from "../services/api.service";

type CommentSliceType = {
    comments: IComment[];
};

const commentInitialState: CommentSliceType = {
    comments: [],
};

export const loadComments = createAsyncThunk(
    "commentSlice/loadComments",
    async (_, thunkAPI) => {
        try {
            const comments = await commentService.getComments();
            return comments.data;
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);

const commentSlice = createSlice({
    name: "commentSlice",
    initialState: commentInitialState,
    reducers: {},
    extraReducers: (builder) =>
        builder.addCase(loadComments.fulfilled, (state, action) => {
            state.comments = action.payload;
        }),
});

export const commentActions = {
    ...commentSlice.actions,
    loadComments,
};

export default commentSlice.reducer;