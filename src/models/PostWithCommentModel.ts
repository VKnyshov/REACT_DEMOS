import {IPostModel} from "./IPostModel";
import {ICommentModel} from "./ICommentModel";

export type PostWithCommentModel = IPostModel & {comments: ICommentModel[]};