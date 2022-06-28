import React from "react";
import { Homepage } from "./homepage-music.styles";
import BannerMusic from "../../components/banner-music/banner-music.component";
import SongsOverview from "../../components/songs-overview/songs-overview.component";
// import HeaderMusic from "../../components/header-music/header-music.component";
// import HeaderWithHarmburger from "../../components/Header with Harmburger/HeaderWithHarmburger.component.jsx";
import NavbarBootStrap from "../../components/navbar/navbar.component";
import Footer from "../../components/footer/footer.component";

const HomepageMusic = () => (
  <Homepage>
    {/* <HeaderMusic /> */}
    <NavbarBootStrap />
    <BannerMusic />
    <SongsOverview />
    <Footer />
  </Homepage>
);

export default HomepageMusic;