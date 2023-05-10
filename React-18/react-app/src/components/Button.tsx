import React, { useState } from "react";

interface Props {
    buttonType: string[];

    setButtonClicked: (buttonClicked: boolean) => void;
}

const Button = ({ buttonType, setButtonClicked }: Props) => {
    const [buttonIndex, setButtonIndex] = useState(0);

    const handleClick = () => {
        buttonIndex === buttonType.length - 1
            ? setButtonIndex(0)
            : setButtonIndex(buttonIndex + 1);
        setButtonClicked(true);
    };
    return (
        <button
            onClick={handleClick}
            type="button"
            className={`btn btn-${buttonType[buttonIndex]}`}
        >
            {buttonType[buttonIndex]}
        </button>
    );
};

export default Button;
