import React, { Component } from 'react'

class UpdateTodo extends Component {
    constructor(props) {
        super(props)


        this.state = {

            inputForUpdate: props.inputForUpdate
        }


    }




    handleChange = (event) => {



        this.setState({



            [event.target.name]: event.target.value
        })

    }
    handleSubmit = (event) => {

        event.preventDefault()
    }


    render() {
        return (
            <div>
                <form>
                    <input onChange={this.props.handleChange} type="text" value={this.props.inputForUpdate} name=" inputForUpdate" />
                    <input onClick={this.handleSubmit} type="submit" value="" />

                </form>
            </div>
        )
    }
}


export default UpdateTodo
