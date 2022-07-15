import React from 'react'
import { FaPaw } from 'react-icons/fa'

const MeetandGreetForm = () => {
    return (
        <section id="meetAndGreet" className="meet-and-greet__section">
            <h1 className='meet-and-greet__header'>Book Your Meet and Greet!</h1>
            <form className='meet-and-greet__form'>
                <fieldset>
                    <label htmlFor="name" className='meet-and-greet__label'>Name</label>
                    <input id="name" className='meet-and-greet__input' type="text" />
                </fieldset>
                <fieldset>
                    <label htmlFor="phone" className='meet-and-greet__label'>Phone Number</label>
                    <input id="phone" className='meet-and-greet__input' type="tel" />
                </fieldset>
                <fieldset>
                    <label htmlFor="email" className='meet-and-greet__label'>Email</label>
                    <input id="email" className='meet-and-greet__input' type="email" />
                </fieldset>
                <fieldset>
                    <label htmlFor="date" className='meet-and-greet__label'>Date</label>
                    <input id="date" className='meet-and-greet__input' type="date" />
                </fieldset>

                <button className='meet-and-greet__submit' type="submit"><FaPaw /> Book Now <FaPaw /></button>

            </form>
        </section >
    )
}

export default MeetandGreetForm