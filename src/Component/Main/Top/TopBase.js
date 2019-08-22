import React from 'react'

import TopNotice from './TopNotice'
import TopMenu from './TopMenu'

export default function TopBase() {
    return (
        <React.Fragment>
            <TopNotice/>
            <TopMenu/>
        </React.Fragment>
    )
}