import { useRouter } from "next/router";
import React from "react";

const Review = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  return (
    <h1>
      Product Review {reviewId} about product {productId}
    </h1>
  );
};

export default Review;
