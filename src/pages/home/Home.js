import React, { useState, useEffect,Suspense  } from "react";
import AddBanner from "../../components/AddBanner/AddBanner";
import Banner from "../../components/Banner/Banner";
import ContactClubBanner from "../../components/ContactClubBanner/ClubBanner";
import "../../components/CustomScrollbar/CustomScrollBar.css";
import BestSelling from "../../components/BestSelling/BestSelling";
import Categorys from "../../components/Category/Categorys";
import Modal from "../../components/Modal/Modal";
import PopularAuthor from "../../components/PopularAuthor/PopularAuthor";
import PreOrderBooks from "../../components/PreOrderBooks/PreOrderBooks";
import QuickView from "../../components/QuickView/QuickView";
import RecentlyViewed from "../../components/RecentlyViewed/RecentlyViewed";
import Review from "../../components/Review/Review";
import Release from "../Release/Release";
import WorkPolicy from "../../components/WorkPolicy/WorkPolicy";
import Blog from "../Blog/Blog";

const FirstCategoryBooks= React.lazy(() => import("../../components/FirstCategoryBooks/FirstCategoryBooks"));
const SecondCategoryBooks= React.lazy(() => import("../../components/SecondCategoryBooks/SecondCategoryBooks"));
const PopularBooks= React.lazy(() => import("../../components/PopularBooks/PopularBooks"));
const Home = () => {
  return (
    <div>
      <Banner />

      {/* select catgory */}
      <Categorys />
      <Suspense fallback={<div>Loading...</div>}>
      <FirstCategoryBooks />
      <SecondCategoryBooks />

      {/* popler book section */}
     <PopularBooks />
     </Suspense>
      <AddBanner />

      {/* Pre Order section */}
      <PreOrderBooks />
      <PopularAuthor />
      <Release />
      <Review />
      <BestSelling />

      <ContactClubBanner />
      <WorkPolicy />
      {/* Recently veiwed section */}
      <RecentlyViewed />
      <Blog />
      <Modal modal={"quick-view"}>
        <QuickView />
      </Modal>
    </div>
  );
};

export default Home;
