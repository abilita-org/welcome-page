import React, { useRef, useEffect } from "react"

export default function Modal({ children, showModal, hideModal = () => null }) {
  let ref = useRef(null)

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      hideModal && hideModal()
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.removeEventListener("click", handleClickOutside, true)
    }
  })

  return (
    <div className={`modal ${showModal ? "active" : ""}`}>
      <div ref={ref} className="modal--container">
        {!!showModal && children}
      </div>
    </div>
  )
}
