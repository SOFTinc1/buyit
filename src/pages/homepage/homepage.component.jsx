import React from "react";
import "./homepage.styles.scss";
import HomepageBanner from "../../components/homepage-banner/homapage-banner.component";
import OurStory from "../../components/our-story/our-story.component";
import CatalogueOverview from "../../components/catalogue-overview/catalogue-overview.component";
// import Category from "../../components/category/category.component";
// import Category2 from "../../components/category2/category2.component";
import AllExplain from "../../components/all/all.component";
import Directory from "../../components/directory/directory.component";



const Homepage = () => (
  <div className="homepage">
    <HomepageBanner />
    <OurStory />
    <CatalogueOverview />
    <Directory />
    {/* <Category />
    <Category2 /> */}
    <AllExplain />
  </div>
);

export default Homepage;
