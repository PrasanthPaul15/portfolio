import React from 'react';
import './Projects.css';
import ProjectItems from '../ProjectItems/ProjectItems';
const Projects = (props) => {
    console.log(props)

const projects = [ 
  {
    id: 1,
    title: 'Food Munch',
    description: '',
    link: 'https://cssgradient.io/gradient-backgrounds/'
  },
  {
    id: 2,
    title: 'Jobby Application',
    description: 'Description for project two.',
    link: '#'
  },
  {
    id: 3,
    title: 'E-Commerce Application',
    description: 'Description for project three.',
    link: '#'
  },
];

  return (
    <div className="project-page">
      <h1 className='title'>My Project</h1>
      {projects.map(project=>(
        <ProjectItems project={project} key={project.id}/>
      ))}
      
    </div>
  );
};

export default Projects;


