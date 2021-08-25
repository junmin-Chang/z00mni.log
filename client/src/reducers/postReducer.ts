import { GET_POSTS, GET_POST, WRITE_POST, EDIT_POST, DELETE_POST}
from '../actions/types'

type Post = {
    _id: string
    title: string
    tags: string[]
    html: string
    createdAt: Date
}

type PostState = Post[]

const initialState : PostState = []


const posts = (posts: PostState = initialState, action : any) => {
    const { type, payload } = action
    switch(type) {       
        case GET_POSTS:
            return payload
        case GET_POST:
            return payload
        case WRITE_POST:
            return { ...posts, payload}
        case DELETE_POST:
            return posts.filter(post => post._id !== payload._id)
        case EDIT_POST:
            return payload;
        default:
            return posts
    }
}

export default posts