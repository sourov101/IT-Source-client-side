import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData();
    console.log(course)
    const { title, price, description, category, image, rating } = course;
    return (
        <div className='mx-20 my-20'>
            <div key={course.id}>
                <div className="card w-auto bg-base-100 shadow-xl mb-5">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <div className="card-actions justify-end">
                            <div className='card-text'>
                                {description}
                            </div>
                            <p>Category: {category}</p>
                            <p>Price: {price}</p>
                            <p>Rating: {rating.rate}</p>

                            <Link className='mx-2' to={`/checkout/${course.id}`}> <button className="btn btn-primary">Get premium access</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;