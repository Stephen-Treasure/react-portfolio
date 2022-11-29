import React from "react";
import Nav from "../../component/Nav/Nav";
import styles from "./Home.module.scss";
import ProjectList from "../ProjectList/ProjectList";
import deakinCollege from "./img/deakinCollege.png";
import deakinCollege2 from "./img/deakinCollege2.png";
import deakinUniversity from "./img/deakinUniversity.png";

const sendEmail = () => {
    window.location = "mailto: stephentreasure8@gmail.com ";
};

const About = () => {
    return (
        <div className={styles.MainBackground}>
            <Nav />
            <div className={styles.Main}>
                <div className={styles.About}>
                    <div className={styles.Intro}>
                        <br />
                        <br />
                        <h1>Hey, I'm Stephen</h1>
                        <h3>Software Engineer</h3>
                        <h4>_nology</h4>
                    </div>
                </div>
                <div id="About" className={styles.Link}></div>

                <div className={styles.About}>
                    <h1 className={styles.TitleOne}>About</h1>
                    <p className={styles.AboutPara}>
                        Hey my name is Stephen, I am a software engineer trainee
                        through the technology consultancy porgram at _nology.
                        During the program I gained an understanding of the
                        following:
                        <br />
                        <br />
                    </p>
                    <div>
                        {/* <h3>Skills</h3> */}
                        <p className={styles.SkillsPara}>
                            <ul className={styles.SkillList}>
                                <li>
                                    <i class="fa-brands fa-html5"></i>
                                    HTML
                                </li>
                                <li>
                                    <i class="fa-brands fa-css3-alt"></i>
                                    CSS
                                </li>
                                <li>
                                    <i class="fa-brands fa-sass"></i>SCSS
                                </li>
                                <li>
                                    <i class="fa-brands fa-square-js"></i>
                                    JavaScript
                                </li>
                                <li>
                                    <i class="fa-brands fa-react"></i>React
                                </li>
                                <li>
                                    <i class="fa-brands fa-java"></i>Java
                                </li>
                                <li>
                                    <i class="fa-solid fa-database"></i>SQL
                                </li>
                                <li>
                                    <i class="fa-solid fa-leaf"></i>
                                    Spring
                                </li>
                                <li>
                                    <i class="fa-brands fa-google"></i>
                                    FireStore
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className={styles.Test}>
                        <h2>My studies</h2>
                        <br />
                        <h3 className={styles.Year}>
                            Bachelor of Software Engineering
                        </h3>
                        <h4>Deakin University</h4>
                        <p className={styles.Year}>Current</p>
                        <br />
                        <br />
                        <h3 className={styles.Year}>
                            Diploma of Information Technology
                        </h3>
                        <h4>Deakin College</h4>
                        <p className={styles.Year}>2021</p>
                    </div>
                </div>
                <div id="Projects" className={styles.Link}></div>
                <h1 className={styles.TitleTwo}>Projects</h1>
                <div className={styles.Project}>
                    <div>
                        <ProjectList />
                    </div>
                </div>
                <div id="Contact" className={styles.Link}></div>
                <h1 className={styles.ContactTitle}> Contact</h1>
                <div className={styles.Contact}>
                    <div>
                        <p className={styles.ContactPara}>
                            If you would like to contact me please email:{" "}
                            <button
                                className={styles.Email}
                                onClick={sendEmail}
                            >
                                Here
                            </button>
                        </p>
                    </div>
                </div>
                <ul className={styles.UlList}>
                    <li>
                        <a href="https://github.com/Stephen-Treasure">
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/stephen-treasure/">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    {/* <li>
                        <a href="https://www.instagram.com/stephentreasure/">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li> */}
                </ul>
                <ul className={styles.UlList2}>
                    <li>
                        <a
                            className={styles.duh}
                            href="mailto: stephentreasure8@gmail.com "
                        >
                            stephentreasure8@gmail.com ⎯⎯⎯⎯⎯⎯
                        </a>
                    </li>
                </ul>
                <ul className={styles.UlList3}>
                    <li>
                        <a
                            className={styles.duh}
                            href="mailto: stephentreasure8@gmail.com "
                        >
                            stephentreasure8@gmail.com
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default About;
