/* this should be a function component that takes as a prop the text to display*/

import React from 'react'

function Title(props) {
    return (
        <div className="title">
            <h1>{props.title}</h1>
        </div>
    )
}

export default Title
