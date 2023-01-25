import React from "react";


export default function Stats(props){
    return(
        <div className="stats">
            <div>Rolls : {props.rolls}</div>
            <div>Time : {props.time}s</div>
            <div>Best : {props.bestScore}s</div>
        </div>
    )
}