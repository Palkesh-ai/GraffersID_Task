import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import AddCompanyCard from '../components/AddCompanyCard';
import { companies } from '../../public/demoData';
const CompanyList = () => {
  const [addCompany, setAddCompany] = useState(false);

  const handleAddCompanyToggle = () => {
    setAddCompany(!addCompany);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    handleAddCompanyToggle(); // Close the modal after submission
  };

  return (
    <div className="bg-gray-100 min-h-screen px-40">
      <Navbar />
      {addCompany && (
        <AddCompanyCard onClose={handleAddCompanyToggle} onSubmit={handleSubmit} />
      )}
      <div className="container mx-auto p-4 mt-16">
        {/* // Header Section */}
        <div className="flex items-end w-full justify-between">
          <h2 className="text-sm font-light mb-4">Select City: </h2>
          <h2 className="text-sm font-light mb-4">Sort:</h2>
        </div>
        {/* // Search and Filter Section */}
        <div className="mb-8 flex flex-row align-middle justify-between">
          <div className="flex space-x-4 mb-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Select City"
                className="w-full border border-gray-300 p-2 rounded-md pl-10"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <button className="bg-gradient-to-l from-regal-two to-regal-one text-white px-4 py-2 rounded-md">Find Company</button>
            <button className="bg-gradient-to-l from-regal-two to-regal-one text-white  px-4 py-2 rounded-md" onClick={() => setAddCompany(true)}>+ Add Company</button>
          </div>
          <div className="flex justify-end">
            <select className="border border-gray-300 p-2 rounded-md">
              <option>Name</option>
              <option>Rating</option>
              <option>Reviews</option>
            </select>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-light mb-4">Result Found: {companies.length}</h2>
          <div className="space-y-4">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center border rounded-lg p-4 shadow-md">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4 ${index % 2 === 0 ? 'bg-blue-600' : 'bg-green-600'}`}>
                  {company.logo}
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg">{company.name}</h3>
                  <p className="text-gray-500 text-sm">{company.address}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500 mr-1">{company.rating}</span>
                    {"★".repeat(Math.floor(company.rating))}
                    {"☆".repeat(5 - Math.floor(company.rating))}
                    <span className="text-gray-600 ml-2">{company.reviews} Reviews</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-sm">Founded on {company.founded}</p>
                  <button className="mt-2 bg-gray-800 text-white px-4 py-2 rounded-md text-sm">Detail Review</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyList;