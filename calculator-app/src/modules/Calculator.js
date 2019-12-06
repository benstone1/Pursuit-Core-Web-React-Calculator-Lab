const Calculator = {
  changeInputSign: state => {
    if (state.displayValue[0] === "-") {
      return { ...state, displayValue: state.displayValue.slice(1) };
    } else {
      return { ...state, displayValue: "-" + state.displayValue };
    }
  },

  clearState: state => {
    if (state.waitingForNewValue) {
      return { ...state, displayValue: 0 };
    }
    return { ...state, displayValue: 0 };
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

    return answer ? Number(answer.toFixed(0)) : answer;
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
    if (state.waitingForNewValue) {
      return;
    }
    const number = state.displayValue;
    console.log("Handle Next operation");
    return {
      ...state,
      previousValue: answer,
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
