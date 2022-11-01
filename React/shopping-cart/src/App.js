import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Basket from "./components/Basket/Basket";
import styles from "./App.module.scss";
function App() {
    return (
        <div className={styles.App}>
            <div className={styles.MainWrapper}>
                <Header />
                <Main />
            </div>

            <div className={styles.BasketWrapper}>
                <Basket />
            </div>
        </div>
    );
}

export default App;
