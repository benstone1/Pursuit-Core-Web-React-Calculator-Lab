import React from 'react';
import './Calculator.css'

class History extends React.Component {
    render() {
        return (
            <>
            <h2>History</h2>
            <ul>
                {this.props.history.map(h => <li>{h.join(' ')}</li>)}
            </ul>
            </>
        )
    }
}

export default History;

