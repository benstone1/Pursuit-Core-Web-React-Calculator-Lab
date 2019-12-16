import React from 'react';
import Calculator from './Calculator';
import History from './History';
import './App.css';

class App extends React.Component {
    constructor() {
        super() 
        this.state = {
            display: 0,
            operation: null,
            hold: null,
            history: []
        }
        this.state.history = []
        this.operations = {
            "+": (x, y) => Number(x) + Number(y),
            "-": (x, y) => Number(x) - Number(y),
            "x": (x, y) => Number(x) * Number(y),
            "÷": (x, y) => Number(x) / Number(y),
        }
        this.nonOps = {
            'AC': (display) => {return {display: 0, operation: null, hold: null}},
            '%': (display) => {return {display: Number(display) / 100}},
            '±': (display) => {return {display: Number(display) * -1}},
            '.': (display) => {return {display: display.toString().includes('.') ? display : display + '.'}},
        }
    }
    
    handleClick = ({target: {tagName, value}}) => {
        let {
            state: {display, operation, hold, history},
            nonOps, 
            operations,
        } = this

        if (tagName !== "BUTTON") return

        if (!isNaN(value)) {
            this.setState({
                display: display.toString().includes('.') ? display + value : Number(display + value),
            })
        }

        if (operations[value]) {
            this.setState({
                operation: value,
                hold: Number(display),
                display: 0,
            })
            if (operation) {
                this.setState({
                    display: 0,
                    hold: operation && hold ? operations[operation](hold, display) : display,
                    history: operation && hold ? history.concat([[hold, operation, display, '=', operations[operation](hold, display)]]) : history,
                })
            }
        }

        if (nonOps[value]) {
            this.setState(nonOps[value](display))
        }

        if (value === "=") {
            this.setState({
                display: operation && hold ? operations[operation](hold, display) : display,
                hold: operation && hold ? operations[operation](hold, display) : display,
                operation: null,
                history: operation && hold ? history.concat([[hold, operation, display, '=', operations[operation](hold, display)]]) : history,
            })
        }
    }

    render() {
        let {handleClick, state:{display, history}} = this

        return (
            <div className="App">
                <h1>Mike's Handy Dandy Calcumaltor</h1>
                <div onClick={handleClick}><Calculator display={display}/></div>
                <History history={history} />
            </div>
        )
    }
}

export default App;
