import Skeleton , { SkeletonTheme } from 'react-loading-skeleton'


export const ContentSkeleton = ({ theme }) => {
    return (
        <SkeletonTheme color={theme ? '#656871' : '#eee'} highlightColor={theme ? '#888b94' : '#f5f5f5'}>
        <Skeleton style={{lineHeight: '3rem' , marginTop: '2rem'}}/>
        <Skeleton style={{marginTop: '1rem'}}/>
        <div style={{marginTop: '4rem'}}>
            <Skeleton height={'30rem'}/>                   
        </div>
    </SkeletonTheme>
    )
    
}


export const ListSkeleton = ({ theme }) => {

    return (
        <SkeletonTheme color={theme ? '#656871' : '#eee'} highlightColor={theme ? '#888b94' : '#f5f5f5'}>
        <Skeleton count={10} style={{lineHeight: '4rem', marginTop: '2rem'}}/>
        </SkeletonTheme>
    
    )
}

