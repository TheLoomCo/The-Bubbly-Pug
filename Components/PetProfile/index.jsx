import React, { useState } from 'react'
import { FaPaw } from 'react-icons/fa'

const PetProfileForm = () => {
    return (
        <div className="pet-profile__section">
            <h1 className='pet-profile__header'>Pet <span><FaPaw /></span>file</h1>
            <form className='pet-profile__form'>

                {/* Medications, neutered / spayed (checkbox), delete profile button  */}
                <fieldset class="pet-profile__fieldset">
                    <label htmlFor="petPhoto" class="pet-profile-image-upload__label">
                        <pre class="text">
                            {`Click to Upload 
Your Pet's Favorite Photo!`}
                        </pre>
                    </label>
                    {/* <button id="custom-btn">Choose a file</button> */}
                    <input id="petPhoto" type="file" hidden />
                </fieldset>

                <fieldset className='pet-name__fieldset'>
                    <label htmlFor="name" className='pet-profile__label'>Name</label>
                    <input id="name" className='pet-profile__input' type="text" />
                </fieldset>

                <fieldset className='pet-gender__fieldset'>
                    <label htmlFor="gender" className='pet-profile__label'>Gender</label>
                    <input id="gender" className='pet-profile__input' type="text" />
                </fieldset>

                <fieldset className='pet-age__fieldset'>
                    <label htmlFor="age" className='pet-profile__label'>Age</label>
                    <input id="age" className='pet-profile__input' type="text" />
                </fieldset>

                <fieldset className='pet-weight__fieldset'>
                    <label htmlFor="weight" className='pet-profile__label'>Weight</label>
                    <input id="weight" className='pet-profile__input' type="text" />
                </fieldset>

                <fieldset className='pet-breed__fieldset'>
                    <label htmlFor="breed" className='pet-profile__label'>Breed</label>
                    <input id="breed" className='pet-profile__input' type="text" />
                </fieldset>

                <fieldset className='pet-status__fieldset'>
                    <label htmlFor="status" className='pet-profile__label pet-status__label'>Status</label>
                    <select id="status" className='pet-status__select'>
                        <option>None</option>
                        <option>Neutered</option>
                        <option>Spayed</option>
                    </select>
                </fieldset>

                <fieldset className='pet-medications__fieldset'>
                    <label htmlFor="medications" className='pet-profile__label'>Medications</label>
                    <input id="medications" className='pet-profile__input' type="text" />
                </fieldset>

                <fieldset className='pet-allergens__fieldset'>
                    <label htmlFor="allergens" className='pet-profile__label'>Allergens</label>
                    <input id="allergens" className='pet-profile__input' type="text" />
                </fieldset>

                <fieldset className='additional-info'>
                    <label htmlFor="additionalInfo" className='pet-profile__label'>Additional Info</label>
                    <textarea id="additionalInfo" className='pet-profile__input' rows={5} />
                </fieldset>

                <button className='pet-profile__submit' type="submit"><FaPaw /> Create Pawfile<FaPaw /></button>

            </form>
        </div >
    )
}

export default PetProfileForm