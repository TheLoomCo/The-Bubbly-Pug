import React, { useState } from 'react'
import Image from 'next/image'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    const [email, setEmail] = useState("")

    const handleSignup = (e) => {
        e.preventDefault();
        toast.success('Thanks for Signing Up!', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });

        setEmail("");

    }
    return (
        <div id="contact" className='footer__wrapper'>
            <footer>

                <div className='footer-content__container'>
                    <div className='footer-content__business-location-info'>
                        <div className='footer-content__business-hours'>
                            <h3>Hours of Operation:</h3>

                            <div>
                                <p className='day'>Monday - Friday</p>
                                <p className='available-hours'>10am - 11pm</p>
                            </div>
                            <div>
                                <p className='day'>Saturday </p>
                                <p className='available-hours'>10am - 12am</p>
                            </div>
                            <div>
                                <p className='day'>Sunday </p>
                                <p className='available-hours'>11am - 6pm</p>
                            </div>
                        </div>

                    </div>
                    <div className='footer-content__newsletter'>
                        <form>
                            <fieldset>
                                <label htmlFor='email'>Sign Up for our Newsletter</label>
                                <input id="email" type="email" placeholder='Stay up to date!' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </fieldset>
                            <button type="submit" value={email} onClick={(e) => handleSignup(e)}>Sign Up!</button>
                        </form>
                        <div className='business__info'>

                            <p className='business-address'>
                                123 Tampa Bay Ave.
                                Tampa, FL 77777
                            </p>
                            <p className='business-phone'>
                                (123)-456-7890
                            </p>
                        </div>
                    </div>



                </div>
                <span className='copyright'>Copyright &copy; {new Date().getFullYear()} LoomCo & ALStudio</span>
                <ToastContainer
                    position="bottom-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                />
            </footer>
        </div>
    )
}

export default Footer