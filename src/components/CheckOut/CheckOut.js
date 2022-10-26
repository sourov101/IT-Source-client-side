import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const CheckOut = () => {
    const course = useLoaderData();
    const { user } = useContext(AuthContext);
    return (
        <div className='text-center'>
            <h1 className='my-5 text-4xl font-bold text-amber-500'>Thank you {user?.displayName} for checking out {course.title}.</h1>
        </div>
    );
};

export default CheckOut;