import React, { useState, useEffect } from 'react';

const ReviewCard = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Retrieve reviews from local storage
        const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
        setReviews(storedReviews);
    }, []);

    return (
        <div>
            {reviews.map((review, index) => (
                <div key={index} className="review-card">
                    <h3>{review.name}</h3>
                    <p>Subject: {review.subject}</p>
                    <p>Review: {review.review}</p>
                    <p>Rating: {review.rating}</p>
                    <p>Date: {review.date}</p>
                    <p>Time: {review.time}</p>
                </div>
            ))}
        </div>
    );
};

export default ReviewCard;