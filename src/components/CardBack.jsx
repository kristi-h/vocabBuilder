import React from "react"
import '../App.css'

export default function CardBack({word, flip}){
    return(
        <>
            <div  onClick={()=> flip} className="card-back">
                <h3 className="pinyin">{word.Pinyin}</h3>
                <h3 className="chinese">{word.Chinese}</h3>
            </div>
        </>
    )   
}