
const Calculator = () => {
  const createNumbers = () => {
    const digits = [];
      for (let i = 1; i < 10; i++) {
        digits.push(
          <Button key={i} name={i}/>,
        );
      }
      return digits;
  };
  
  return (
    <div className="calculator">
      <div className="result"><span>0</span></div>
      <div className="numbers">
        <div className="operators"> 
          <Button key="&#247;" name="&#247;"/>
          <Button key="&times;" name="&times;"/>
          <Button key="-" name="-"/>
          <Button key="+" name="+"/>
          <Button key="=" name="="/>
        </div>
        <div className="digits">
          <Button key="AC" name="AC"/>
          <Button key="+/-" name="+/-"/>
          <Button key="%" name="%"/>
          { createNumbers() }
          <Button key="0" name="0"/>
          <Button key="." name="."/>
        </div>
      </div>
    </div>
  );
};
  
const Button = (props) => {
  return (<button key={props.name}>{props.name}</button>)
};
  
export default Calculator;
  