import React, { Component } from 'react'

class CalculatorForm extends Component {
    constructor() {
        super()
        console.log('error remover');

    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div className="calc">
                    <div className="buttons">
                        <button className="button col-3" onClick={this.props.allClear} value='AC'>AC</button>
                        <button
                            value='%'
                            className="button col-3"
                            onClick={this.handleOperationButton}
                        > % </button>
                        <button className="button col-3" onClick={this.props.handleConversion}>±</button>
                        <button
                            value='÷'
                            className="button col-3 orange"
                            onClick={this.props.handleOperationButton}
                        > ÷ </button>
                        <button onClick={this.props.handleInput} className="button col-3">7</button>
                        <button onClick={this.props.handleInput} className="button col-3">8</button>
                        <button onClick={this.props.handleInput} className="button col-3">9</button>
                        <button
                            value='x'
                            className="button col-3 orange"
                            onClick={this.props.handleOperationButton}
                        >x</button>
                        <button onClick={this.props.handleInput} className="button col-3">4</button>
                        <button onClick={this.props.handleInput} className="button col-3"> 5</button>
                        <button onClick={this.props.handleInput} className="button col-3">6</button>
                        <button
                            value='-'
                            className="button col-3 orange"
                            onClick={this.props.handleOperationButton}
                        > - </button>
                        <button onClick={this.props.handleInput} className="button col-3">1</button>
                        <button onClick={this.props.handleInput} className="button col-3">2</button>
                        <button onClick={this.props.handleInput} className="button col-3">3</button>
                        <button
                            value='+'
                            className="button col-3 orange"
                            onClick={this.props.handleOperationButton}
                        >+</button>
                        <button onClick={this.props.handleInput} className="button col-6">0</button>
                        <button className="button col-3" onClick={this.props.handleOperationButton}>.</button>
                        <button
                            value='='
                            className="button col-3 orange"
                            onClick={this.props.showAnswer}
                        >=</button>
                    </div>
                </div>
            </form>
        )
    }
}
export default CalculatorForm;