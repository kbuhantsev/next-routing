import { useRouter } from "next/router";
import React from "react";

const ProductDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;

  return <h1>Product Detail about {productId}</h1>;
};

export default ProductDetail;
