// Utility functions for managing company data and reviews in localStorage

// Retrieve all companies from localStorage
export const getCompanies = () => {
  const data = localStorage.getItem('companyData');
  return data ? JSON.parse(data) : [];
};

// Add a new company to localStorage
export const addCompany = (newCompany) => {
  const companies = getCompanies();
  companies.push(newCompany);
  localStorage.setItem('companyData', JSON.stringify(companies));
};

// Add a review to a specific company
export const addReview = (companyId, newReview) => {
  const companies = getCompanies();
  const companyIndex = companies.findIndex(company => company.id === companyId);
  if (companyIndex !== -1) {
    companies[companyIndex].reviewsList.push(newReview);
    companies[companyIndex].reviews += 1;
    companies[companyIndex].rating = calculateNewRating(companies[companyIndex].reviewsList);
    localStorage.setItem('companyData', JSON.stringify(companies));
  }
};

// Retrieve reviews for a specific company
export const getReviews = (companyId) => {
  const companies = getCompanies();
  const company = companies.find(company => company.id === companyId);
  return company ? company.reviewsList : [];
};

// Helper function to calculate the new average rating
const calculateNewRating = (reviewsList) => {
  const totalRating = reviewsList.reduce((sum, review) => sum + review.rating, 0);
  return (totalRating / reviewsList.length).toFixed(1);
};