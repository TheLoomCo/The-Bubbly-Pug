import React, { useState } from 'react'

const RegisterForm = () => {
    return (
        <div className="register__wrapper">
            <h1 className='register__header'>Register</h1>
            <form className='register__form'>

                <fieldset>
                    <label htmlFor="email" className='register__label'>Email</label>
                    <input id="email" className='register__input' type="email" />
                </fieldset>

                <fieldset>
                    <label htmlFor="password" className='register__label'>Password</label>
                    <input id="password" className='register__input' type="password" />
                </fieldset>

                <button className='register__submit' type="submit">Register</button>
                {/* Already have an account? Login Here! */}

            </form>
        </div >
    )
}

export default RegisterForm