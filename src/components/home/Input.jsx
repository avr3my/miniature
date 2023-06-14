import React from "react";

export default function Input({ state, setState, text, type }) {
  return (
    <div className="input-field">
      <label htmlFor={text}>{text}</label>
      <input
        id={text}
        type={type}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
}
