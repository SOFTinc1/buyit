import React from "react";

import { Routes, Route } from "react-router-dom";

// import Header from "./components/header/header.component";
// import NavbarBootStrap from "./components/navbar/navbar.component";
// import Footer from "./components/footer/footer.component";
import HomepageMusic from "./pages/homepage-music/homepage-music.component";
import HomepageLifestyle from "./pages/homepage-lifestyle/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import CollectionsOverview from "./components/collections-overview/collections-overview.component";
import CollectionPage from "./pages/collection/collection.component";
import StartUp from "./pages/start-up/start-up.component";

import { GlobalStyle } from "./components/global.styles";

const App = () => (
  <div>
    <GlobalStyle />
    {/* <NavbarBootStrap /> */}
    {/* <Header /> */}
    <Routes>
      <Route exact path="/" element={<StartUp />} />
      <Route exact path="/lifestyle" element={<HomepageLifestyle />} />
      <Route exact path="/music" element={<HomepageMusic />} />
      <Route path="/shop/" element={<ShopPage />}>
        <Route index element={<CollectionsOverview />} />
        <Route path=":collectionId" element={<CollectionPage />} />
      </Route>
      <Route exact path="/checkout" element={<CheckoutPage />} />
    </Routes>
    {/* <Footer /> */}
  </div>
);

export default App;
