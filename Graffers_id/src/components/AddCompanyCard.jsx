import React, { useState } from 'react';
import { addCompany, getCompanies } from '../localStorageUtils';

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

        const existingCompanies = getCompanies();

        const newCompany = {
            id: existingCompanies.length + 1,
            name: formData.name,
            address: `${formData.city}, ${formData.location}`,
            founded: formData.foundedOn,
            rating: 0,
            reviews: 0,
            logo: formData.name.charAt(0).toUpperCase(),
            reviewsList: []  // Initialize empty reviews list
        };

        addCompany(newCompany);
        onSubmit(newCompany);
        setFormData({ name: '', location: '', foundedOn: '', city: '' });
    };

    return (
        <div
            id="modal"
            className="absolute inset-0 bg-black/25 flex items-center justify-center z-10"
            onClick={onClose}
        >
            
            <div
                className="max-w-sm mx-auto w-2xl bg-white rounded-3xl shadow-lg p-6 relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="-z-10 -rotate-45 overflow-ellipsis -top-1.5 -left-6.5">
                    <div className="absolute flex -my-50 -mx-9 justify-center -space-x-14 ">
                        <div className="mix-blend-multiply w-30 h-30 bg-gradient-to-r from-regal-one to-regal-two rounded-full"></div>
                        <div className="mix-blend-multiply w-30 h-30 bg-gradient-to-r from-regal-one/20 to-regal-two/20 rounded-full"></div>
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-6 text-center">Add Company</h2>
                <form onSubmit={handleSubmit}>
                    {['name', 'location', 'foundedOn', 'city'].map((field, index) => (
                        <div className="mb-4" key={index}>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field}>
                                {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                            </label>
                            <input
                                type={field === 'foundedOn' ? 'date' : 'text'}
                                id={field}
                                value={formData[field]}
                                onChange={handleInputChange}
                                placeholder={`Enter ${field}`}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                    ))}
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