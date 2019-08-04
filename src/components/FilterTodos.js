import React from 'react'
import TodoItem from './todoItem'
import Loader from './Loader'



const FilterTodos = (props) => {


    const todos = props.todos.map((el, index) => <TodoItem
        TodoItem todo={el.text}
        deleteTodo={() => props.deleteTodo(index)}
        handleChecked={props.handleChecked}
        markAsDone={() => props.markAsDone(index)}
        checked={el.checked}
        index={index} />

    )




    return <div> {todos.length === 0 ? <Loader filterValue={props.filterValue} /> : todos} </div>



}

export default FilterTodos
