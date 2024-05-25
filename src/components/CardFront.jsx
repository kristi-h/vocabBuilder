import React from "react"
import '../App.css'


export default function CardFront({word, handleClick}){
    return(
        <>
            <div onClick={handleClick} className="card-front">
                <p className="unflipped">{word.English}</p>
            </div>
        </>
    )   
}