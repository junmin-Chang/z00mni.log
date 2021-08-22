import React from 'react';
function PostMenu({ onClick } : any) {

    return (
            <div className="post-menu">
                <button className="btn btn-delete" onClick={onClick}>
                삭제
                </button>
            </div>
    )    
}
export default PostMenu;