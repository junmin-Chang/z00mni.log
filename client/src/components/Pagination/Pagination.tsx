import React from 'react';
import styled from 'styled-components';

const PageUl = styled.ul`
    float: left;
    margin-top: 1rem;
    margin-bottom: 1rem;
    list-style: none;
    text-align: center;
    border-radius: 6px;
    color: white;
    padding: 1px;
    border-top: 3px solid #AAAAAA;
    border-bottom: 3px solid #AAAAAA;
    background-color: rgba(0,0,0,0.4);
`;

const PageLi = styled.li`
    display: inline-block;
    font-size: 17px;
    font-weight: 600;
    border-radius: 6px;
    padding: 5px;
    width: 25px;
    &:hover {
        cursor: pointer;
        color: white;
        background-color: #C1C1C1;
        border-radius: 100%;
    }
    &:focus::after {
        color: white;
        background-color: #C1C1C1;
    }
`;

const PageSpan = styled.span`
    &:hover::after, 
    &:focus::after{
        border-radius: 100%;
        color: white;
        background-color: #AAAAAA;
    }
`;

const Pagination : React.FC<any> = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <nav>
                <PageUl className="pagination">
                    {pageNumbers.map(number => (
                        <PageLi key={number} className="page-item">
                            <PageSpan onClick={() => paginate(number)} className="page-link">
                                {number}
                            </PageSpan>
                        </PageLi>
                    ))}
                </PageUl>
            </nav>
        </div>
    )
}


export default Pagination