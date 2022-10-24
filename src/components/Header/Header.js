import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handelLogout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">IT Source</Link>
                </div>
                <div className="flex-none">
                    <div className="">
                        <Link className="btn btn-ghost normal-case text-base" to='/'>Home</Link>
                        <Link className="btn btn-ghost normal-case text-base" to='/courses'>Courses</Link>
                        <Link className="btn btn-ghost normal-case text-base" to='/faq'>FAQ</Link>
                        <Link className="btn btn-ghost normal-case text-base" to='/blog'>Blog</Link>

                        <Link className="btn btn-ghost normal-case text-base" to='/register'>Register</Link>

                    </div>
                    {user?.email ?


                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">

                                    <img src="https://placeimg.com/80/80/people" alt='' />
                                </div>
                            </label>
                            <div>{user?.email}</div>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">


                                <li onClick={handelLogout}>Logout</li>
                            </ul>
                        </div>

                        : <Link className="btn btn-ghost normal-case text-base" to='/login'>Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Header;