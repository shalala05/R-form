import React from "react";

const CustomButton = ({ text, warnMessage, hint }) => {
    const handleClick = () => {
        if (warnMessage) {
            alert(warnMessage);
        }
    };

    return (
        <button
            className={`custom-button ${warnMessage ? "warn" : ""} ${hint ? "hint" : ""
                }`}
            onClick={handleClick}
            title={hint || ""}
        >
            {text}
        </button>
    );
};
export default CustomButton;