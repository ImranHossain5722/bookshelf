import React from 'react';
import Banner from '../../components/Banner/Banner';
import ContactClubBanner from "../../components/ContactClubBanner/ClubBanner"
import PopularBooks from '../../components/PopularBooks/PopularBooks';
import AddBanner from "../../components/AddBanner/AddBanner";
import "../../components/CustomScrollbar/CustomScrollBar.css";

import Categorys from "../../components/Category/Categorys";
import Newsletter from "../../components/NewsLetter/Newsletter";
import ProductSwitch from "../../components/ProductSwitch/ProductSwitch";
import Release from "../Release/Release";
import Review from "../Review/Review";
import FirstCategoryBooks from '../../components/FirstCategoryBooks/FirstCategoryBooks';
import SecondCategoryBooks from '../../components/SecondCategoryBooks/SecondCategoryBooks';
import PreOrderBooks from '../../components/PreOrderBooks/PreOrderBooks';
import BestSelling from '../../components/BestSelling/BestSelling';
const Home = () => {
  return (
    <div>
      <Banner />
      <ContactClubBanner></ContactClubBanner>

      {/* select catgory */}
      <Categorys></Categorys>
      <FirstCategoryBooks />
      <SecondCategoryBooks />

      {/* popler book section */}
      <AddBanner></AddBanner>

      {/* Pre Order section */}
      <PreOrderBooks />

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
