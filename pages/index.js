import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");
    router.push("/product");
  };

  return (
    <div>
      <h1>Home page</h1>
      <Link href={"/blog"}>Blog href</Link>
      <Link href={"/product"}>Products href</Link>
      <button onClick={handleClick}>Place order</button>
    </div>
  );
};

export default Home;
