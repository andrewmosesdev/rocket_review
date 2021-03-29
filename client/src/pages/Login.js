import { useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/auth';
import { SprkHighlightBoard, SprkTextInput, SprkRevealInput, SprkButton, SprkCenteredColumn } from '@sparkdesignsystem/spark-react';

const Login = () => {
    const { login, isLoggedIn } = useAuth();
    // History and location are hooks we can use to manipulate our page's history!
    const history = useHistory();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // This is the key part to our redirector. We can pull the prior location out here, if it exists
    const { from } = { from: { pathname: '/review' } };

    const handleSubmit = event => {
        event.preventDefault();
        if (event.keydown === 13) {
            login(email, password).then(res => {
                history.replace(from);
            });
        }
        login(email, password).then(res => {
            history.replace(from);
        });
    };

    if (isLoggedIn()) {
        return <Redirect to={location.state || '/'} />;
    }

    return (

        <div style={{ marginTop: '10%', borderStyle: 'solid', paddingBottom: '50px', marginRight: '200px', marginLeft: '200px', borderRadius: '5px', marginTop: '80px', marginBottom: '100px'}}>
            <SprkHighlightBoard
    
                variant="noImage"

                heading="Welcome To Rocket Review"

                idString="highlightboard-2"

            />

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <form onSubmit={handleSubmit} style={{width: 'full', marginLeft: ''}}>
                    <label htmlFor='username'>Username:</label>
                    <SprkTextInput
                        label=""
                        name="username-input-label"
                        onChange={event => setEmail(event.target.value)}
                    />
                    <label htmlFor='password'>Password:</label>
                    <SprkRevealInput
                        label=""
                        toggleLabel="Show Password"
                        name="password-1"
                        onChange={event => setPassword(event.target.value)}
                    />
                    <SprkButton idString="button-1" analyticsString="button-1-analytics">
                        Login
                </SprkButton>
                </form>
            </div>


        </div >
    );
};

export default Login;