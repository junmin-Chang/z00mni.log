import styled from 'styled-components'
import renderDate from '../../utils/renderDate'

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