import React from "react";
import "./Inputbox.scss";
export default function Inputbox({ handleChange, values, errors, type, placeholder, inputId, ...props }) {

  return (
    <>
      <input
        type={type}
        className="floating-input"
        id={inputId}
        placeholder={placeholder}
        name={inputId}
        value={values}
        onChange={handleChange}
        {...props}
      />
      {errors ? (
        <p className="form-error">{errors}</p>
      ) : (
        <label htmlFor={inputId} className="floating-label">
          {placeholder}
        </label>
      )}
    </>
  );
}
