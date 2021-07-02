import styled from 'styled-components'
import Skeleton , { SkeletonTheme } from 'react-loading-skeleton'
const StyledSkeletonTheme = styled(SkeletonTheme).attrs(props => ({
    color: props.theme ? '#656871' : '#eee',
    highlightColor: props.theme ? '#888b94' : '#f5f5f5'
}))`
`   

export const ContentSkeleton = () => {
    <StyledSkeletonTheme>
        <Skeleton style={{lineHeight: '3rem' , marginTop: '2rem'}}/>
        <Skeleton style={{marginTop: '1rem'}}/>
        <div style={{marginTop: '4rem'}}>
            <Skeleton height={'30rem'}/>                   
        </div>
    </StyledSkeletonTheme>
}

export const ListSkeleton = () => {
    <StyledSkeletonTheme>
    <Skeleton count={10} style={{lineHeight: '4rem', marginTop: '2rem'}}/>
    </StyledSkeletonTheme>
}

