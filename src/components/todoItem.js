import React from "react"
import "../Todo.css"



const TodoItem = (props) => {

    return (<div className={`${props.checked === true ? 'todo-item done' : 'todo-item'}`}>

        <div className="form-check  check">
            <input className="checkbox" id={`check${props.index}`} onChange={props.markAsDone} type="checkbox" checked={props.checked} />
            <label htmlFor={`check${props.index}`}></label>
        </div>
        <div className="element"> {props.todo} </div>
        <div className="options">
            <button className="btn" onClick={props.deleteTodo}><i className="fas fa-trash-alt"></i></button>

        </div>
    </div>)
}

export default TodoItem