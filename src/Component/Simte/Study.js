import React from 'react'

export default (function Study(props) {
    const {classes, step} = props;
    return (
        <div>
            {step.map(s => (
                <div>
                    {
                        //TODO:Each child in a list should have a unique "key" prop
                    }
                    <p>{s}</p>
                </div>
            ))}
        </div>
    )
})