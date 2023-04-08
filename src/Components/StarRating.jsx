import React from 'react';
import './StarRating.css';

const StarRating = ({ rating }) => {
  const getStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="bx bxs-star"></i>);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<i key={i} className="bx bxs-star-half"></i>);
      } else {
        stars.push(<i key={i} className="bx bx-star"></i>);
      }
    }
    return stars;
  };

  return <div className="star-rating">{getStars()}</div>;
};

export default StarRating;