import React, { useState } from 'react'
import { FaPaw } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import styles from './create-pet-profile.module.css';
import { toast, ToastContainer } from 'react-toastify';

const PetProfileForm = () => {
    const [upload, setUpload] = useState(false);
    const handleUpload = () => {
        setUpload(true);
        toast.error('Functionality Disabled', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        })
    }

    return (
        <div className={styles.pet_profile__section}>
            <h1 className={styles.pet_profile__header}>Pet <span><FaPaw /></span>file</h1>
            <form className={styles.pet_profile__form}>

                {/* Medications, neutered / spayed (checkbox), delete profile button  */}
                <fieldset className={styles.pet_profile__fieldset}>
                    {upload && (
                        <ToastContainer />
                    )}
                    <label htmlFor="petPhoto" className={styles.pet_profile_image_upload__label}>
                        <pre className={styles.text}>
                            {`Click to Upload 
Your Pet's Favorite Photo!`}
                        </pre>
                    </label>
                    {/* <button id="custom-btn">Choose a file</button> */}
                    <input onChange={handleUpload} id="petPhoto" type="file" hidden />
                </fieldset>

                <fieldset className={styles.pet_name__fieldset}>
                    <label htmlFor="name" className={styles.pet_profile__label}>Name</label>
                    <input id="name" className={styles.pet_profile__input} type="text" />
                </fieldset>

                <fieldset className={styles.pet_gender__fieldset}>
                    <label htmlFor="gender" className={styles.pet_profile__label}>Gender</label>
                    <input id="gender" className={styles.pet_profile__input} type="text" />
                </fieldset>

                <fieldset className={styles.pet_age__fieldset}>
                    <label htmlFor="age" className={styles.pet_profile__label}>Age</label>
                    <input id="age" className={styles.pet_profile__input} type="text" />
                </fieldset>

                <fieldset className={styles.pet_weight__fieldset}>
                    <label htmlFor="weight" className={styles.pet_profile__label}>Weight</label>
                    <input id="weight" className={styles.pet_profile__input} type="text" />
                </fieldset>

                <fieldset className={styles.pet_breed__fieldset}>
                    <label htmlFor="breed" className={styles.pet_profile__label}>Breed</label>
                    <input id="breed" className={styles.pet_profile__input} type="text" />
                </fieldset>

                <fieldset className={styles.pet_status__fieldset}>
                    <label htmlFor="status" className={styles.pet_profile__label}>Status</label>
                    <select id="status" className={styles.pet_status__select}>
                        <option>None</option>
                        <option>Neutered</option>
                        <option>Spayed</option>
                    </select>
                </fieldset>

                <fieldset className={styles.pet_medications__fieldset}>
                    <label htmlFor="medications" className={styles.pet_profile__label}>Medications</label>
                    <input id="medications" className={styles.pet_profile__input} type="text" />
                </fieldset>

                <fieldset className={styles.pet_allergens__fieldset}>
                    <label htmlFor="allergens" className={styles.pet_profile__label}>Allergens</label>
                    <input id="allergens" className={styles.pet_profile__input} type="text" />
                </fieldset>

                <fieldset className={styles.additional_info}>
                    <label htmlFor="additionalInfo" className={styles.pet_profile__label}>Additional Info</label>
                    <textarea id="additionalInfo" className={styles.pet_profile__input} rows={5} />
                </fieldset>

                <button className={styles.pet_profile__submit} type="submit"><FaPaw /> Create Pawfile<FaPaw /></button>

            </form>
        </div >
    )
}

export default PetProfileForm