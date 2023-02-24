import React from "react";
import './index.css';

function App() {
  const [count, setCount] = React.useState(0);

  const onClickPlus = () => {
      setCount(count + 1);
  };

  const onClickMinus = () => {
        setCount(count - 1);
  };

  const onClickReset = () => {
      setCount(0);
  }

  return (
    <div className="App">
        <a className={"dot"} onClick={onClickReset} href="#"><h1 >{count}</h1></a>
    <div className="container">
            <a onClick={onClickMinus} href="#"><span>Minus</span></a>
            <a onClick={onClickPlus} href="#"><span>Pluss</span></a>
        </div>
    </div>
  );
}

export default App;
