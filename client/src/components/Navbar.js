import { Link } from 'react-router-dom';
import useAuth from '../hooks/auth';
import React from 'react';
import { SprkLink } from '@sparkdesignsystem/spark-react';
import rocket from '../assets/rocket.png';

const Navbar = () => {
    const { isLoggedIn, logout, getProfile } = useAuth();
    return (
        <div>
            {isLoggedIn() ?
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2%', paddingBottom: '2%', borderBottomStyle: 'solid' }}>
                    <div>
                        <img src={rocket} alt="rocket-png" style={{marginLeft: '30px', marginTop: '2%'}}></img>
                    </div>

                    <div style={{ marginRight: '5%' }}>
                        <SprkLink
                            variant='simple'
                            analyticsString='link-simple'
                            idString='link-2'
                            href='/create-review'
                        >Submit Question</SprkLink>
                        <br />
                        <SprkLink
                            variant='simple'
                            analyticsString='link-simple'
                            idString='link-2'
                            href='/review'
                        >Review</SprkLink>
                        <br />
                        <SprkLink
                            variant='simple'
                            analyticsString='link-simple'
                            idString='link-2'
                            onClick={() => logout()}
                            to='/'
                        >Logout</SprkLink>
                    </div>
                </div>
                :
                <>
                </>
            }


            <br />
        </div>
    );
};

export default Navbar;