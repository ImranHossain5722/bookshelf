import React from 'react';
import AddBanner from '../../components/AddBanner/AddBanner';
import Banner from '../../components/Banner/Banner';
import ContactClubBanner from "../../components/ContactClubBanner/ClubBanner"
import '../../components/CustomScrollbar/CustomScrollBar.css'

import BestSelling from '../BestSelling/BestSelling';
import Release from '../Release/Release';
import Categorys from "../../components/Category/Categorys";
import Review from '../Review/Review';
import Newsletter from '../../components/NewsLetter/Newsletter';
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
           {/* populer Author section */}

           <Release />
           <Review />
           <BestSelling />
            <Newsletter></Newsletter>
            {/* Recently veiwd section */}
            
            
         

        </div>
    );
}


export default Home;
