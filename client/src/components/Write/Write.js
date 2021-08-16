import React, { useEffect } from 'react';
import TextEditorForm from './TextEditorForm'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import {MarkdownEditor} from "./MarkdownEditor";
function Write({ history }) {
    let { isAuthenticated } = useSelector(state => state.auth)
   useEffect(() => {
       if (!isAuthenticated) {
            history.push('/login')
       }
   },[isAuthenticated])

    return (
        <>
            <Helmet>
                <title>글 쓰기</title>
            </Helmet>
            <div className="container">
                <h1>글 작성</h1>
                {/*<TextEditorForm/>*/}
                <MarkdownEditor/>
            
            </div>
        </>
    )
    
}
export default Write;
