import React from "react"

export default function langCircle(props) {
    console.log(props.x.coverImg)

    return (
        <div className="landing-langlist_circlebox">
            <img src={`../images/${props.x.coverImg}`} className="landing-langlist_icon" draggable="false"/>
        </div>
    )
}