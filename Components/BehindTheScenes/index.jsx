import Image from 'next/image';
import { motion } from 'framer-motion';

const BehindTheScenes = () => {

    return (
        <motion.section
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 1 }}
            className="behind-the-scenes__wrapper"
            id="behindTheScenes">
            <div className='behind-the-scenes__headers'>
                <Image src="/images/bubbly-pug-icon.png"
                    height={75}
                    width={75}
                    className="header__icon"
                />
                <h2 className=''>Behind the Scenes</h2>
            </div>




            <div
                className='behind-the-scenes__descriptions'>

                <div className='behind-the-scenes__container'>
                    <Image src="/images/img-1.png" alt="The Bubbly Pug" height={300} width={300} />
                    <p>
                        Doggo ipsum wrinkler big ol pupper lotsa pats ruff porgo, pats shooberino shoob, wow very biscit fat boi lotsa pats. I am bekom fat wow such tempt floofs ur givin me a spook pupper, borkdrive heckin angery woofer big ol pupper.
                    </p>
                </div>

                <div className='behind-the-scenes__container'>
                    <p>
                        Doggo ipsum wrinkler big ol pupper lotsa pats ruff porgo, pats shooberino shoob, wow very biscit fat boi lotsa pats. I am bekom fat wow such tempt floofs ur givin me a spook pupper, borkdrive heckin angery woofer big ol pupper.
                    </p>
                    <Image src="/images/img-2.png" alt="The Bubbly Pug" height={300} width={300} />

                </div>
            </div>


        </motion.section>
    )
}

export default BehindTheScenes