import axios from 'axios'

export const fetchPosts = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API}/posts`);
    const sorted = res.data.sort(function(a : any  ,b : any) {
        return (+new Date(b.createdAt)) - (+new Date(a.createdAt))
    })

    return sorted;
}

export const fetchPostsTag = async (tag: string) => {
    const res = await axios.get(`${process.env.REACT_APP_API}/posts`);
    const sortedByTag = res.data.filter((post : any) => post.tags.includes(tag));
    const sorted = sortedByTag.sort(function(a : any,b : any) {
        return (+new Date(b.createdAt)) - (+new Date(a.createdAt))
    })

    return sorted
}
export const fetchPost = async (id: string) => {
    const res = await axios.get(`${process.env.REACT_APP_API}/posts/${id}`)

    return res.data
}

export const writePost = async ( data: any) => {
    const { title, tags, html, createdAt } = data
    const res = await axios.post(`${process.env.REACT_APP_API}/write`, {title, tags, html, createdAt})

    return res.data
}

export const deletePost = async(id: string) => {
    await axios.delete(`${process.env.REACT_APP_API}/posts/${id}`)
}

export const editPost = async (id : string, data : any) => {
    const { title, tags, html } = data
    await axios.patch(`${process.env.REACT_APP_API}/posts/${id}`, { title, tags, html })
}