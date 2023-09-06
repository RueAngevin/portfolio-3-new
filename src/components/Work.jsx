import React from 'react';
import WorkItem from './WorkItem';

const data = [
    {
        year: '2022',
        title: 'Freelancer',
        duration: '1 Year',
        details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad rerum ea ut explicabo at laudantium eius aspernatur obcaecati minus dolore, autem, atque veniam quibusdam doloribus illum cupiditate impedit perspiciatis. Nulla?'
    },

    {
        year: '2022',
        title: 'Freelancer',
        duration: '1 Year',
        details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad rerum ea ut explicabo at laudantium eius aspernatur obcaecati minus dolore, autem, atque veniam quibusdam doloribus illum cupiditate impedit perspiciatis. Nulla?'
    },

    {
        year: '2022',
        title: 'Freelancer',
        duration: '1 Year',
        details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad rerum ea ut explicabo at laudantium eius aspernatur obcaecati minus dolore, autem, atque veniam quibusdam doloribus illum cupiditate impedit perspiciatis. Nulla?'
    },

    {
        year: '2022',
        title: 'Freelancer',
        duration: '1 Year',
        details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad rerum ea ut explicabo at laudantium eius aspernatur obcaecati minus dolore, autem, atque veniam quibusdam doloribus illum cupiditate impedit perspiciatis. Nulla?'
    }
]

const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
            {data.map((item, idx) => (
                <WorkItem
                    key={idx}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                />
            ))}
        </div>
    );
};

export default Work;