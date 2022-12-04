import React from "react";
import styles from "./ProjectList.module.scss";
// import Calculator from "../../projects/Calculator/Calculator";
// import { NavLink } from "react-router-dom";

const projects = [
    {
        id: "1",
        image: "blank",
        name: "Javascript Calculator",
        description: "javascript calculator that can do basic calculations",
        github: "https://github.com/Stephen-Treasure/calc2",
        link: "src/projects/Calculator/index.html",
        skills: ["Javascript", "HTML", "CSS"],
    },

    {
        id: "2",
        image: "blank",
        name: "Morse Code Translator",
        description:
            "A translator that can turn english into morse code and vice versa",
        github: "https://github.com/Stephen-Treasure/morse-code",
        skills: ["Javascript", "HTML", "SCSS"],
    },
    {
        id: "3",
        image: "blank",
        name: "Google Books API",
        description:
            "A google books API that will search for books from a word given by the user",
        github: "https://github.com/Stephen-Treasure/google-book-ui",
        skills: ["Javascript", "HTML", "SCSS"],
    },
    {
        id: "4",
        image: "blank",
        name: "Mock eShop",
        description:
            "A google books API that will search for books from a word given by the user",
        github: "https://github.com/Stephen-Treasure/eshop",
        skills: ["Javascript", "HTML", "SCSS", "React"],
    },
    {
        id: "5",
        image: "blank",
        name: "Worlde",
        description: "A simplified version of the popular game Wordle",
        github: "https://github.com/Stephen-Treasure/java-wordle",
        skills: ["Java"],
    },
    // {
    //     id: "5",
    //     image: "blank",
    //     name: "Worlde",
    //     description: "A simplified version of the popular game Wordle",
    //     github: "https://github.com/Stephen-Treasure/java-wordle",
    //     skills: ["Java"],
    // },
];

const ProjectList = () => {
    return (
        <section className={styles.Container}>
            {projects.map((project, i) => (
                <div key={i} className={styles.DivCard}>
                    <p className={styles.Para}>
                        <i className="fa-solid fa-folder"></i>
                        <a href={project.github}>
                            <i class="fa-brands fa-github"></i>
                        </a>
                    </p>
                    <br />
                    <h4>{project.name}</h4>
                    <br />
                    <p>{project.description}</p>

                    <div className={styles.Skills}>
                        <a
                            href="src/projects/Calculator/index.html"
                            className={styles.SkillsCenter}
                        >
                            Link
                        </a>
                        <h6 className={styles.SkillsCenter}>
                            {project.skills.join(" ")}
                        </h6>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ProjectList;
