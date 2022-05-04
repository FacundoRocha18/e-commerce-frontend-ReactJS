import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';


const LoginScreen = ({ onLogin }) => {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        uId: null,
        uPassword: null,
    })

    const handleUserInfoChanged = ({ target }) => {

        switch (target.name) {

            case 'username':
                setUserData({
                    ...userData,
                    uId: target.value
                })
                break;

            case 'password':

                setUserData({
                    ...userData,
                    uPassword: target.value
                })
                break;
        }
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        onLogin(userData);
    }

    const handleRegister = () => {
        navigate('/api/auth/register', { replace: true })
    }

    return (
        <>
            {
                <div className='login-form-container'>
                    <div className='login-header'>
                        <h2 className='title-center'>Inicie sesión</h2>
                    </div>
                    <form onSubmit={handleSubmit} autoComplete='off'>
                        <input name='username' type='text' placeholder='Ingrese su usuario' autoFocus className='mb-2' required onChange={handleUserInfoChanged}></input>
                        <input name='password' type='password' placeholder='Ingrese su contraseña' className='mb-2' required onChange={handleUserInfoChanged}></input>
                        <button type='submit' className='btn login-button'><p>Iniciar sesión</p></button>
                        <button className='register-btn btn' id='register' onClick={handleRegister}><p>Registrarse</p></button>

                    </form>
                    <div className='login-buttons-container'>
                        <p>Olvidaste tu contraseña?</p>
                        <Link to={'api/auth/forgot'} ><p className='password-link'>Reestablecela aquí.</p></Link>
                    </div>
                </div>
            }
        </>
    )
}

export default LoginScreen;