import Image from 'next/image';
import React from 'react'
import styles from './pet-profile.module.css';

const PetProfileComp = () => {
    return (
        <main className={styles.Wrapper}>
            <div className={styles.Information}>
                <div className={styles.ImageContainer}>
                    <Image src="/images/hero-b.png" alt="Bubbly Pug Animal Profile Picture, Tidus" height="200" width="200" objectFit="cover" style={{ borderRadius: "20px" }} />
                </div>
                {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p>My name is Tidus!</p>
                    <p>I am 9 years old.</p>
                </div> */}

                {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p>I am a Male.</p>
                    <p>I am of the Pug breed.</p>
                </div> */}
                <p className={styles.PetDescription}>My name is <span>Tidus</span>! I am <span>9 years old </span> and of the <span>Pug</span> breed. I currently weigh <span>12 pounds. </span>I am a <span>Male</span> and thankfully have <span>not been neutered</span>....yet!</p>
                {/* <p>I am 9 years old.</p>
                <p>I am a Male.</p>
                <p>I am of the Pug breed.</p>

                <p>I weigh 12 pounds. Don't judge me!</p>

                <p>I have not be neutered yet (whew!)</p> */}


                <div>
                    <p>My humans have to give me the following medications occassionaly:</p>
                    <ul>
                        <li>Medication One</li>
                        <li>Medication Two</li>
                        <li>Medication Three</li>
                    </ul>
                </div>


                <div>
                    <p>Here are a list of my allergies:</p>
                    <ul>
                        <li>Allergy One</li>
                        <li>Allergy Two</li>
                        <li>Allergy Three</li>
                    </ul>
                </div>

                <div>
                    <h6>Additional Information:</h6>
                    <p className={styles.AdditionalInformation}>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>

        </main>
    )
}

export default PetProfileComp