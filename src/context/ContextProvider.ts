import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
import {createContext, useContext} from "react";

type StoreType= {
    postStore: {
        allPosts:IPostModel[]
    },
    commentStore: {
        allComments:ICommentModel[]
    }
};

const defaultValue:StoreType = {
    postStore:{
        allPosts:[]
    },
    commentStore:{
        allComments:[]
    }
}

export const MyContext = createContext<StoreType>(defaultValue);

export const useContextProvider=():StoreType =>{
return useContext(MyContext);
};