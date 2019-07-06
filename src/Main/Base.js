import React from 'react'
import MainFeaturedPost from './MainFeaturedPost'
import SubFeaturedPost from './SubFeaturedPosts'
import Email from './Email'

export default function MainBase() {
    return (
        <React.Fragment>
            <main>
                <MainFeaturedPost/>
                <SubFeaturedPost/>
                <Email/>
            </main>
        </React.Fragment>
    )
}