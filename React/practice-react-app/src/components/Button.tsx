import React, { useState } from "react";

interface Props {
    buttonTypes: string[];
}

const Button = ({ buttonTypes }: Props) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isXClicked, setIsXClicked] = useState(false);

    function handleBtnClick() {
        setIsClicked(!isClicked);
        setIsXClicked(false);
    }

    function handleXClicked() {
        setIsXClicked(!isClicked);
        setIsClicked(false);
    }

    return (
        <>
            {isClicked && !isXClicked && (
                <div
                    class="alert alert-warning alert-dismissible fade show"
                    role="alert"
                >
                    <strong>Holy guacamole!</strong> You should check in on some
                    of those fields below.
                    <button
                        onClick={handleXClicked}
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    ></button>
                </div>
            )}
            {buttonTypes.map((button) => (
                <button
                    onClick={handleBtnClick}
                    type="button"
                    class={"btn btn-" + button}
                >
                    {button}
                </button>
            ))}
        </>
    );
};

export default Button;
