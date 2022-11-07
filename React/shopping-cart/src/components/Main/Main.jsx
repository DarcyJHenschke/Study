import React from "react";
import { useState } from "react";
import styles from "./Main.module.scss";
import ItemCard from "../ItemCard/ItemCard";
const Main = ({ items }) => {
    console.log(items.products);
    return (
        <main className={styles.Main}>
            <h2>Products</h2>
            <div className={styles.Row}>
                {items.products.map((item) => {
                    return <ItemCard key={item.id} item={item} />;
                })}
            </div>
        </main>
    );
};

export default Main;
