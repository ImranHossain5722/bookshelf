import React from 'react';
import AddBanner from '../../components/AddBanner/AddBanner';
import Banner from '../../components/Banner/Banner';
import ContactClubBanner from "../../components/ContactClubBanner/ClubBanner"
import '../../components/CustomScrollbar/CustomScrollBar.css'

import SampleCard from '../../components/SampleCard/SampleCard';
import BestSelling from '../BestSelling/BestSelling';
import Release from '../Release/Release';
import Categorys from "../../components/Category/Categorys";
import Review from '../Review/Review';
const Home = () => {
    return (
        <div>
            <Banner />
            <ContactClubBanner></ContactClubBanner>
            <AddBanner></AddBanner>

            {/* category section ::start  */}
            <Categorys></Categorys>
            <Release />
            <Review />
            <BestSelling />
            <SampleCard />

        </div>
    );
}


export default Home;
