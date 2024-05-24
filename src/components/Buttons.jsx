import React from 'react'
import { GiCheckMark } from "react-icons/gi"
import { FiRepeat } from "react-icons/fi"
import '../App.css'

export default function Buttons(){
    return(
        <div className="buttons">
            <button id="incorrect"><FiRepeat size={50}/></button>
            <button id="correct"><GiCheckMark size={50}/></button>
        </div>
    )
}