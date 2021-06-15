import React from 'react'
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./TodoItem.css";

export const TodoItem = ({todo,onDelete}) => {
    return (
        <>
        <div className="yi">

        <div className="yi-container">
            <div className="player-wrapper">
            <ReactPlayer className='react-player' url={todo.title} width="100%" height="100%" controls={true}/>
            <button className="yi-btn" onClick={()=>{onDelete(todo)}}>Delete</button>
            </div>
            
        </div>
        <hr/>
        </div>
        
        </>
    )
}

export default TodoItem;