import { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); // Using eval (Be cautious in real-world apps)
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {["7", "8", "9", "/"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        {["4", "5", "6", "*"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        {["1", "2", "3", "-"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
        {["0", ".", "+", "="].map((btn) => (
          <button
            key={btn}
            onClick={() => (btn === "=" ? calculateResult() : handleClick(btn))}
          >
            {btn}
          </button>
        ))}
        <button className="clear" onClick={clearInput}>C</button>
      </div>
    </div>
  );
};

export default App;

