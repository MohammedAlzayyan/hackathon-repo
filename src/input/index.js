import React from "react";
import { useState } from "react";

const Input = ({ buttonName, lableName, type, ...rest }) => {
  const { value, setValue } = useState("");
  return (
    <div>
      <label>{lableName}</label>
      <br/>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
      />
     
      {/* <footer>
        <p>{singPh}</p>
        <span>{page}</span>
      </footer> */}
    </div>
  );
};

export default Input;
