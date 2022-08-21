import React from "react";
import AddBanner from "../../components/AddBanner/AddBanner";
import Banner from "../../components/Banner/Banner";
import ContactClubBanner from "../../components/ContactClubBanner/ClubBanner";
import "../../components/CustomScrollbar/CustomScrollBar.css";
import PopularBooks from "../../components/PopularBooks/PopularBooks";

import BestSelling from "../../components/BestSelling/BestSelling";
import Categorys from "../../components/Category/Categorys";
import FirstCategoryBooks from "../../components/FirstCategoryBooks/FirstCategoryBooks";
import Modal from "../../components/Modal/Modal";
import PopularAuthor from "../../components/PopularAuthor/PopularAuthor";
import PreOrderBooks from "../../components/PreOrderBooks/PreOrderBooks";
import QuickView from "../../components/QuickView/QuickView";
import RecentlyViewed from "../../components/RecentlyViewed/RecentlyViewed";
import Review from "../../components/Review/Review";
import ScrollToTop from "react-scroll-to-top";

import SecondCategoryBooks from "../../components/SecondCategoryBooks/SecondCategoryBooks";
import Release from "../Release/Release";
import UpScrollButton from "../../components/UpScrollButton/UpScrollButton";

const Home = () => {
  return (
    <div>
      <Banner />
{/* component	={<UpScrollButton/>} */}
     
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
      <Modal modal={"quick-view"}>
        <QuickView />
      </Modal>
    </div>
  );
};

export default Home;
