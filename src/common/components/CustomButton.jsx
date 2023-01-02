import React from "react";

export default function CustomButton({ inputText }) {
  return (
    <div className="button-container">
      <button>{inputText}</button>
    </div>
  );
}
