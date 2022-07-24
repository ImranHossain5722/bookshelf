import React from 'react';
import Banner from '../../components/Banner/Banner';
import ContactClubBanner from "../../components/ContactClubBanner/ClubBanner"
import PopularBooks from '../../components/PopularBooks/PopularBooks';
import AddBanner from "../../components/AddBanner/AddBanner";
import "../../components/CustomScrollbar/CustomScrollBar.css";

import Categorys from "../../components/Category/Categorys";
import Newsletter from "../../components/NewsLetter/Newsletter";
import ProductSwitch from "../../components/ProductSwitch/ProductSwitch";
import BestSelling from "../BestSelling/BestSelling";
import Release from "../Release/Release";
import Review from "../Review/Review";
const Home = () => {
  return (
    <div>
      <Banner />
      <ContactClubBanner></ContactClubBanner>
      <Categorys></Categorys>
      {/* select catgory */}
      {/* popler book section */}
      <AddBanner></AddBanner>

      {/* Pre Order section */}

      {/* <Routes>
        <Route path="/" element={<ProductSwitch />}>
          <Route path="popular-books" element={<PopularBooks />} />
          <Route path="popular-authors-books" element={<PopularBooks />} />
          <Route path="best-offers" element={<PopularBooks />} />
        </Route>
      </Routes> */}

      <ProductSwitch />
      <PopularBooks />
      <Release />
      <Review />
      <BestSelling />
      <Newsletter></Newsletter>
      {/* Recently veiwd section */}
    </div>
  );
};

export default Home;
