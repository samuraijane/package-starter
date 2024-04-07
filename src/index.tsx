import React, { ChangeEvent, useState } from "react";
import { Div } from "./style";

const Charcounter = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const { length } = value;
    if (length > 72) {
      return false;
    }
    setInputValue(value);
    setCount(value.length);
  };

  const className = `${count > 0 ? "active" : ""}${inputValue.length === 72 ? " at-max" : ""}`;

  return (
    <Div>
      <div className="title">Character Counter</div>
      <input onChange={handleChange} type="text" value={inputValue} />
      <span className={className}>{count > 0 && count}</span>
    </Div>
  )
};

export { Charcounter };
