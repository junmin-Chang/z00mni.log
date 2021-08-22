import { GET_POSTS, GET_POST, WRITE_POST, EDIT_POST, DELETE_POST}
from '../actions/types'

const initialState = {
    data: [
        {
            _id: "",
            title: "",
            tags: [],
            html: "",
            createdAt: new Date()
        }
        ]
}

const posts = (posts=initialState, action : any) => {
    const { type, payload } = action
    switch(type) {       
        case GET_POSTS:
            return payload

        case GET_POST:
            return payload
        case WRITE_POST:
            return { ...posts, payload}
        case DELETE_POST:
            return posts.data.filter(post => post._id !== payload._id)
        case EDIT_POST:
            return payload;
        default:
            return posts
    }
}

export default posts