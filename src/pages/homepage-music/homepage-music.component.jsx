import React from "react";
import { Homepage } from "./homepage-music.styles";
import BannerMusic from "../../components/banner-music/banner-music.component";
import SongsOverview from "../../components/songs-overview/songs-overview.component";
import HeaderMusic from "../../components/header-music/header-music.component";
import Footer from "../../components/footer/footer.component";

const HomepageMusic = () => (
  <Homepage>
    <HeaderMusic />
    <BannerMusic />
    <SongsOverview />
    <Footer />
  </Homepage>
);

export default HomepageMusic;