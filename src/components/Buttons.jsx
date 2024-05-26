import React from 'react'
import { GiCheckMark } from "react-icons/gi"
import { FiRepeat } from "react-icons/fi"
import '../App.css'

export default function Buttons({handleIncorrect, handleCorrect}){
    return(
        <div className="buttons">
            <button id="incorrect" onClick={handleIncorrect}><FiRepeat size={50}/></button>
            <button id="correct" onClick={handleCorrect}><GiCheckMark size={50}/></button>
        </div>
    )
}