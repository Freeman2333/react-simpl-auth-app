import React from 'react'
import PropTypes from 'prop-types';
import './Login.css';

function Login({ setToken}) {
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e=> setUserName(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e=> setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit" >Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login