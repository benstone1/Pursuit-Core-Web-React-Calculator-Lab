const Calculator = {
  changeInputSign: state => {
    if (state.displayValue[0] === "-") {
      return { ...state, displayValue: state.displayValue.slice(1) };
    } else {
      return { ...state, displayValue: "-" + state.displayValue };
    }
  },

  clearDisplay: state => {
    if (state.waitingForNewValue) {
      return { ...state, displayValue: 0 };
    }
    return { ...state, displayValue: 0 };
  },

  compute: (state, input) => {
    let answer;
    const currentVal = Number(state.displayValue);
    const previousValue = Number(state.previousValue);

    if (input === "+") {
      answer = previousValue + currentVal;
    } else if (input === "-") {
      answer = previousValue - currentVal;
    } else if (input === "x") {
      answer = previousValue * currentVal;
    } else if (input === "÷") {
      answer = previousValue / currentVal;
    } else if (input === "%") {
      answer = previousValue % currentVal;
    }

    return answer;

    // return {
    //   ...state,
    //   displayValue: answer,
    //   previousValue: answer,
    //   operation: input,
    //   waitingForNewValue: true
    // };
  },

  handleFirstOperation: (state, input) => {
    return {
      ...state,
      previousValue: state.displayValue,
      displayValue: 0,
      operation: input,
      waitingForNewValue: true
    };
  },

  handleNextOperation: (state, input, answer) => {
    const number = state.displayValue;
    console.log("Handle Next operation");
    return {
      ...state,
      previousValue: number,
      displayValue: answer ? answer : number,
      operation: input,
      waitingForNewValue: true
    };
  },

  resetState: state => {
    return {
      displayValue: 0,
      previousValue: null,
      operation: null,
      waitingForNewValue: true
    };
  }
};

export default Calculator;
