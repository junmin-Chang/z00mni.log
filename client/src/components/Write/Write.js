import React from 'react';
import TextEditorForm from './TextEditorForm'
import { Helmet } from 'react-helmet'
function Write() {
   
    return (
        <>
            <Helmet>
                <title>글 쓰기</title>
            </Helmet>
            <div className="container">
                <h1>글 작성</h1>
                <TextEditorForm/>
            
            </div>
        </>
    )
    
}
export default Write;
