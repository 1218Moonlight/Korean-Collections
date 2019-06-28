import React from 'react';
import FirstBar from './FirstBar'
import SecondBar from './SecondBar'

export default function ToolbarBase() {
    return (
        <React.Fragment>
            <FirstBar/>
            <SecondBar/>
        </React.Fragment>
    )
}