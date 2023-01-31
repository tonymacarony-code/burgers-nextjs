import Head from 'next/head'
import React, { useState, useEffect } from 'react'


const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments')
            const data = await response.json()
            setReviews(data)
        }
        getData()
    }, [])

    console.log(reviews);
    return (
        <>
            <Head>
                <title>CRINGE EFFECT</title>
                <meta name="title" content="Generated by create next app" />
            </Head>
            <div>
                <h1>Отзывы</h1>
                <div className='reviews'>
                    {!!reviews.length && reviews.slice(0, 20).map((review) => {
                        return (
                            <div key={review.id} className='review'>
                                {review.id}
                                {` ${review.body.slice(0, 90)}... `}
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </>
    )
}

export default Reviews
