import {IPost} from "./IPost";
import {IComment} from "./IComment";

export type PostsWithComments = IPost & {comments: IComment[]};