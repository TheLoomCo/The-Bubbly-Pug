import React from 'react'

const Review = ({ content }) => {
    return (
        <div className='review-styling__wrapper'>

            <q className='review'>{content}</q>

        </div>
    )
}

export default Review