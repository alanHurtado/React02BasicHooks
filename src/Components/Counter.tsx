import { useState } from "react";

interface Props {
  number: number;
}

export const Counter = ({ number }: Props) => {
  const [count, setCount] = useState<number>(number);
  
  const handleAdd = () => {
    setCount(count + 1)
  };
  const handleReset = () => {
    setCount( number);
  }
  const handleSubtract = () => {
    setCount(count - 1);
  }


  return (
    <div className="contenet m-5, p-5">
      <h1> Counter App</h1>
      <h2> {count} </h2>
        <button className="button is-primary" onClick={handleSubtract}>
        -1
      </button>
      <button className="button is-danger" onClick={handleReset}>
        reset
      </button>
        <button className="button is-primary" onClick={handleAdd}>
        +1
      </button>
    </div>
  );
};
