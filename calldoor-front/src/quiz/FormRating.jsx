import React from 'react';
import Rating from 'react-rating';

function FormRating({ onClickStar }) {
  return (
    <Rating
      onClick={onClickStar}
      placeholderSymbol={<img src="/assets/images/star-full-red.png" className="icon" alt="red-star" />}
      emptySymbol={<img src="/assets/images/star-yellow.png" className="icon" alt="grey-star" />}
      fullSymbol={<img src="/assets/images/star-full-yellow.png" className="icon" alt="blue-star" />}
    />
  );
}

export default FormRating;
