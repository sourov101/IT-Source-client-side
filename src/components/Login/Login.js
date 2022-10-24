import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../context/UserContext';
const Login = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const handelSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                form.reset();
            })
            .catch(error => {
                console.error(error)
            })


    }


    const handelGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                const user = res.user;
                console.log(user)

            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provide the needed information to login!!!    </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelSubmit} className="card-body">
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
                                <label className="label">
                                    <Link to='/register' className="label-text-alt link link-hover">Don't have an account? Register now!!!</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handelGoogleSignIn} className="btn btn-primary"><FaGoogle className='me-4'></FaGoogle>  Login with Google</button>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary"><FaGithub></FaGithub>
                                    Login with Github</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;