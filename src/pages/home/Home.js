import React from "react";
import Banner from "../../components/Banner/Banner";
import ContactClubBanner from "../../components/ContactClubBanner/ClubBanner";
import PopularBooks from "../../components/PopularBooks/PopularBooks";
import AddBanner from "../../components/AddBanner/AddBanner";
import "../../components/CustomScrollbar/CustomScrollBar.css";

import Categorys from "../../components/Category/Categorys";
import Newsletter from "../../components/NewsLetter/Newsletter";
import Release from "../Release/Release";
import Review from "../../components/Review/Review";
import FirstCategoryBooks from "../../components/FirstCategoryBooks/FirstCategoryBooks";
import SecondCategoryBooks from "../../components/SecondCategoryBooks/SecondCategoryBooks";
import PreOrderBooks from "../../components/PreOrderBooks/PreOrderBooks";
import BestSelling from "../../components/BestSelling/BestSelling";
import RecentlyViewed from "../../components/RecentlyViewed/RecentlyViewed";
import PopularAuthor from "../../components/PopularAuthor/PopularAuthor";
const Home = () => {
  return (
    <div>
      <Banner />
      <ContactClubBanner />

      {/* select catgory */}
      <Categorys />
      <FirstCategoryBooks />
      <SecondCategoryBooks />

      {/* popler book section */}
      <PopularBooks />
      <AddBanner />

      {/* Pre Order section */}
      <PreOrderBooks />
      <PopularAuthor />

      {/* <Routes>
        <Route path="/" element={<ProductSwitch />}>
          <Route path="popular-books" element={<PopularBooks />} />
          <Route path="popular-authors-books" element={<PopularBooks />} />
          <Route path="best-offers" element={<PopularBooks />} />
        </Route>
      </Routes> */}


      <Release />
      <Review />
      <BestSelling />
      <Newsletter />
      {/* Recently veiwed section */}
      <RecentlyViewed />
    </div>
  );
};

export default Home;
