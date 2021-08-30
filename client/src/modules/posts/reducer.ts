import {
    GET_POSTS,
    GET_POST,
    WRITE_POST,
    EDIT_POST,
    DELETE_POST,
    GET_POSTS_SUCCESS,
    GET_POST_SUCCESS
} from './types'

import {PostAction} from "./actions";

type PostsInfo = {
    _id: string,
    title: string,
    tags: string[],
    html: string,
    createdAt: Date
}
type Post = {
    posts: {
        loading: boolean,
        data: PostsInfo[] | null
    },
    post: {
        loading: boolean,
        data: PostsInfo | null
    }
}


const initialState : Post = {
    posts: {
        loading: false,
        data: null
    },
    post: {
        loading: false,
        data: null
    }
}


const postsReducer = (state: Post = initialState, action : PostAction) => {
    switch(action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: {
                    loading: true,
                    data: null
                }
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: {
                    loading: false,
                    data: action.payload
                }
            }

        case GET_POST:
            return {
                ...state,
                post: {
                    loading: true,
                    data: null
                }
            }
        case GET_POST_SUCCESS:
            return {
                ...state,
                post: {
                    loading: false,
                    data: action.payload
                }
            }
        case WRITE_POST:
            return {
                ...state,
                posts: {
                    loading: false,
                    data: action.payload
                }
            }
        case DELETE_POST:
            return {
                ...state,
                posts: {
                    loading: false,
                    data:  state.posts.data?.filter(post => post._id !== action.payload._id)
                }
            }
        case EDIT_POST:
            return {
                ...state,
                posts: {
                    loading: false,
                    data: action.payload
                }
            }
        default:
            return state
    }
}

export default postsReducer