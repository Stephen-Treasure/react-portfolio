import styles from "./Nav.module.scss";
import { useEffect, useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { icons } from "react-icons/lib";

const Nav = () => {
    const navRef = useRef();

    const [mobile, setMobile] = useState(false);

    const refreshPage = () => {
        window.location.reload(false);
    };

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const [isOpen, setIsOpen] = useState(false);

    // const controlNavbar = () => {
    //     if (window.onload) {
    //         setShow(true);
    //     }

    //     if (window.scrollY < lastScrollY) {
    //         setShow(false);
    //     } else {
    //         setShow(true);
    //     }

    //     setLastScrollY(window.scrollY);
    // };

    // console.log("windows" + window.scrollY);
    // console.log("last" + lastScrollY);

    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         window.addEventListener("scroll", controlNavbar);

    //         return () => {
    //             window.removeEventListener("scroll", controlNavbar);
    //         };
    //     }
    // }, [lastScrollY]);

    // useEffect(() => {
    //     window.onload();
    // }, []);

    return (
        <header className={styles.NavBar}>
            {/* <nav className={styles.Nav} ref={navRef}>
                <ul className={styles.active}>
                    <li>
                        <a className={styles.NavText} href="">
                            Hi
                        </a>
                    </li>
                    <li>
                        <a className={styles.NavText} href="#About">
                            About
                        </a>
                    </li>
                    <li>
                        <a className={styles.NavText} href="#Projects">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a className={styles.NavText} href="#Contact">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a className={styles.NavText} download>
                            Resume
                        </a>
                    </li>
                </ul>
            </nav> */}
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
                <a onClick={() => setIsOpen(!isOpen)} download>
                    Resume
                </a>
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
