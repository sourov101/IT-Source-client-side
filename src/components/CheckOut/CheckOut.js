import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    return (
        <div className='text-center'>
            <h1 className='my-5 text-4xl font-bold text-amber-500'>Checking Out {course.title}</h1>
        </div>
    );
};

export default CheckOut;