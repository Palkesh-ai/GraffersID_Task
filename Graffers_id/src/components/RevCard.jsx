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
        const fetchData = () => {
            let storedReviews = [];
            let storedCompanies = companies;

            try {
                const reviewsFromStorage = localStorage.getItem('reviews');
                storedReviews = reviewsFromStorage ? JSON.parse(reviewsFromStorage) : [];
            } catch (error) {
                console.error('Error parsing reviews from localStorage:', error);
                localStorage.removeItem('reviews');
            }

            try {
                const companiesFromStorage = localStorage.getItem('companies');
                storedCompanies = companiesFromStorage ? JSON.parse(companiesFromStorage) : companies;
            } catch (error) {
                console.error('Error parsing companies from localStorage:', error);
                localStorage.removeItem('companies');
            }

            const foundCompany = storedCompanies.find(c => c.id === parseInt(id)) || null;
            setCompany(foundCompany);

            if (foundCompany) {
                const filteredReviews = storedReviews.filter(review => review.companyId === foundCompany.id);
                setReviews(filteredReviews);
            } else {
                setReviews([]);
            }
        };

        fetchData();
    }, [id]);

    const handleSubmit = (newReview) => {
        const updatedReviews = [...reviews, newReview];
        setReviews(updatedReviews);
        
        // Update localStorage
        const allReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
        allReviews.push(newReview);
        localStorage.setItem('reviews', JSON.stringify(allReviews));

        // Update company review count
        if (company) {
            const updatedCompany = { ...company, reviews: company.reviews + 1 };
            setCompany(updatedCompany);

            // Update localStorage for companies
            const allCompanies = JSON.parse(localStorage.getItem('companies') || '[]');
            const updatedCompanies = allCompanies.map(c => c.id === company.id ? updatedCompany : c);
            localStorage.setItem('companies', JSON.stringify(updatedCompanies));
        }

        setAddRev(false);
    };

    if (!company) return <div>Loading...</div>;

    return (
        <>
            {addRev && (
                <AddReviewCard 
                    onClose={() => setAddRev(false)} 
                    onSubmit={handleSubmit} 
                    companyId={company.id}
                />
            )}

            <div className="max-w-4xl mx-auto bg-white border-0 rounded-lg shadow-lg p-4 my-20">
                <div className="flex items-center justify-between">
                    <div className="flex items-center mb-4">
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-full">
                            <span className="text-2xl font-bold text-blue-500">{company.logo}</span>
                        </div>
                        <div className="ml-4">
                            <h2 className="text-2xl font-semibold">{company.name}</h2>
                            <p className="text-gray-500">📍 {company.address}</p>
                            <div className="flex items-center mt-1">
                                <span className="text-yellow-500">{company.rating.toFixed(1)}</span>
                                <span className="text-gray-500 ml-1">{"★".repeat(Math.floor(company.rating))}{"☆".repeat(5 - Math.floor(company.rating))}</span>
                                <span className="ml-2 text-gray-500">{company.reviews} Reviews</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-500 mb-4">Founded on {company.founded}</p>
                        <button className="bg-gradient-to-l from-regal-two to-regal-one text-white px-4 py-2 rounded" onClick={() => setAddRev(true)}>
                            + Add Review
                        </button>
                    </div>
                </div>
                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Result Found: {reviews.length}</h3>
                    <div className="mt-4 space-y-4">
                        {reviews.filter(Boolean).map((review, index) => (
                            <div key={index} className="border-0 rounded-lg p-4 bg-gray-50">
                                <div className="flex justify-between">
                                    <h4 className="font-semibold">{review.name || 'Anonymous'}</h4>
                                    <div className="text-yellow-500">{"★".repeat(Math.floor(review.rating))}{"☆".repeat(5 - Math.floor(review.rating))}</div>
                                </div>
                                <p className="text-gray-500">{review.date || 'No Date Provided'}</p>
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