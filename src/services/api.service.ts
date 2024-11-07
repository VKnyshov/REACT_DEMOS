import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {'Content-Type': 'application/json'}
});
export const userService = {
    getAllUsers: async () => {
        return await axiosInstance.get<IUser[]>('/users');
    }
};

export const postService = {
    getAllPosts: async () => {
        return await axiosInstance.get<IPost[]>('/posts',)
    }
};

export const commentService = {
    getAllComments: async () => {
        return await axiosInstance.get<IComment[]>('/comments',)
    }
}