import styles from "./Nav.module.scss";
import { useState } from "react";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.NavBar}>
            <span className={styles.Logo}>Stephen Treasure</span>
            <div className={`${styles.Items} ${isOpen && styles.ItemsOpen}`}>
                <a onClick={() => setIsOpen(!isOpen)} href="#About">
                    About
                </a>
                <a onClick={() => setIsOpen(!isOpen)} href="#Projects">
                    Projects
                </a>
                <a onClick={() => setIsOpen(!isOpen)} href="#Contact">
                    Contact
                </a>
                {/* <a onClick={() => setIsOpen(!isOpen)} download>
                    Resume
                </a> */}
            </div>
            <div
                className={`${styles.NavToggle} ${
                    isOpen && styles.NavBarOpen
                } `}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className={styles.Bar}></div>
            </div>
        </header>
    );
};

export default Nav;
