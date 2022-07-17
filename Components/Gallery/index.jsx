import React from 'react'
import Image from 'next/image'
import styles from './gallery.module.css';

const Gallery = () => {
    return (
        <div className={styles.wrapper}>
            <h2>Gallery</h2>
            <div className={styles.gallery}>
                <Image src="/images/img-1.png" height={250} width={250} />
                <Image src="/images/img-2.png" height={250} width={250} />
                <Image src="/images/img-3.png" height={250} width={250} />
                <Image src="/images/img-3.png" height={250} width={250} />
                <Image src="/images/img-2.png" height={250} width={250} />
                <Image src="/images/img-1.png" height={250} width={250} />
                <Image src="/images/img-1.png" height={250} width={250} />
                <Image src="/images/img-3.png" height={250} width={250} />
                <Image src="/images/img-2.png" height={250} width={250} />
            </div>
        </div>
    )
}

export default Gallery