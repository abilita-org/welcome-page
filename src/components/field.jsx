import React from "react"

export default function Field({
  id,
  label,
  value,
  placeholder,
  onChange = () => null,
}) {
  return (
    <div className="field">
      <label className="field--label">{label}</label>
      <input
        className="field--input"
        id={id}
        value={value}
        placeholder={placeholder}
        type="text"
        onChange={e => onChange(e)}
      />
    </div>
  )
}
