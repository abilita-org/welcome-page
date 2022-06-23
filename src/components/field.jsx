import React from "react"

export default function Field({
  id,
  label,
  info,
  value,
  placeholder,
  onChange = () => null,
}) {
  return (
    <div className="field">
      <label htmlFor={id} className="field--label">
        {label}
      </label>
      {!!info && <p className="field--info">{info}</p>}
      <input
        className="field--input"
        id={id}
        name={id}
        value={value}
        placeholder={placeholder}
        type="text"
        onChange={e => onChange(e)}
      />
    </div>
  )
}
