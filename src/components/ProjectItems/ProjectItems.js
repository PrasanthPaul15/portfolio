import './ProjectItems.css'
import { useParams } from 'react-router-dom'
const ProjectItems=(props)=>{
    const userId=useParams()
    console.log(userId)
    const {project}=props
    const {id,description,link,title}=project

    
    return (
        <div className="projects-container">
          <div className="projects-list">    
          
              <div className="project-card">
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
              
          </div>
        </div>
        
      );
}
export default ProjectItems;