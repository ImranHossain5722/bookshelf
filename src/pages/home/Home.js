import React from 'react';
import ContactClubBanner from "../../components/ContactClubBanner/ClubBanner"
import SampleCard from '../../components/SampleCard/SampleCard';
import BestSelling from '../BestSelling/BestSelling';
import Release from '../Release/Release';
import Review from '../Review/Review';
const Home = () => {
    return (
        <div>
            <ContactClubBanner></ContactClubBanner>
            <SampleCard />
            <Release/> 
            <BestSelling/>
            <Review/>
        </div>
    );
};

export default Home;