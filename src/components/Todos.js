import React from 'react';
import {TodoItem} from "./TodoItem";
import "./Todos.css";

export const Todos = (props) => {
    return (
        <>
            <div className="y-container">
                <h1 className="y-h1">YOUR VIDEOS</h1>
                {props.todos.length===0?<h3 className='y-h3'>No Videos in your playlist</h3>:
            props.todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })
            }
            </div>
        </>
    )
}

export default Todos;