import React from "react";
import "./Card.css"

const Card = (props) => {

    const cardClass = "card " + props.className;
    return (
        <div className={cardClass}>
            {props.children}
        </div>
    )
}

export default Card;