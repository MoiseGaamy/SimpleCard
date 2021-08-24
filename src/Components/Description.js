/* this should be a class component that takes as a prop the text to display */

import React from "react";

class Description extends React.Component{
    render() {
        return (
            <div className="desc">{this.props.desc}</div>
        )
    }
}

export default Description


