import React from "react"

export default function Select({
  id,
  label,
  options,
  selected,
  onChange = () => null,
}) {
  return (
    <>
      <div className="select">
        <label htmlFor={id} className="select--label">
          {label}
        </label>
        <select
          id={id}
          name={id}
          className="select--input"
          defaultValue={selected}
          onChange={e => onChange(e)}
        >
          {options.length &&
            options.map((option, i) => (
              <option
                key={i}
                value={option.value}
              >
                {option.text}
              </option>
            ))}
        </select>
      </div>
    </>
  )
}
