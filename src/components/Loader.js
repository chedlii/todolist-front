import React, { Component } from 'react';
import '../Loader.css'

class Loader extends Component {
    constructor(props) {
        super()
        this.state = {

            loading: false

        }

        //     setInterval(() => {
        //         this.setState({

        //             loading: !this.state.loading

        //         })

        //     }, 3000);

    }



    render() {
        return (this.state.loading === false ?
            <div className="lds-facebook"><div>Add something {this.props.filterValue} !</div></div>
            : null
        )
    }
}

export default Loader
