import React from 'react';
// import { reviewsData } from '../../public/demoData';
import { useParams } from 'react-router-dom';

const AddReviewCard = ({ onClose, onSubmit }) => {

    const { companyId } = useParams();
    const [rating, setRating] = React.useState(0);
    const [formData, setFormData] = React.useState({
        name: '',
        subject: '',
        review: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-GB'); // Format: DD-MM-YYYY
        const formattedTime = currentDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

        const newReview = {
            // setting companyId to total length of existing reviews for simplicity +1

            companyId: existingReviews.length +1, // Assuming companyId 1 for now
            name: formData.name,
            subject: formData.subject,
            review: formData.review,
            rating,
            date: formattedDate,
            time: formattedTime,
        };

        // Get existing reviews from local storage
        const existingReviews = JSON.parse(localStorage.getItem('reviews')) || [];
        
        // Add the new review
        existingReviews.push(newReview);
        
        // Save updated reviews to local storage
        localStorage.setItem('reviews', JSON.stringify(existingReviews));

        // Reset form data
        setFormData({ name: '', subject: '', review: '' });
        setRating(0);

        // Call onSubmit to update parent component
        onSubmit(newReview);
    };

    return (
        <div
            id="modal"
            className="absolute inset-0 bg-black/25 flex items-center justify-center z-10 transition delay-150 duration-700 ease-in-out"
            onClick={onClose}
        >
            <div
                className="max-w-sm mx-auto w-2xl bg-white rounded-lg shadow-lg p-6 relative overflow-hidden flex-col justify-center align-items-center"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Add Review</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter..."
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Enter..."
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="review">
                            Enter your Review
                        </label>
                        <textarea
                            id="review"
                            value={formData.review}
                            onChange={handleInputChange}
                            placeholder="Description"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    onClick={() => setRating(i + 1)}
                                    fill={i < rating ? "#ECB800" : "gray"}
                                    height="25"
                                    viewBox="0 0 24 24"
                                    width="25"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-1 cursor-pointer"
                                >
                                    <path d="M12 .587l3.668 7.571 8.332 1.238-6.002 5.833 1.417 8.287L12 18.896l-7.415 3.895 1.417-8.287-6.002-5.833 8.332-1.238z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg py-2 px-4 font-medium hover:shadow-lg transition duration-300"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReviewCard;