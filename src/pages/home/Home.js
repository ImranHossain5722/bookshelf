import React from 'react';
import Banner from '../../components/Banner/Banner';
import ContactClubBanner from "../../components/ContactClubBanner/ClubBanner"
import SampleCard from '../../components/SampleCard/SampleCard';
import BestSelling from '../BestSelling/BestSelling';
import Release from '../Release/Release';
import Categorys from "../../components/Category/Categorys";
import Review from '../Review/Review';
const Home = () => {
    return (
        <div>
            <Banner/>
            <ContactClubBanner></ContactClubBanner>
              {/* category section ::start  */}
      <Categorys></Categorys>
            <Release/> 
            <Review/>
            <BestSelling/>
        </div>
    );
}


export default Home;
