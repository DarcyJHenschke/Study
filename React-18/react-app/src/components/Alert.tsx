import { ReactNode } from "react";

interface Props {
    setAlertClicked: (alertClicked: boolean) => void;
    setButtonClicked: (buttonClicked: boolean) => void;
}

const Alert = ({ setAlertClicked, setButtonClicked }: Props) => {
    const handleAlertClick = () => {
        setAlertClicked(true);
        setButtonClicked(false);
    };
    return (
        <div
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
        >
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={handleAlertClick}
            ></button>
        </div>
    );
};

export default Alert;
