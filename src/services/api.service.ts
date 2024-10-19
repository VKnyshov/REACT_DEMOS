import axios from "axios";
import {IUser} from "../models/IUser";
import {IDJResponse} from "../models/IDJResponse";
import users from "../components/Users";

const axiosInstance = axios.create({
    baseURL:'https://dummyjson.com',
    headers:{'Content-Type':'application/json'}
})

export const apiService={
    userServise:{
        getAll: async (page:number): Promise<IUser[]> =>{
            const skip = (page - 1) * 30;

            const {data:{users}} = await axiosInstance.get<IDJResponse & { users: IUser[] }>('/users',{
                params:{
                    skip: skip
                }
            });
            console.log(users)
            return users;
        }
    }
}