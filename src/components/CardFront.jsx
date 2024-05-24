import React from "react"
import '../App.css'


export default function CardFront({word, flip}){
    return(
        <>
            <div onClick={()=> flip} className="card-front">
                <p className="unflipped">{word.English}</p>
            </div>
        </>
    )   
}