import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
    const buttonTypes = [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
    ];
    return (
        <div>
            <Button buttonTypes={buttonTypes}></Button>
        </div>
    );
};

export default App;
