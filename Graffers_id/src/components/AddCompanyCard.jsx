import React, { useState } from 'react';

const AddCompanyCard = ({ onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        foundedOn: '',
        city: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Get existing companies from local storage
        let existingCompanies = [];
        try {
            const storedData = localStorage.getItem('company');
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                if (Array.isArray(parsedData)) {
                    existingCompanies = parsedData;
                } else {
                    console.warn('Stored data is not an array, initializing with empty array');
                }
            }
        } catch (error) {
            console.error('Error parsing localStorage data:', error);
            // If there's an error, we'll start with an empty array
        }

        // Create a new company object
        const newCompany = {
            id: existingCompanies.length + 1,
            name: formData.name,
            address: `${formData.city}, ${formData.location}`,
            founded: formData.foundedOn,
            rating: 0,
            reviews: 0,
            logo: formData.name.charAt(0).toUpperCase() // Use first letter of company name as logo
        };

        // Add new company to the array
        const updatedCompanies = [...existingCompanies, newCompany];

        // Save updated array back to local storage
        try {
            localStorage.setItem('company', JSON.stringify(updatedCompanies));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }

        // Call the onSubmit prop to handle submission in parent component
        onSubmit(newCompany);

        // Reset form
        setFormData({
            name: '',
            location: '',
            foundedOn: '',
            city: ''
        });
    };

    return (
        <div
            id="modal"
            className="absolute inset-0 bg-black/25 flex items-center justify-center z-10 transition delay-150 duration-700 ease-in-out"
            onClick={onClose} // Close the modal when clicking outside
        >
            <div
                className="max-w-sm mx-auto w-2xl bg-white rounded-lg shadow-lg p-6 relative overflow-hidden flex-col justify-center align-items-center"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                {/* Header Section */}
                <div className="-z-10 -rotate-45 overflow-ellipsis -top-1.5 -left-6.5">
                    <div className="absolute flex -my-50 -mx-9 justify-center -space-x-14 ">
                        <div className="mix-blend-multiply w-30 h-30 bg-gradient-to-r from-regal-one to-regal-two rounded-full"></div>
                        <div className="mix-blend-multiply w-30 h-30 bg-gradient-to-r from-regal-one/20 to-regal-two/20 rounded-full"></div>
                    </div>
                </div>
                {/* Card Title */}
                <h2 className="text-2xl font-bold mb-6 text-center">Add Company</h2>
                {/* Form Section */}
                <form onSubmit={handleSubmit}>
                    {/* Company Name Field */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Company Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter..."
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    {/* Location Field */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="location"
                        >
                            Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            placeholder="Enter location"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    {/* Founded on Field */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="foundedOn"
                        >
                            Founded On
                        </label>
                        <input
                            type="date"
                            id="foundedOn"
                            value={formData.foundedOn}
                            onChange={handleInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    {/* City Field */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="city"
                        >
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Enter City"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    {/* Save Button */}
                    <div className="flex justify-center mt-6">                    
                        <button
                            type="submit"
                            className="w-16 self-center bg-gradient-to-r from-regal-one to-regal-two text-white rounded-lg py-2 font-medium hover:shadow-lg"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCompanyCard;