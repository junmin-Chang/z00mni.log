import React from 'react';
function Categories({ getPosts, getPostsByTag }) {

    return (
<div className="tag-wrapper">
                    <h3>#카테고리</h3>
                    <span className="tag-all" onClick={getPosts} style={{
                        cursor: "pointer"
                    }}>전체</span>
                    
                        <span className="tags" onClick={() => {
                            getPostsByTag("React");
                        }} style={{
                            cursor: "pointer"
                        }}>React</span>              

<span className="tags" onClick={() => {
                            getPostsByTag("Redux");
                        }} style={{
                            cursor: "pointer"
                        }}>Redux</span> 

<span className="tags" onClick={() => {
                            getPostsByTag("NodeJS");
                        }} style={{
                            cursor: "pointer"
                        }}>NodeJS</span> 

<span className="tags" onClick={() => {
                            getPostsByTag("회고");
                        }} style={{
                            cursor: "pointer"
                        }}>회고</span> 

<span className="tags" onClick={() => {
                            getPostsByTag("삽질");
                        }} style={{
                            cursor: "pointer"
                        }}>삽질</span> 
                </div>

    )
    
}
export default Categories;
