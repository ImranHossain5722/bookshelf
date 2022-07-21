import React from 'react';
import AddBanner from '../../components/AddBanner/AddBanner';
import Banner from '../../components/Banner/Banner';
import ContactClubBanner from "../../components/ContactClubBanner/ClubBanner"
import '../../components/CustomScrollbar/CustomScrollBar.css'

const Home = () => {
    return (
        <>
            <Banner />
            <ContactClubBanner></ContactClubBanner>
            <AddBanner></AddBanner>
        </>

    );
}


export default Home;