import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import image from '../assets/images/apple-touch-icon.png';
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

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
            <nav className="navbar w-full sm:mb-32">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl text-amber-500"><img style={{ width: 30, height: 30, margin: 10 }} src={image} alt=''></img> IT Source</Link>
                </div>
                <ul className={`md:flex-row sm:flex-row  sm:mx-32 absolute md:static ${open ? 'top-20' : 'top-[-400px]'}`}>


                    <Link className="btn btn-ghost normal-case text-base hover:text-amber-500" to='/'>Home</Link>
                    <Link className="btn btn-ghost normal-case text-base hover:text-amber-500" to='/courses'>Courses</Link>
                    <Link className="btn btn-ghost normal-case text-base hover:text-amber-500" to='/faq'>FAQ</Link>
                    <Link className="btn btn-ghost normal-case text-base hover:text-amber-500" to='/blog'>Blog</Link>
                    <Link className="btn btn-ghost normal-case text-base hover:text-amber-500" to='/register'>Register</Link>





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


                </ul>
                <div className='md:hidden'>
                    {
                        open ? <FaTimes onClick={() => setOpen(!open)} className='hover:text-amber-500'></FaTimes> : <FaBars onClick={() => setOpen(!open)} className='hover:text-amber-500'></FaBars>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;