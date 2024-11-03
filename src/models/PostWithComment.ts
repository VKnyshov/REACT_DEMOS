import {IPost} from "./IPost";
import {IComment} from "./IComment";

export type PostWithComment = IPost & {comments: IComment[]};