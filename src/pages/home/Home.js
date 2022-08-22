import React ,{ useState, useEffect} from "react";
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


import SecondCategoryBooks from "../../components/SecondCategoryBooks/SecondCategoryBooks";
import Release from "../Release/Release";
import UpScrollButton from "../../components/UpScrollButton/UpScrollButton";
import useWindowDimensions from "../../components/windowSize/windowSize";

const Home = () => {
//   const [scrollToTop, setscrollToTop] = useState(false);
//   useEffect(() => {
//     console.log("window scroll",window.scrollY)
//     window.addEventListener("scroll", () =>{
//       if(window.scrollY > 100){
// setscrollToTop(true)
//       }else{
// setscrollToTop(false)
        
//       }
//     })
//   },[window.scrollY])
  const scrollTop = () =>{
    window.scrollTo({
      top : 0,
      behavior : "smooth"
    })
  }
// const {height, width} = useWindowDimensions()
// useEffect(() => {
//   console.log(height)
  
// }, [height])
// if (window.scrollY) {
//   // window.scroll(0, 0);  // reset the scroll position to the top left of the document.
//   console.log(window.scrollY)
// }

  return (
    <div>
      <Banner />
      <div>

<button style={{
  position : "absolute",
  right : "50px",
  bottom : "50px",
  height : "50px",
  width : "50px",
  fontSize : "50px",
  zIndex : 100
}}
onclick={scrollTop}
> ^</button>
      </div>
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
