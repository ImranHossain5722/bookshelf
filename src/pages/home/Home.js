import React from "react";
import AddBanner from "../../components/AddBanner/AddBanner";
import Banner from "../../components/Banner/Banner";
import ContactClubBanner from "../../components/ContactClubBanner/ClubBanner";
import "../../components/CustomScrollbar/CustomScrollBar.css";
import PopularBooks from "../../components/PopularBooks/PopularBooks";

import BestSelling from "../../components/BestSelling/BestSelling";
import Categorys from "../../components/Category/Categorys";
import FirstCategoryBooks from "../../components/FirstCategoryBooks/FirstCategoryBooks";
import Newsletter from "../../components/NewsLetter/Newsletter";
import PopularAuthor from "../../components/PopularAuthor/PopularAuthor";
import PreOrderBooks from "../../components/PreOrderBooks/PreOrderBooks";
import ProductSwitch from "../../components/ProductSwitch/ProductSwitch";
import RecentlyViewed from "../../components/RecentlyViewed/RecentlyViewed";
import Review from "../../components/Review/Review";
import SecondCategoryBooks from "../../components/SecondCategoryBooks/SecondCategoryBooks";
import Release from "../Release/Release";
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
      <PopularAuthor />

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
      {/* Recently veiwed section */}
      <RecentlyViewed />

      <label for="quick-view" class="btn modal-button">
        open quick view modal
      </label>
      {/* <Modal modal={"quick-view"}>
        <QuickView />
      </Modal> */}
    </div>
  );
};

export default Home;
