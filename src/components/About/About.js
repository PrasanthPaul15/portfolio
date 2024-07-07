// About.js
import React from 'react';
import './About.css'; // Importing the CSS file

const About = () => {
  return (
    <div className='about-bg-container'>
    <div className="about-container">
      <h1 className="title">About Me</h1>
      <p>Hello! I am M.Prasanth Paul, a passionate web developer with experience in creating dynamic and responsive websites using modern web technologies.</p>
      <p>I specialize in React.js and have a strong foundation in HTML, CSS, and JavaScript. I enjoy solving complex problems and continuously learning new skills to improve my craft.</p>
      <p>In my free time, I love to contribute to open-source projects, write technical blogs, and explore new places.</p>
      <h3 className='side-headings'>Skills and Technologies</h3>
      <ul className='list-items'>
        <li className='list-item'>Front-End: HTML, CSS, JavaScript, React</li>
        <li className='list-item'>Back-End: Node.js, Express.js, MongoDB, SQLite</li>
        <li className='list-item'>Tools: Git, GitHub, VS Code</li>
        <li className='list-item'>Database: SQLite, MongoDB</li>
      </ul>
      <h3 className='side-headings'>My Approach</h3>
      <p>I believe in writing clean, maintainable code and following best practices to ensure that my projects are scalable and efficient. I thrive in collaborative environments and enjoy working closely with designers, product managers, and other developers to bring ideas to life.</p>
      <h3 className='side-headings'>Project Experience</h3>
      <ul className='list-items'>
        <li className='list-item'>E-commerce Platform: Developed a full-stack e-commerce site using React and Node.js</li>
        <li className='list-item'>Built a social networking app with real-time chat functionality using Vue.js and Firebase.</li>
        <li className='list-item'>Portfolio Website: Designed and developed personal portfolio sites for clients, showcasing their work with sleek and responsive designs.</li>
        </ul>
    </div>
    </div>
  );
};

export default About;
