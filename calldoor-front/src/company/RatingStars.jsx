import React from 'react';
import Rating from 'react-rating';

function RatingStars({ stars }) {
  return (
    <Rating
      placeholderRating={stars}
      placeholderSymbol={<img src="/assets/images/star-full-red.png" className="icon" alt="red-star" />}
      emptySymbol={<img src="/assets/images/star-grey.png" className="icon" alt="grey-star" />}
      fullSymbol={<img src="/assets/images/star-full-blue.png" className="icon" alt="blue-star" />}
      readonly
    />
  );
}

export default RatingStars;
