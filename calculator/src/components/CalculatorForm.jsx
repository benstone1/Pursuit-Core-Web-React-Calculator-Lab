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
                        <button className="button col-3" onClick={this.props.clear} value={this.props.clearType}>{this.props.clearType}</button>
                        <button
                            value='%'
                            className="button col-3"
                            onClick={this.props.percentage}
                        > % </button>
                        <button className="button col-3" value='±' onClick={this.props.handleConversion}>±</button>
                        <button onClick={this.props.handleInput} className="button col-3">7</button>
                        <button onClick={this.props.handleInput} className="button col-3">8</button>
                        <button onClick={this.props.handleInput} className="button col-3">9</button>
                        <button onClick={this.props.handleInput} className="button col-3">4</button>
                        <button onClick={this.props.handleInput} className="button col-3"> 5</button>
                        <button onClick={this.props.handleInput} className="button col-3">6</button>
                        <button onClick={this.props.handleInput} className="button col-3">1</button>
                        <button onClick={this.props.handleInput} className="button col-3">2</button>
                        <button onClick={this.props.handleInput} className="button col-3">3</button>
                        <button onClick={this.props.handleInput} className="button col-6">0</button>
                        <button className="button col-3" value='.' onClick={this.props.handleInput}>.</button>
                    </div>
                    <div className='operators'>
                        <button
                            value='÷'
                            className="button col-3 orange"
                            onClick={this.props.showAnswer}
                        > ÷ </button>
                        <button
                            value='x'
                            className="button col-3 orange"
                            onClick={this.props.showAnswer}
                        >x</button>
                        <button
                            value='-'
                            className="button col-3 orange"
                            onClick={this.props.showAnswer}
                        > - </button>
                        <button
                            value='+'
                            className="button col-3 orange"
                            onClick={this.props.showAnswer}
                        >+</button>
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