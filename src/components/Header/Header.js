import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import image from '../assets/images/apple-touch-icon.png';


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
                    <Link to='/' className="btn btn-ghost normal-case text-xl text-amber-500"><img style={{ width: 30, height: 30, margin: 10 }} src={image} alt=''></img> IT Source</Link>
                </div>
                <div className="flex-none">
                    <div>
                        <Link className="btn btn-ghost normal-case text-base hover:text-amber-500" to='/'>Home</Link>
                        <Link className="btn btn-ghost normal-case text-base hover:text-amber-500" to='/courses'>Courses</Link>
                        <Link className="btn btn-ghost normal-case text-base hover:text-amber-500" to='/faq'>FAQ</Link>
                        <Link className="btn btn-ghost normal-case text-base hover:text-amber-500" to='/blog'>Blog</Link>
                        <Link className="btn btn-ghost normal-case text-base hover:text-amber-500" to='/register'>Register</Link>

                        <label className="swap ">
                            <input type="checkbox" />
                            <div className="swap-on btn btn-ghost normal-case text-base hover:text-amber-500" data-theme="light">Light</div>
                            <div className="swap-off btn btn-ghost normal-case text-base hover:text-amber-500" data-theme="dark">Dark</div>
                        </label>


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