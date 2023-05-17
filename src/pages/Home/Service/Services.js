import React from 'react';
import marketing from '../../../assets/icons/marketing.jpg'
import graphic from '../../../assets/icons/graphic.jpg'
import html from '../../../assets/icons/html.jpg'
import Service from './Service';
const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Marketing',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: marketing
        },
        {
            id: 2,
            name: 'Graphic',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: graphic
        },
        {
            id: 3,
            name: 'HTML',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: html
        },
    ]
    return (
        <div className='mt-16'>
        <div className='text-center'>
            <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
            <h2 className='text-3xl'>Services We Provide</h2>
        </div>
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                servicesData.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    </div>
    );
};

export default Services;