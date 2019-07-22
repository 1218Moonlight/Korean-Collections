import React from 'react'
import MainFeaturedPost from './MainFeaturedPost'
import SubFeaturedPost from './SubFeaturedPosts'
import SubFeaturedSearch from './SubFeaturedSearch'

export default function MainBase() {
    return (
        <React.Fragment>
            <main>
                <MainFeaturedPost/>
                <SubFeaturedSearch/>
                <SubFeaturedPost/>
            </main>
        </React.Fragment>
    )
}