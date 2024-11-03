import axios from "axios";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";
import {IUser} from "../models/IUser";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: { "Content-Type": "application/json" },
});

const userService ={
    getUsers: async () =>{
        return await axiosInstance.get<IUser[]>("/users");
    }

}

const postService = {
    getPosts: async () => {
        return await axiosInstance.get<IPost[]>("/posts");
    }
}
const commentService ={
    getComments: async () => {
        return await axiosInstance.get<IComment[]>("/comments");
    }
}

export {
    userService,
    postService,
    commentService,
}