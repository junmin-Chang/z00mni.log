import Skeleton , { SkeletonTheme } from 'react-loading-skeleton'


interface SkeletonProps {
    theme : boolean
}
export const ContentSkeleton = ({ theme } : SkeletonProps) => {
    return (
        <SkeletonTheme color={theme ? '#151519' : '#fff'} highlightColor={theme ? '#25262A' : '#F4F5F7'}>
        <Skeleton style={{lineHeight: '3rem' , marginTop: '2rem'}}/>
        <Skeleton style={{marginTop: '1rem'}}/>
        <div style={{marginTop: '4rem'}}>
            <Skeleton height={'30rem'}/>                   
        </div>
    </SkeletonTheme>
    )
    
}

export const ListSkeleton = ({ theme } : SkeletonProps) => {

    return (
        <SkeletonTheme color={theme ? '#151519' : '#fff'} highlightColor={theme ? '#25262A' : '#F4F5F7'}>
        <Skeleton count={10} style={{lineHeight: '4rem', marginTop: '2rem'}}/>
        </SkeletonTheme>
    
    )
}

