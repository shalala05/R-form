import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const CustomButton = ({ text, warnMessage, hint }) => {
    const handleClick = () => {
        if (warnMessage) {
            alert(warnMessage);
        }
    };

    return (
        <button
            className={`custom-button ${warnMessage ? "warn" : ""} ${hint ? "hint" : ""}`}
            onClick={handleClick}
            title={hint || ""}
        >
            {text}
        </button>
    );
};

CustomButton.propTypes = {
    text: PropTypes.string.isRequired,
    warnMessage: PropTypes.string,
    hint: PropTypes.string
};

export default CustomButton;