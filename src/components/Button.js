import React from 'react'

function Button({ position, action }) {

    const buttonStyle = {
        "transform": position === "left" ? "rotate(45deg) translateX(0.2rem) translateY(-0.2rem)" : "rotate(-135deg) translateX(0.2rem) translateY(-0.2rem)",
    }
    const containerStyle = {
        "marginLeft": position === "left" ? "unset" : "0.2rem",
    }
    return (
        <div className="button-container" style={containerStyle} onClick={action} data-pos={position}>
            <div className="button" style={buttonStyle}></div>
        </div>
    )
}

export default Button
