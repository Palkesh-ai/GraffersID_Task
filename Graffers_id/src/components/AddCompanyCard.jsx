import React from 'react';

const AddCompanyCard = ({ onClose, onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submit logic here
        onSubmit(); // Call the onSubmit prop to handle submission
    };

    return (
        <div
            id="modal"
            className="absolute inset-0 bg-black/25 flex items-center justify-center z-10 transition delay-150 duration-700 ease-in-out"
            onClick={onClose} // Close the modal when clicking outside
        >
            <div
                className="max-w-sm mx-auto w-2xl bg-white rounded-lg shadow-lg p-6 relative"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                {/* Header Section */}
                <div className="-rotate-45  -top-1.5 -left-6.5">
                    <div className=" flex justify-center -space-x-14 ">
                        <div className=" mix-blend-multiply w-30 h-30 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        <div className=" mix-blend-multiply w-30 h-30 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    </div>
                </div>
                {/* Card Title */}
                <h2 className="text-2xl font-bold mb-6">Add Company</h2>
                {/* Form Section */}
                <form onSubmit={handleSubmit}>
                    {/* Company Name Field */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="company-name"
                        >
                            Company Name
                        </label>
                        <input
                            type="text"
                            id="company-name"
                            placeholder="Enter..."
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        <select
                            id="location"
                            className="block w-full bg-white border border-gray-300 rounded py-2 px-3 shadow-sm focus:outline-none"
                        >
                            <option>Select Location</option>
                        </select>
                    </div>
                    {/* Founded on Field */}
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="founded-on"
                        >
                            Founded On
                        </label>
                        <input
                            type="date"
                            id="founded-on"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                            placeholder="Enter City"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    {/* Save Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg py-2 font-medium hover:shadow-lg"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCompanyCard;