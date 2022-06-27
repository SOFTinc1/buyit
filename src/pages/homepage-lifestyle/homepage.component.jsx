import React from "react";
import "./homepage.styles.scss";
import HeaderLifestyle from "../../components/header-lifestyle/header.component";
import HomepageBanner from "../../components/homepage-banner/homapage-banner.component";
import OurStory from "../../components/our-story/our-story.component";
import CatalogueOverview from "../../components/catalogue-overview/catalogue-overview.component";
import AllExplain from "../../components/all/all.component";
import Directory from "../../components/directory/directory.component";
import Footer from "../../components/footer/footer.component";


const HomepageLifestyle = () => (
  <div className="homepage">
    <HeaderLifestyle />
    <HomepageBanner />
    <OurStory />
    <CatalogueOverview />
    <Directory />
    <AllExplain />
    <Footer />
  </div>
);

export default HomepageLifestyle;
