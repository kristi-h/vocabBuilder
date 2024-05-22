import React from "react"
import right from "../assets/right.png"
import wrong from "../assets/wrong.png"
import cardfront from "../assets/card_front.png"

export default function CardFront({currWord, children}){
    return(
        <div className="card" id="card-front">
            <img src={cardfront}></img>
            <div className="vocab">
            <h3>{currWord.english}</h3>
            </div>

            <div className="buttons">
                <button src={wrong} id="wrong-btn">wrong</button>
                <button src={right} id="right-btn">right</button>
            </div>
        </div>
    )   
}