import React from "react";
import "./App.css";
import Keypad from "./components/Keypad/Keypad";
import Display from "./components/Display/Display";
import { evaluate } from "mathjs";

const App = () => {
  const [result, setResult] = React.useState("");
  const keypadValue = [
    "(",
    "CE",
    ")",
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    ".",
    "0",
    "=",
    "/"
  ];

  const calculate = () => {
    try {
      // setResult((eval(result) || "") + "");
      setResult((evaluate(result) || "") + "");
    } catch (error) {
      setResult("error");
    }
  };

  const clicked = type => {
    switch (type) {
      case "=":
        calculate();
        break;
      case "C":
        clear();
        break;
      case "CE":
        back();
        break;
      default:
        setResult(result + type);
    }
  };
  const clear = () => setResult("");
  const back = () => setResult(result.slice(0, -1));

  return (
    <div className="App">
      <Display result={result} />
      <Keypad onClick={clicked} value={keypadValue} />
    </div>
  );
};

export default App;
