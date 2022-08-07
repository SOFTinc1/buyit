import React from "react";
import "./homepage.styles.scss";
import NavbarBootStrapLifestyle from "../../components/navbar-lifestyle/navbar-lifestyle.component";
import HomepageBanner from "../../components/homepage-banner/homapage-banner.component";
import FeaturedCategories from "../../components/featured-categories/feature-categories.component";
import Recomended from "../../components/recomended/recomended.component";
import VerifiedDeals from "../../components/verified-deals/verified-deals.component";

import Footer from "../../components/footer/footer.component";


const HomepageLifestyle = () => (
  <div className="homepage">
    <NavbarBootStrapLifestyle />
    <HomepageBanner />
    <FeaturedCategories />
    <Recomended />
    <VerifiedDeals />
    <Footer />
  </div>
);

export default HomepageLifestyle;
