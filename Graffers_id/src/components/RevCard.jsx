import React, { useEffect, useState } from 'react';
import { companies, reviewsData } from '../../public/demoData';
import { useParams, useNavigate } from 'react-router-dom';
import AddReviewCard from './AddReviewCard';

const RevCard = () => {
    const [company, setCompany] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [addRev, setAddRev] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const foundCompany = companies.find(c => c.id === parseInt(id));
        if (foundCompany) {
            setCompany(foundCompany);
            setReviews(reviewsData.filter(review => review.companyId === parseInt(id)));
        } else {
            navigate('/'); // Redirect to home if company not found
        }
    }, [id, navigate]);

    const handleSubmit = (newReview) => {
        setReviews((prevReviews) => [...prevReviews, newReview]); // Add the new review to the reviews state
        setAddRev(false); // Close the modal after submission
    };

    if (!company) return <div>Loading...</div>;

    return (<>
        {addRev && (
            <AddReviewCard 
                onClose={() => setAddRev(false)} 
                onSubmit={handleSubmit} 
                companyId={company.id} // Pass company ID to AddReviewCard
            />
        )}

        <div className="max-w-4xl mx-auto bg-white border-0 rounded-lg shadow-lg p-4 my-20">
            <div className="flex items-center justify-between ">
                <div className="flex items-center mb-4">
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-full">
                        <span className="text-2xl font-bold text-blue-500">{company.logo}</span>
                    </div>
                    <div className="ml-4">
                        <h2 className="text-2xl font-semibold">{company.name}</h2>
                        <p className="text-gray-500">📍 {company.address}</p>
                        <div className="flex items-center mt-1">
                            <span className="text-yellow-500">{company.rating}</span>
                            <span className="text-gray-500 ml-1">{"★".repeat(Math.floor(company.rating))}{"☆".repeat(5 - Math.floor(company.rating))}</span>
                            <span className="ml-2 text-gray-500">{company.reviews} Reviews</span>
                        </div>
                    </div>
                </div>
                <div>

                    <p className="text-gray-500 mb-4"> Founded on {company.founded}</p>
                    <button className="bg-gradient-to-l from-regal-two to-regal-one text-white px-4 py-2 rounded" onClick={() => setAddRev(true)}>
                        + Add Review
                    </button>
                </div>
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-semibold">Result Found: {reviews.length}</h3>
                <div className="mt-4 space-y-4">
                    {reviews.map((review, index) => (
                        <div key={index} className="border-0 rounded-lg p-4">
                            <div className="flex justify-between ">
                                <h4 className="font-semibold">{review.name}</h4>
                                <div className="text-yellow-500 ">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</div>
                            </div>
                            <p className="text-gray-500">{review.date}</p>
                            <p className="mt-1">{review.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default RevCard;