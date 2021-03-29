import React from 'react';
import { SprkFooter } from '@sparkdesignsystem/spark-react';
import useAuth from '../hooks/auth';


const Footer = () => {
    const { isLoggedIn } = useAuth();
    return (
        <div>
            {isLoggedIn() ?
                <div>
                    <SprkFooter />
                </div>
                :
                <>
                </>
            }
        </div>
    )
}

export default Footer;