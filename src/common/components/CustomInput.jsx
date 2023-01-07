import React from "react";

export default function CustomInput({ inputType, placeholder, setValue }) {
  return (
    <div className="input-container">
      <input
        type={inputType}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </div>
  );
}
