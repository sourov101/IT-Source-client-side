import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courseName')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])



    return (
        <div className='grid grid-cols-2 gap-4 container mx-auto my-20 '>
            <div className='lg:block sm:hidden xl:block'>
                <h1>Courses:  {courses.length}</h1>
                {
                    courses.map(course => <Link key={course.id} to={`/course/${course.id}`}> <button className="btn btn-wide my-3">{course.title}</button></Link>)
                }

            </div>
            <div >
                {
                    courses.map(course =>
                        <div key={course.id}>
                            <div className="card w-52 bg-base-50 shadow-xl mb-5">
                                <figure><img src={course.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{course.title}</h2>
                                    <div className="card-actions justify-end">
                                        <Link className='mx-2' to={`/course/${course.id}`}> <button className="btn btn-primary">Details  {course.title}</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>



        </div>
    );
};

export default Courses;