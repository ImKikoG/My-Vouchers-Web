import React from "react";

export default function CustomInput({ inputType, placeholder }) {
  return (
    <div className="input-container">
      <input type={inputType} placeholder={placeholder}></input>
    </div>
  );
}
