import { useState } from "react";
import calculate from "../logic.js/calculate";
import PropTypes from "prop-types";
import './styles/calculator.css';

const Calculator = () => {
  const [result, setResult] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setResult(calculate(result, e.target.textContent));
  };

  return (
    <div className="maths">
      <h2>Let's do some math!</h2>
      <div className="calculator">
        <div className="result" data-testid="result"><span>{result.next || result.total || '0'}</span></div>
        <div className="numbers">
          <div className="operators"> 
            <Button handleClick={ handleClick } key="&#247;" name="&#247;"/>
            <Button handleClick={ handleClick } key="x" name="x" />
            <Button handleClick={ handleClick } key="-" name="-" />
            <Button handleClick={ handleClick } key="+" name="+" />
            <Button handleClick={ handleClick } key="=" name="=" />
          </div>
          <div className="digits">
            <Button handleClick={ handleClick } key="AC" name="AC" />
            <Button handleClick={ handleClick } key="+/-" name="+/-" />
            <Button handleClick={ handleClick } key="%" name="%" />
            <Button handleClick={ handleClick } key="9" name="9" />
            <Button handleClick={ handleClick } key="8" name="8" />
            <Button handleClick={ handleClick } key="7" name="7" />
            <Button handleClick={ handleClick } key="6" name="6" />
            <Button handleClick={ handleClick } key="5" name="5" />
            <Button handleClick={ handleClick } key="4" name="4" />
            <Button handleClick={ handleClick } key="3" name="3" />
            <Button handleClick={ handleClick } key="2" name="2" />
            <Button handleClick={ handleClick } key="1" name="1" />
            <Button handleClick={ handleClick } key="0" name="0" />
            <Button handleClick={ handleClick } key="." name="." />
          </div>
        </div>
      </div>
    </div>
  );
};
  
const Button = ({ handleClick, name}) => {
  return (<button onClick={handleClick} key={name}>{name}</button>)
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Calculator;
  