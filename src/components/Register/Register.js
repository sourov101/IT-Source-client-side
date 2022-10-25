import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Register = () => {
    const { createUser, profile } = useContext(AuthContext)

    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);
    const handelSubmit = (event) => {
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;


        if (password.length < 6) {
            setPasswordError('Password should be at least 6 character');
            return;
        }



        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                setSuccess(true);
                setPasswordError(false);
                profile(name, photo);
                form.reset();
            })
            .catch(error => {
                console.error(error)
            })



    }


    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold text-amber-500">Register now!</h1>
                            <p className="py-6">Provide the needed information to register!!!    </p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handelSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="full name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="photo url" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <p className=" text-red-500">{passwordError}</p>
                                    {
                                        success && <p className='text-green-500'>Account created successfully</p>
                                    }

                                    <label className="label">
                                        <Link to='/login' className="label-text-alt link link-hover">Already have an account? Login now!!!</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;