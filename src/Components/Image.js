/* this should be a function component that takes as a prop the image url to render*/

import React from "react";

function Image(props) {
    return (
        <div className="myImage">
            <img src={props.avarUrl}/>
        </div>
    )
}

export default Image