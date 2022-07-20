import React, { useState } from 'react'
import Image from 'next/image'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import styles from './footer.module.css'
import { useRouter } from 'next/router';


const Footer = () => {
    const router = useRouter();
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

    const userAccount = router.pathname.includes('/account');
    return (
        <div id="contact" className={styles.wrapper}>
            <footer className={userAccount ? styles.AccountFooter : styles.Footer}>
                {
                    !userAccount && (
                        <div className={styles.content__container}>
                            {/* <div className='footer-content__business-location-info'> */}
                            <div className={styles.business_hours}>
                                <h3>Hours of Operation:</h3>

                                <div>
                                    <p className={styles.day}>Monday - Friday</p>
                                    <p className={styles.available_hours}>10am - 11pm</p>
                                </div>
                                <div>
                                    <p className={styles.day}>Saturday </p>
                                    <p className={styles.available_hours}>10am - 12am</p>
                                </div>
                                <div>
                                    <p className={styles.day}>Sunday </p>
                                    <p className={styles.available_hours}>11am - 6pm</p>
                                </div>
                            </div>

                            {/* </div> */}
                            <div className={styles.newsletter_address_phone_socials}>
                                <form>
                                    <fieldset>
                                        <label htmlFor='email'>Sign Up for our Newsletter</label>
                                        <input id="email" type="email" placeholder='Stay up to date!' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </fieldset>
                                    <button type="submit" value={email} onClick={(e) => handleSignup(e)}>Sign Up!</button>
                                </form>

                                <div className={styles.business__info}>
                                    <p className={styles.business_address}>
                                        123 Tampa Bay Ave. <br />
                                        Tampa, FL 77777
                                    </p>
                                    <p className={styles.business_phone}>
                                        (123)-456-7890
                                    </p>
                                    <div className={styles.footer__socials}>
                                        <BsFacebook />
                                        <BsInstagram />
                                        <BsTwitter />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                <span className={userAccount ? styles.AccountFooterContent : styles.copyright}>Copyright &copy; {new Date().getFullYear()} LoomCo & ALStudio</span>
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