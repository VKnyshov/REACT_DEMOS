import {IUser} from "../models/IUser";
import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentService, postService, userService} from "../services/api.service";
import {AxiosError} from "axios";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";
import {useDispatch, useSelector} from "react-redux";

type UserSliceType = {
    users: IUser[];
}

const userInitState: UserSliceType = {
    users: []
}
const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await userService.getUsers();
            return thunkAPI.fulfillWithValue(users.data);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
);
const userSlice = createSlice({
    name: "userSlice",
    initialState: userInitState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })

});

export const userActions = {
    ...userSlice.actions,
    loadUsers
}
//---------------------------------------------------------------------------------

type PostSliceType = {
    posts: IPost[];
}

const postInitialState: PostSliceType = {
    posts: []
}

const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await postService.getPosts();
            return posts.data
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)
const postSlice = createSlice({
    name: "postInitialState",
    initialState: postInitialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state,action) =>{
                state.posts = action.payload;
            })


});
export const postActions = {
    ...postSlice.actions,
    loadPosts
}


//========================================================================

type CommentSliceType = {
    comments: IComment[];
}

const commentInitialState: CommentSliceType = {
    comments:[]
}

const loadComments = createAsyncThunk(
    'commentSlice/loadComments',
    async (_, thunkAPI) => {
        try {
            const comments = await commentService.getComments();
            return comments.data
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)
const commentSlice = createSlice({
    name: "commentInitialState",
    initialState: commentInitialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadComments.fulfilled, (state,action) =>{
                state.comments = action.payload;
            })

});
export const commentActions = {
    ...commentSlice.actions,
    loadComments
}

//=================================================================
export const store = configureStore({
    reducer:{
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer,
        commentSlice: commentSlice.reducer
    }
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
