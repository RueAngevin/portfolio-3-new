import React from 'react';
import ProjectItem from './ProjectItem';
import portfolioImg from '../assets/portfolio.png';

const Projects = () => {
    return (
        <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quos eum aspernatur nesciunt consectetur ex voluptates quisquam eligendi, veniam enim nulla neque nihil voluptatum magnam quasi voluptatem? Aperiam, animi velit?
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={portfolioImg} title='Old Portfolio' />
                <ProjectItem img={portfolioImg} title='Old Portfolio' />
                <ProjectItem img={portfolioImg} title='Old Portfolio' />
                <ProjectItem img={portfolioImg} title='Old Portfolio' />
            </div>
        </div>
    );
};

export default Projects;