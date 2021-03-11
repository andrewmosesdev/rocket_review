import { Link } from 'react-router-dom';
import useAuth from '../hooks/auth';

const Navbar = () => {
    const { isLoggedIn, logout, getProfile } = useAuth();
    return (
        <div>
            <h3>Navbar</h3>
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