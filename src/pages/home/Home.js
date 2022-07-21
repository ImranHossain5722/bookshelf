import React from "react";
import Categorys from "../../components/Category/Categorys";
import ContactClubBanner from "../../components/ContactClubBanner/ClubBanner";
const Home = () => {
  return (
    <div>
      <ContactClubBanner></ContactClubBanner>
      {/* category section ::start  */}
      <Categorys></Categorys>
    </div>
  );
};

export default Home;
