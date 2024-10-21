import {IUser} from "./IUser";

export type  IDJResponse = {
    skip:number,
    limit:number,
    total:number,
}

export interface IUserResponse extends IDJResponse {
    users:IUser
}