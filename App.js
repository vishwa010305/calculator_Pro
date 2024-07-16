import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentOperand, setCurrentOperand] = useState('');
  const [previousOperand, setPreviousOperand] = useState('');
  const [operation, setOperation] = useState(undefined);

  const appendNumber = (number) => {
    if (number === '0' && currentOperand === '0') return;
    setCurrentOperand(currentOperand.toString() + number.toString());
  };

  const chooseOperation = (op) => {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
      compute();
    }
    setOperation(op);
    setPreviousOperand(currentOperand);
    setCurrentOperand('');
  };

  const compute = () => {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '/':
        computation = prev / current;
        break;
      default:
        return;
    }
    setCurrentOperand(computation);
    setOperation(undefined);
    setPreviousOperand('');
  };

  const clearDisplay = () => {
    setCurrentOperand('');
    setPreviousOperand('');
    setOperation(undefined);
  };

  const updateDisplay = () => {
    return currentOperand;
  };

  return (
    <div className="calculator">
      <div className="display">{updateDisplay()}</div>
      <div className="buttons">
        <button className="button" onClick={() => appendNumber('1')}>1</button>
        <button className="button" onClick={() => appendNumber('2')}>2</button>
        <button className="button" onClick={() => appendNumber('3')}>3</button>
        <button className="button operator" onClick={() => chooseOperation('+')}>+</button>
        <button className="button" onClick={() => appendNumber('4')}>4</button>
        <button className="button" onClick={() => appendNumber('5')}>5</button>
        <button className="button" onClick={() => appendNumber('6')}>6</button>
        <button className="button operator" onClick={() => chooseOperation('-')}>-</button>
        <button className="button" onClick={() => appendNumber('7')}>7</button>
        <button className="button" onClick={() => appendNumber('8')}>8</button>
        <button className="button" onClick={() => appendNumber('9')}>9</button>
        <button className="button operator" onClick={() => chooseOperation('*')}>*</button>
        <button className="button" onClick={() => appendNumber('0')}>0</button>
        <button className="button" onClick={clearDisplay}>C</button>
        <button className="button" onClick={compute}>=</button>
        <button className="button operator" onClick={() => chooseOperation('/')}>/</button>
      </div>
    </div>
  );
}

export default App;
