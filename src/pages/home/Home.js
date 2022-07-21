import React from "react";
import Categorys from "../../components/Category/Categorys";
import ContactClubBanner from "../../components/ContactClubBanner/ClubBanner";
import Banner from "../../components/Banner/Banner";
const Home = () => {
  return (
    <div>
      <Banner />
      <ContactClubBanner></ContactClubBanner>
      {/* category section ::start  */}
      <Categorys></Categorys>
    </div>
  );
};

export default Home;
