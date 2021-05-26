import React from 'react';
import { useEffect } from 'react';
function Categories({ tags ,getPosts, getPostsByTag }) {
    useEffect(() => {
        console.log(tags)
    })
    return (
        <div className="tag-wrapper">
        <h3>#카테고리</h3>
        <span className="tag-all" onClick={getPosts}>전체</span>
        <span className="tags" onClick={() => getPostsByTag("React")}>#React</span>
        <span className="tags" onClick={() => getPostsByTag("Redux")}>#Redux</span>
        <span className="tags" onClick={() => getPostsByTag("NodeJS")}>#NodeJS</span>
        <span className="tags" onClick={() => getPostsByTag("회고")}>#회고</span>
        <span className="tags" onClick={() => getPostsByTag("삽질")}>#삽질</span>
    </div>

    )
    
}
export default Categories;
