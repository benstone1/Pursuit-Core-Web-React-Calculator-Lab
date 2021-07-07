import React, { Component } from 'react'

class Display extends Component {
    constructor() {
        super()

        console.log('child of app');

    }

    componentWillUnmount() {
        console.log('unmounted');
    }

    render() {
        return <div className="display"> {this.props.displayValue}</div>
    }

}


export default Display;