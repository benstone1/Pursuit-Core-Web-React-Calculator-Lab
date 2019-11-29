import React from "react";
import Button from "./Button";
import "../styles/Container.css";
import Calculator from "../modules/Calculator.js";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "0",
      previousValue: null,
      operation: null,
      waitingForNewValue: false
    };
  }
  // 1) ### => oper => dV = 0, pV = dV, op = target
  //    => ### => oper/= => dV = prev + oper + dV, pV = dV, oper = null
  // 2) ### => oper => ### => op/= => ### => A/C => dV= 0, waiting = waitingForNewValue
  // 3) 2 => A/C => dV = 0, oper = null, pV = null, waiting = False

  clearDisplay = () => {
    this.setState(Calculator.clearDisplay(this.state));
    // if (this.state.waitingForNewValue) {
    //   return this.setState({ ...this.state, displayValue: "0" });
    // }
    // return this.setState({ ...this.state, display: "0" });
  };

  handleClick = e => {
    const className = e.target.className;

    if (className === "container" || className === "display") {
      return;
    }

    const input = e.target.innerText;

    console.log("Input: ", input);

    if (input === "AC") {
      return this.clearDisplay();
    }

    if (input === "÷" || input === "x" || input === "-" || input === "+") {
      const currAns = eval(this.state.history);
      return this.setState({
        ...this.state,
        displayValue: currAns,
        history: currAns
      });
    }

    if (input === "=") {
      return this.setState({
        ...this.state,
        displayValue: eval(this.state.history),
        history: ""
      });
    }
    if (input === "±") {
      return this.state.displayValue[0] === "-"
        ? this.setState({
            ...this.state,
            displayValue: this.state.displayValue.slice(1)
          })
        : this.setState({
            ...this.state,
            displayValue: "-" + this.state.displayValue
          });
    }

    this.setState({
      ...this.state,
      displayValue: this.state.history
        ? this.state.displayValue + input
        : input,
      history: this.state.history ? this.state.history + input : input
    });

    console.log("History: ", this.state.history);
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
