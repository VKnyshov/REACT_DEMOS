import {IPost} from "./IPost";
import {IComment} from "./IComment";

export type UserWithPostWithComment = IPost & {comments: IComment[]};