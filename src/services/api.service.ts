import axios, {AxiosInstance} from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComments} from "../models/IComments";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

// .........................................................

export const getUsers = async () =>{
// let {data} = await axiosInstance.get<BaseResponseType & {users:IUser[]}>("/users/");
    let {data} = await axiosInstance.get<IUser[]>("/users/");
    return data
}
// .........................................................

export const getPosts = async () =>{
// let {data} = await axiosInstance.get<BaseResponseType & {users:IUser[]}>("/users/");
    let {data} = await axiosInstance.get<IPost[]>("/posts/");
    return data
}
// .........................................................

export const getComments = async () =>{
// let {data} = await axiosInstance.get<BaseResponseType & {users:IUser[]}>("/users/");
    let {data} = await axiosInstance.get<IComments[]>("/comments/");
    return data
}