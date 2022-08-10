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
      <Release />
      <Review />
      <BestSelling />
   
      <ContactClubBanner />
      {/* Recently veiwed section */}
      <RecentlyViewed />
    </div>
  );
};

export default Home;
