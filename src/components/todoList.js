import React from 'react';
import FilterTodos from './FilterTodos';
import '../Todo.css';





class TodoList extends React.Component {

    constructor() {
        super()
        this.state = {

            todos: [],
            todo: "",
            filterValue: ''



        }

    }

    handleChange = (event) => {

        this.setState({

            [event.target.name]: event.target.value

        })

    }

    addTodo = (event) => {

        event.preventDefault()

        if (this.state.todo) {  // must not be empty string
            if (this.state.todo.charCodeAt(0) !== 32) { // must not begin with a space

                const newTodo = {
                    text: this.state.todo,
                    checked: false
                }

                this.setState({

                    todos: this.state.todos.concat(newTodo),
                    todo: "",
                    filterValue: ""
                })

            }

        }



    }



    deleteTodo = (indexToDelete) => {

        const { todos } = this.state

        this.setState({
            todos: todos.filter(el => todos.indexOf(el) !== indexToDelete)
        })


    }




    markAsDone = (index) => {

        let copyOfState = Object.assign({}, this.state)
        copyOfState.todos = copyOfState.todos.slice();
        copyOfState.todos[index] = Object.assign({}, copyOfState.todos[index])
        copyOfState.todos[index].checked = !copyOfState.todos[index].checked

        this.setState({

            todos: copyOfState.todos
        })
    }


    filterTodos = (item, filter) => {


        switch (filter) {
            case "Done":
                return item.checked === true


            case "Active":

                return item.checked === false


            default:
                return item

        }

    }

    changeFilterValue = (event) => {

        event.target.className = `${event.target.className} active-link`;

        if (event.target.previousElementSibling !== null) {
            event.target.previousElementSibling.className = "";
        }
        if (event.target.nextSibling !== null) {
            event.target.nextSibling.className = "";
        }

        this.setState({

            filterValue: event.target.id

        })

    }





    render() {



        return (

            <div className="todo-list">

                <form className="todo-form ">
                    <input
                        autoComplete="off"
                        className="form-input"
                        type="text"
                        placeholder={this.state.todos.length === 0 ? "Whats needs to be done?" : " Okey Whats next ?"}
                        onChange={this.handleChange}
                        name="todo"
                        value={this.state.todo}

                    />
                    <input className="btn  form-button" type="submit" value="Add" onClick={this.addTodo} />

                </form>
                <div>
                    <FilterTodos
                        todos={this.state.todos.filter(el => this.filterTodos(el, this.state.filterValue))}
                        deleteTodo={this.deleteTodo}
                        handleChecked={this.handleChecked}
                        markAsDone={this.markAsDone}
                        filterValue={this.state.filterValue}



                    />

                </div>

                <div className="todo-options">
                    <a onClick={this.changeFilterValue} id="Active" href='#'>Active</a>
                    <a onClick={this.changeFilterValue} id="Done" href="#">Done</a>
                    <a onClick={this.changeFilterValue} href="#">View All</a>



                </div>
            </div>
        )
    }


}

export default TodoList;