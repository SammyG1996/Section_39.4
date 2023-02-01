import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({answers}) => {
    const [msg, setMsg] = useState('Think Of A Question');
    const [color, setColor] = useState('black');

    const getNewMsg = () => {
        const randomNum = Math.floor(Math.random() * answers.length +1);
        setMsg(answers[randomNum].msg)
        setColor(answers[randomNum].color)
    }

    return(
        <>
            <div className="eight-ball-circle" style={{backgroundColor: color}} onClick={getNewMsg}>
                <h1>{msg}</h1>
            </div>
        </>
    )
}

export default EightBall;