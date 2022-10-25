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
                    <Link to='/' className="btn btn-ghost normal-case text-xl text-amber-500"> IT Source</Link>
                </div>
                <div className="flex-none">
                    <div>
                        <Link className="btn btn-ghost normal-case text-base hover:text-amber-500" to='/'>Home</Link>
                        <Link className="btn btn-ghost normal-case text-base hover:text-amber-500" to='/courses'>Courses</Link>
                        <Link className="btn btn-ghost normal-case text-base hover:text-amber-500" to='/faq'>FAQ</Link>
                        <Link className="btn btn-ghost normal-case text-base hover:text-amber-500" to='/blog'>Blog</Link>

                        <Link className="btn btn-ghost normal-case text-base hover:text-amber-500" to='/register'>Register</Link>

                    </div>
                    {user?.uid ?
                        <div className=" tooltip tooltip-left dropdown dropdown-end " data-tip={user?.displayName}>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full" >

                                    <img src={user?.photoURL} alt='' />
                                </div>
                            </label>
                            <div></div>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">


                                <li onClick={handelLogout} className='hover:text-amber-500'>Logout</li>
                            </ul>
                        </div>

                        : <Link className="btn btn-ghost normal-case text-base hover:text-amber-500" to='/login'>Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Header;