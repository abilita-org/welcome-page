import React from "react"


export default function Divider({ id, data }) {
    const { text1, text2, text3 } = data
    return (
        <section id={`divider_${id}`} className="divider">
            <div className="divider--columns container">
                <div className="divider--column container">
                    <p className="divider--column-text">{text1}</p>
                </div>
                <div className="divider--column container">
                    <p className="divider--column-text">{text2}</p>
                </div>
                <div className="divider--column container">
                    <p className="divider--column-text">{text3}</p>
                </div>
            </div>
        </section>
    )
}