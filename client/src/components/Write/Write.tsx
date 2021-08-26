import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import {MarkdownEditor} from "./MarkdownEditor";
import {RouteComponentProps} from "react-router-dom";



function Write({ history, match, location } : RouteComponentProps) {
    let { isAuthenticated } : any = useSelector<any>(state => state.auth)
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
                <MarkdownEditor history={history} match={match} location={location}/>
            
            </div>
        </>
    )
    
}
export default Write;
