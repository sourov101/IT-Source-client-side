import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold">Welcome to <span className='text-amber-500'>IT Source {user?.displayName}!!!</span> </h1>
                    <p className="mb-5">Now learning from anywhere, and build your bright career. Start your favourite course.</p>
                    <button className="btn btn-primary"><Link to='/courses'>Get Started</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Home;