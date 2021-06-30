import styled from 'styled-components'
const renderDate = (dateString) => {
    const date = new Date(dateString);
    const monthName = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];

    return `${date.getFullYear()}년 ${monthName[date.getMonth()]} ${date.getDate()}일`;
}

const renderTags = (tags) => {
    return tags.map((tag,idx) => {
        return  <ListTags key={idx}><span>{tag}</span></ListTags>
    })
}
const ListDate = styled.p`
    display: block;
    margin-bottom: 0.5rem;
    color: #949494;
    font-weight: 300;
`

const ListTitle = styled.h3`
    margin: 0;
    margin-bottom: 0.5rem;
`

const ListTags = styled.div`
    display: inline-block;
    margin-right: 0.5rem;
    background: var(--post-list-item-tag);
    padding: 0 0.5rem;
    color: white;
    border-radius: 4px;
    font-size: 1rem;
    margin-bottom: 0.5rem;

`


export const Content = ({ post }) => {
    return (
    <>
        <ListTitle>{post.title}</ListTitle>
        <ListDate>{renderDate(post.createdAt)}</ListDate>
       {renderTags(post.tags)}
    </>
    )
}