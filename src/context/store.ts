import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
import {create} from "zustand/react";

type StoreType = {
    postStore: {
        allPosts: IPostModel[],
        loadPosts: (posts: IPostModel[]) => void
    },
    commentStore: {
        allComments: ICommentModel[],
        loadComments: (comments: ICommentModel[]) => void
    }
};

export const useStore = create<StoreType>()(set => ({
    postStore: {
        allPosts: [],
        loadPosts: (posts: IPostModel[]) => {
            return set((state) => {
                return {
                    ...state,
                    postStore: {
                        ...state.postStore,
                        allPosts: posts,
                    }
                }
            });
        },
    },
    commentStore: {
        allComments: [],
        loadComments: (comments: ICommentModel[]) => {
            return set((state) => {
                return {
                    ...state,
                    commentStore: {
                        ...state.commentStore,
                        allComments: comments,
                    }
                }
            });
        },
    },
}))
