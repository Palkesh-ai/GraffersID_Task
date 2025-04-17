// This file is used to initialize the application with demo data.
import React, { useEffect } from 'react';

const AppInitializer = () => {
  useEffect(() => {
    const companyData = [
      {
        id: 1,
        name: 'Graffersid Web and App Development',
        address: '© 916, Shekhar Central, Manorama Ganj, AB road, New Palasia, Indore (M.P.)',
        founded: '01-01-2018',
        rating: 4.5,
        reviews: 41,
        logo: 'G',
        reviewsList: [
          {
            id: 1,
            name: "Jorgue Watson",
            address: "Indore (M.P.)",
            date: "01-01-2022",
            time: "14:33",
            review: "Graffersid is one of the best companies. Their service is exceptional!",
            rating: 4.5,
            avatar: "G"
          },
          {
            id: 2,
            name: "Jenny Kole",
            date: "12-01-2022",
            time: "15:00",
            review: "I had a great experience with Graffersid. Highly recommend!",
            rating: 4.0,
            avatar: "J"
          },
          {
            id: 3,
            name: "Ayush Patel",
            date: "12-01-2022",
            time: "15:00",
            review: "Graffersid is the best in app development. Very satisfied!",
            rating: 5.0,
            avatar: "A"
          }
        ]
      },
      {
        id: 2,
        name: 'Code Tech Company',
        address: '© 414, Kanha Appartment, Bhawarkua, Indore (M.P.)',
        founded: '01-01-2016',
        rating: 4.5,
        reviews: 38,
        logo: 'CT',
        reviewsList: [
          {
            id: 4,
            name: "Maya Singh",
            date: "15-01-2022",
            time: "10:15",
            review: "Professional team and timely delivery. Will work with them again!",
            rating: 4.8,
            avatar: "M"
          },
          {
            id: 5,
            name: "Ravi Kumar",
            date: "20-01-2022",
            time: "09:45",
            review: "Excellent service and support. Highly recommend Code Tech!",
            rating: 4.7,
            avatar: "R"
          }
        ]
      },
      {
        id: 3,
        name: 'Innogen Pvt. Ltd.',
        address: '© 910, Shekhar Central, Manorama Ganj, Indore (M.P.)',
        founded: '01-01-2016',
        rating: 4.5,
        reviews: 25,
        logo: '💡',
        reviewsList: [
          {
            id: 6,
            name: "Sita Sharma",
            date: "22-01-2022",
            time: "11:30",
            review: "Innogen provided great solutions for our project!",
            rating: 4.6,
            avatar: "S"
          }
        ]
      },
      {
        id: 4,
        name: 'Pixel Web and App Development',
        address: '© 410, Bansi Trade Center, Indore (M.P.)',
        founded: '01-01-2016',
        rating: 4.5,
        reviews: 51,
        logo: 'P',
        reviewsList: [
          {
            id: 7,
            name: "Anil Joshi",
            date: "25-01-2022",
            time: "12:00",
            review: "Pixel Web delivered on time and exceeded expectations!",
            rating: 4.9,
            avatar: "A"
          }
        ]
      }
    ]; if (!localStorage.getItem('companyData')) {
      localStorage.setItem('companyData', JSON.stringify(companyData));
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return null; // This component does not render anything
};

export default AppInitializer;