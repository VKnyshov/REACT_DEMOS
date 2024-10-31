import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
import {create} from "zustand/react";
import {IUserModel} from "../models/IUserModel";

type StoreType = {
    userSlice:{
        allUsers:IUserModel[],
        loadUsers:(users: IUserModel[])=>void
    }
    postSlice: {
        allPosts: IPostModel[],
        loadPosts: (posts: IPostModel[]) => void
    },
    commentSlice: {
        allComments: ICommentModel[],
        loadComments: (comments: ICommentModel[]) => void
    }
};

export const useStore = create<StoreType>()(set => ({
    userSlice:{
        allUsers:[],
        loadUsers: (users: IUserModel[]) => {
            return set ((state)=>{
                return{
                    ...state,
                    userSlice:{
                        ...state.userSlice,
                        allUsers:users
                    }
                }
            })
        }

    },

    postSlice: {
        allPosts: [],
        loadPosts: (posts: IPostModel[]) => {
            return set((state) => {
                return {
                    ...state,
                    postSlice: {
                        ...state.postSlice,
                        allPosts: posts,
                    }
                }
            });
        },
    },
    commentSlice: {
        allComments: [],
        loadComments: (comments: ICommentModel[]) => {
            return set((state) => {
                return {
                    ...state,
                    commentSlice: {
                        ...state.commentSlice,
                        allComments: comments,
                    }
                }
            });
        },
    },
}))
