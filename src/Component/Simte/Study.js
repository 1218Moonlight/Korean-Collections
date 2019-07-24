import React from 'react'
import Button from '@material-ui/core/Button'

export default (function Study(props) {
    const {step} = props;
    return (
        <div>
            {step.map((s, i) => (
                <div key={i}>
                    <Button>{s}</Button>
                </div>
            ))}
        </div>
    )
})