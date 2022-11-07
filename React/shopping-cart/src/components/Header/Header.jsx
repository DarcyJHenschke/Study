import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.TitleWrapper}>
                <a className={styles.TitleLink} href="#/">
                    <h1 className={styles.TitleText}>Small Shopping Cart</h1>
                </a>
            </div>
            <div className={styles.SigninWrapper}>
                <a className={styles.Cart} href="#/cart">
                    Cart
                </a>
                <a className={styles.SignIn} href="#/signin">
                    Sign In
                </a>
            </div>
        </header>
    );
};

export default Header;
