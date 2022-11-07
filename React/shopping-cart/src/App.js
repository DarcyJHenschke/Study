import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Basket from "./components/Basket/Basket";
import styles from "./App.module.scss";
import { useEffect, useState } from "react";

function App() {
    const [items, setItems] = useState([]);
    const products = async () => {
        const data = await fetch("https://dummyjson.com/products?limit=10");
        const json = await data.json();
        setItems(json);
    };

    useEffect(() => {
        products();
    }, []);

    console.log(items);

    return (
        <div className={styles.App}>
            <div className={styles.MainWrapper}>
                <Header />
            </div>

            <div className={styles.BasketWrapper}>
                <Main items={items} />
                <Basket />
            </div>
        </div>
    );
}

export default App;
