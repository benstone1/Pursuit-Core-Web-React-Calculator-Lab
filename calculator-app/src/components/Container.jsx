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
  // 1) ### => oper => dV = 0, pV = dV, op = target
  //    => ### => oper/= => dV = prev + oper + dV, pV = dV, oper = null
  // 2) ### => oper => ### => op/= => ### => A/C => dV= 0, waiting = waitingForNewValue
  // 3) 2 => A/C => dV = 0, oper = null, pV = null, waiting = False

  handleClick = e => {
    const className = e.target.className;

    if (className === "container" || className === "display") {
      return; // Return when clicking area that is not a button
    }

    const input = e.target.innerText;

    // Clear input/state
    if (input === "AC") {
      if (this.waitingForNewValue) {
        return this.setState(Calculator.clearDisplay(this.state)); // Clear Current number
      } else {
        return this.setState(Calculator.resetState(this.state)); // Clear current state
      }
    }

    // Toggle input/display number to a +/-
    if (input === "±") {
      return this.setState(Calculator.changeInputSign(this.state));
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
        // Compute current and prev input
        console.log("Equal sign");
        const answer = Calculator.compute(this.state, input);
        // return this.setState(Calculator.compute(this.state, input));
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

    // if (this.state.waitingForNewValue) {
    this.setState({
      ...this.state,
      waitingForNewValue: false,
      displayValue: this.state.waitingForNewValue
        ? input
        : this.state.displayValue + input
    });
    // }

    console.log(" ");
  };

  render() {
    return (
      <div className="container" onClick={this.handleClick}>
        <div className="display">{this.state.displayValue}</div>
        <Button className="grey" value="AC" />
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
