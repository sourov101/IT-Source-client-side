import React from 'react';

const Courses = () => {
    return (
        <div className='grid grid-cols-3 gap-4 container mx-auto my-20 '>
            <div className='  row-span-6 gap-6'>
                <h1>right nav</h1>
                <button className="btn btn-wide my-3">Wide</button>
                <button className="btn btn-wide my-3">Wide</button>
                <button className="btn btn-wide my-3">Wide</button>
                <button className="btn btn-wide my-3">Wide</button>
                <button className="btn btn-wide my-3">Wide</button>
                <button className="btn btn-wide my-3">Wide</button>
            </div>
            <div className='col-span-1 gap-4'>
                <div className="card w-96 bg-base-100 shadow-xl ">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Courses;