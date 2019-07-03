import React from 'react'
import MainFeaturedPost from './MainFeaturedPost'
import SubFeaturedPost from './SubFeaturedPosts'
import SubFeaturedPostPagination from './SubFeaturedPostsPagination'

export default function MainBase() {
    return (
        <React.Fragment>
            <main>
                <MainFeaturedPost/>
                <SubFeaturedPost/>
                <SubFeaturedPostPagination/>
            </main>
        </React.Fragment>
    )
}