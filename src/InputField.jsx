import React from "react";

export const InputField = props => {
  const { name, type, value, onChange } = props;
  const id = name + type;

  return (
    <div>
      <label htmlFor={id}>
        Current {type}:
        <input
          type="number"
          id={id}
          value={value}
          onChange={e => onChange(parseInt(e.target.value))}
        />
      </label>
    </div>
  );
};
