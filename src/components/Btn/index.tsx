import React from "react";
import style from './Btn.module.scss';

interface Props {

    text: string 
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

function Btn({ onClick, type, text } : Props) {

    return (

        <button 
            onClick={onClick} 
            type={type} 
            className={style.btn}>{text}</button>
    )
}

export default Btn;