import React from "react";
import { NavLink } from "react-router-dom";

const ProjectCard = (props) => {
    const { projects } = props;

    return;
    <NavLink to={`/project/${projects.link}`}>
        <div>
            <div>
                <h3>{projects.skills}</h3>
                <p>{projects.name}</p>
            </div>
        </div>
    </NavLink>;
};

export default ProjectCard;
