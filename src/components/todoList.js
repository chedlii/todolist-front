import React from 'react';
import FilterTodos from './FilterTodos';
import '../Todo.css';
import UpdateTodo from './UpdateTodo';





class TodoList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            todos: [],
            todo: "",
            filterValue: '',
            update: false,
            indexForUpdate: null

        }

    }

    handleChange = (event) => {

        this.setState({

            [event.target.name]: event.target.value

        })

    }

    addTodo = (event) => {

        event.preventDefault()

        if (this.state.update === false) { // condition for updatin the item
            if (this.state.todo) {  // must not be empty string
                if (this.state.todo.charCodeAt(0) !== 32) { // must not begin with a space

                    const newTodo = {
                        text: this.state.todo,
                        checked: false
                    }

                    this.setState({

                        todos: this.state.todos.concat(newTodo),
                        todo: "",
                        filterValue: "",
                        inputForUpdate: "",
                        update: false
                    })

                }

            }

        } else {
            if (this.state.todo) {
                if (this.state.todo.charCodeAt(0) !== 32) {

                    const newTodo = {
                        text: this.state.todo,
                        checked: false
                    }

                    let copy = [...this.state.todos]

                    let arr1 = copy.splice(this.state.indexForUpdate, copy.length)
                    let arr2 = copy.slice(0, this.state.indexForUpdate)
                    let newArr = copy.slice(0, 0).concat(arr2, newTodo, arr1)

                    this.setState({

                        todo: "",
                        update: false,
                        todos: newArr,
                        indexForUpdate: ""

                    })
                }

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

    update = (indexToUpdate) => {


        this.setState({
            todo: this.state.todos[indexToUpdate].text,  // grabbing the text value of the selected item in the form input
            todos: this.state.todos.filter(el => el !== this.state.todos[indexToUpdate]),
            indexForUpdate: indexToUpdate,
            update: true

        })




        console.log(this.state.todos[indexToUpdate])




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
                        update={this.update}
                        filterValue={this.state.filterValue}
                    />

                    {/* <UpdateTodo
                        inputForUpdate={this.state.inputForUpdate}
                        handleChange={this.handleChange}
                    /> */}


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