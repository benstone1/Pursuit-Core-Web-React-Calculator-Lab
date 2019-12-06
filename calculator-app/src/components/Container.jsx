import React from "react";
import Button from "./Button";
import "../styles/Container.css";
import Calculator from "../modules/Calculator.js";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: 0,
      previousValue: null,
      operation: null,
      waitingForNewValue: true
    };
  }

  handleClick = e => {
    const className = e.target.className;

    // Do nothing when clicking a target area that is not a button
    if (className === "container" || className === "display") {
      return;
    }

    const input = e.target.innerText;

    if (this.state.operation === '=' && !"÷x-+%AC".includes(input)) {
      return;
    }

    // Clear Current number
    if (input === "C") {
      return this.setState(Calculator.clearDisplay(this.state));
    }

    // Clear current state
    if (input === "AC") {
      return this.setState(Calculator.resetState(this.state));
    }

    // Toggle input/display number to a +/-
    if (input === "±") {
      return this.setState(Calculator.changeInputSign(this.state));
    }

    if (input === '%') {
      return this.setState(Calculator.divideByHundred(this.state));
    }

    // Calculate the inputs based on given operation
    if ("÷x-+%".includes(input)) {
      console.log("Not Equal sign");
      if (this.state.waitingForNewValue && this.state.operation === null) {
        return;
      }
      if (this.state.waitingForNewValue) {
        return this.setState({
          operation: input
        });
      }
      if (this.state.operation === null) {
        return this.setState(
          Calculator.handleFirstOperation(this.state, input)
        );
      } else {
        console.log("Equal sign");
        const answer = Calculator.compute(this.state, input);
        return this.setState(
          Calculator.handleNextOperation(this.state, input, answer)
        );
      }
    }

    if (input === "=") {
      const answer = Calculator.compute(this.state, this.state.operation);
      console.log("Input; =");
      return this.setState(
        Calculator.handleNextOperation(this.state, "=", answer)
      );
    }

    // Changes state for clicking any button from 0 - 9
    this.setState({
      ...this.state,
      waitingForNewValue: false,
      displayValue: this.state.waitingForNewValue
        ? input
        : this.state.displayValue + input
    });
  };

  render() {
    const toggleClearButton = typeof this.state.displayValue === 'string' ?
      (
        <Button className="grey" value="C" />
      ) : (
        <Button className="grey" value="AC" />
      )

    return (
      <div className="container" onClick={this.handleClick}>
        <div className="display">{this.state.displayValue}</div>
        {toggleClearButton}
        <Button className="grey" value="%" />
        <Button className="grey" value="±" />
        <Button className="orange" value="÷" />
        <Button className="grey" value="7" />
        <Button className="grey" value="8" />
        <Button className="grey" value="9" />
        <Button className="orange" value="x" />
        <Button className="grey" value="4" />
        <Button className="grey" value="5" />
        <Button className="grey" value="6" />
        <Button className="orange" value="-" />
        <Button className="grey" value="1" />
        <Button className="grey" value="2" />
        <Button className="grey" value="3" />
        <Button className="orange" value="+" />
        <Button className="grey zero" value="0" />
        <Button className="grey" value="." />
        <Button className="orange" value="=" />
      </div>
    );
  }
}

export default Container;
