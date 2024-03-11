import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Projects.css";

export async function loader() {
    try {
        const result = await fetch('https://api.github.com/users/royderks/repos')
        const projects = await result.json()
        if (projects) {
            return {
                projects,
            }
        }
    }
    catch (error) {
        return {
            error
        }
    }
}

function Projects() {
    const {projects, error = ''} = useLoaderData()

    return (
        <div className="Projects-container">
            <h2>Projects</h2>
            {
                error ? (<p>Loading...</p>) : (
                    <ul className="Projects-list">
                        {projects.map((project) => (
                            <Link to={`/project/${project.name}`}>
                                <li className="Projects-listitem">
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <p>Language: {project.language}</p>
                                </li>
                            </Link>
                        ))}
                    </ul>

                )
            }
        </div>
    )
}

export default Projects