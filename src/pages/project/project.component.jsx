
import React from 'react';
import 'font-awesome/css/font-awesome.css';
import './project.styles.css';

const Project = () => {
    const year = new Date().getFullYear();

    return (
    <div className='project-page'> Coming Soon 
        <footer>
            <p>Copyright © Chen Liang {year}</p>
        </footer>
    </div>
    );
};

export default Project;
