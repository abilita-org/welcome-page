import React, { useState } from "react"
import inputChecked from "../images/checkbox-checked.svg"
import inputUnchecked from "../images/checkbox-unchecked.svg"

export default function Checkbox({ id, link, onChange = () => null }) {
  const [isCheked, setIsChecked] = useState(false)
  function toggleCheckbox(state) {
    setIsChecked(state)
    const event = {
      target: {
        id: id,
        value: state,
      },
    }
    onChange(event)
  }
  return (
    <div className="checkbox">
      <img
        className="checkbox--input"
        src={isCheked ? inputChecked : inputUnchecked}
        alt="checkbox"
        onClick={() => toggleCheckbox(!isCheked)}
      />
      <span className="checkbox--label">
        Ho letto e compreso
        <a href={link} target="_blank">
          l’informativa privacy
        </a>
        .
      </span>
    </div>
  )
}
