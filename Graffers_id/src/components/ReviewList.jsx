import { reviewsData } from '../../public/demoData';

const ReviewList = () => {
  return (
    <div className="space-y-4">
      {reviewsData.map((review, index) => (
        <RevCard
          key={index}
          name={review.company}
          date={new Date().toLocaleDateString()} // Placeholder for date
          time={new Date().toLocaleTimeString()} // Placeholder for time
          review={review.review}
          rating={review.rating}
          avatar={`https://via.placeholder.com/150?text=${review.company.charAt(0)}`}
        />
      ))}
    </div>
  );
};

export default ReviewList;