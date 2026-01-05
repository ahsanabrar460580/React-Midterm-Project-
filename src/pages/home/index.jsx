import React from "react";
import Navbar from "../../components/navbar/index"
import Categories from "../../components/categories/index"
import Products from "../../components/product/index"
import Footer from "../../components/footer/index"

function Home() {
  return (
    <>
      <Navbar  />
      <br/>
      <Categories />
      <Products />
      <Footer />
    </>
  );
}

export default Home