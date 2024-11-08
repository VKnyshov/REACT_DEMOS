import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { IUser } from "../models/IUser";
import { userService } from "../services/api.service";

type UserSliceType = {
    users: IUser[];
};

const userInitState: UserSliceType = {
    users: [],
};

export const loadUsers = createAsyncThunk(
    "userSlice/loadUsers",
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
    extraReducers: (builder) =>
        builder.addCase(loadUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        }),
});

export const userActions = {
    ...userSlice.actions,
    loadUsers,
};

export default userSlice.reducer;