import React from "react"

export default function TextArea({
  id,
  label,
  placheholder,
  value,
  rows,
  onChange = () => null,
}) {
  return (
    <div className="text-area">
      <label htmlFor={id} className="text-area--label">
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={rows}
        value={value}
        className="text-area--input"
        placeholder={placheholder}
        onChange={e => onChange(e)}
      />
    </div>
  )
}
