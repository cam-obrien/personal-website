import { useEffect } from 'react';
import data from './data/projects-data.json'


const ProjectsPage = () => {

    return(
        <div className="card w-auto bg-base-100 shadow-xl">
        {data.projects.map((project, index) => (
            <div className="card-body">
            <h2 className="card-title">{project.title}</h2>
            <p>{project.techStack}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">View More</button>
            </div>
        </div>
        ))}

        </div>

    );
}

export default ProjectsPage;