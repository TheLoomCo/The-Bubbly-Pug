import React, { useState } from 'react'
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
const LoginForm = () => {
    const router = useRouter();
    const { data: session } = useSession();

    const handleSignIn = () => {
        signIn();
        router.push('/')
    }
    return (
        <div className="login__wrapper">
            <h1 className='login__header'>Login</h1>
            <form className='login__form'>
                <fieldset>
                    <label htmlFor="email" className='login__label'>Email</label>
                    <input id="email" className='login__input' type="email" />
                </fieldset>

                <fieldset>
                    <label htmlFor="password" className='login__label'>Password</label>
                    <input id="password" className='login__input' type="password" />
                </fieldset>

                <button className='login__submit' type="submit" onClick={handleSignIn}>Login</button>
                {/* Need an Account? Register Here! */}

            </form>
        </div >
    )
}

export default LoginForm