import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Projects.css";

function ProjectDetail() {
    const {name} = useParams()
    const [project, setProject] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const project = await fetch(`https://api.github.com/repos/royderks/${name}`)
                const result = await project.json()
                if (result) {
                    setProject(result)
                    setIsLoading(false)
                }
                console.log('fetched')
            }
            catch (error) {
                setError(error?.message)
            }
        }
        fetchData(name)
    }, [name])

    return (
        <div className="Projects-container">
            <h2>{name}</h2>
            {
                isLoading ? (<p>Loading...</p>) : (
                    <div>
                        <p>{project.description}</p>
                        <p>Language: {project.language}</p>
                    </div>
                )
            }
        </div>
    )
}

export default ProjectDetail