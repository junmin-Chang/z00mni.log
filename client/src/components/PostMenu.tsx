import React from 'react';

interface MenuProps {
    onClick: () => void
}
function PostMenu({ onClick } : MenuProps) {

    return (
            <div className="post-menu">
                <button className="btn btn-delete" onClick={onClick}>
                삭제
                </button>
            </div>
    )    
}
export default PostMenu;
