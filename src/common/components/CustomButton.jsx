import React from "react";

export default function CustomButton({ inputText, disabled }) {
  return (
    <div className="button-container">
      <button disabled={disabled}>{inputText}</button>
    </div>
  );
}
