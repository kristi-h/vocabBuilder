import React from "react"
import right from "../assets/right.png"
import wrong from "../assets/wrong.png"
import cardback from "../assets/card_back.png"

export default function CardBack(){
    return(
        <div className="card-back">
            <img src={cardback}></img>
            <div className="vocab">
            <h3>pinyin</h3>
            <h3>traditional characters</h3>
            </div>

            <div className="buttons">
                <button src={wrong} id="wrong-btn">wrong</button>
                <button src={right} is="right-btn">right</button>
            </div>
        </div>
    )   
}