import axios from "axios";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: { "Content-Type": "application/json" },
});

const postService = {
    getPosts: async () => {
        return await axiosInstance.get<IPostModel[]>("/posts");
    }
}
const commentService ={
    getComments: async () => {
        return await axiosInstance.get<ICommentModel[]>("/comments");
    }
}

export {
    postService,
    commentService,
}