import { Link } from 'react-router-dom';
import useAuth from '../hooks/auth';
import React from 'react';

const Navbar = () => {
    const { isLoggedIn, logout, getProfile } = useAuth();
    return (
        <div>
            <ul>
                {isLoggedIn() ?
                    <>
                        <li><Link to='/create-review'>Submit Question</Link></li>
                        <li><Link to='/review'>Review</Link></li>
                        <li>Hello, {getProfile().email}</li>
                        <li><Link onClick={() => logout()} to='/'>Logout</Link></li>
                    </>
                    :
                    <>
                    </>
                }

            </ul>
            <br />
        </div>
    );
};

export default Navbar;