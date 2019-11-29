const Calculator = {
  clearDisplay: state => {
    if (state.waitingForNewValue) {
      return { ...state, displayValue: "0" };
    }
    return { ...state, displayValue: "0" };
  }
};

export default Calculator;
