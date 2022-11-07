import React from "react";
import styles from "./ItemCard.module.scss";

const ItemCard = ({ item }) => {
    return (
        <div>
            <img src={item.images[0]} />
            <div>
                <p>{item.title}</p>
                <p>{item.price}</p>
            </div>
        </div>
    );
};

export default ItemCard;
