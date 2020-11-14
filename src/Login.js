import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        console.log("Sign In");
        // e.preventDefault();

        // auth
        //     .signInWithEmailAndPassword(email, password)
        //     .then(auth => {
        //         history.push('/')
        //     })
        //     .catch(error => alert(error.message))
    }

    const register = e => {
        // e.preventDefault();
        console.log("Registered");
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <Link to='/register'>
                    <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
                </Link>
            </div>
        </div>
    )
}

export default Login