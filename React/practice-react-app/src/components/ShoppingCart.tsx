import React from "react";

interface Props {
    shoppingCartItems: string[];
}

const ShoppingCart = ({ shoppingCartItems }: Props) => {
    return (
        <>
            {shoppingCartItems.map((item) => (
                <p>{item}</p>
            ))}
        </>
    );
};

export default ShoppingCart;
