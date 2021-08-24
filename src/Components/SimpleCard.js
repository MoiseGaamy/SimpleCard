/* this should be a class component that renders Title, Description and Image
and then passes in the respective props.*/

import react from "react";
import Description from "./Description";
import Image from "./Image";
import Title from "./Title";

class SimpleCard extends react.Component{
    render() {
        return (
            <div className="desc">
                <div>
                <Image avarUrl="https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BsYXNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                </div>
                <div>
                <Title title="My SimpleCard"/>
                <Description desc="welcome to my land of react are you ready?" />
                </div>
            </div>
        )
    }
}

export default SimpleCard;