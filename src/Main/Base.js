import React from 'react'
import MainFeaturedPost from './MainFeaturedPost'
import SubFeaturedPost from './SubFeaturedPosts'

export default function MainBase() {
    return (
        <React.Fragment>
            <main>
                <MainFeaturedPost/>
                <SubFeaturedPost/>
            </main>
        </React.Fragment>
    )
}