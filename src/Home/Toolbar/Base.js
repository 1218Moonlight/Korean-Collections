import React from 'react';
import TitleBar from './TitleBar'
import SecondBar from './SecondBar'

export default function ToolbarBase() {
    return (
        <React.Fragment>
            <TitleBar/>
            <SecondBar/>
        </React.Fragment>
    )
}