import React from 'react'
import Image from 'next/image'

const Gallery = () => {
    return (
        <div className='gallery-styling__wrapper'>
            <h2 className='gallery__heading'>Gallery</h2>
            <div className='gallery'>
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