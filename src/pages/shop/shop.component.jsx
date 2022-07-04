import React from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { ShopContainer } from "./shop.styles";
// import HeaderLifestyle from "../../components/header-lifestyle/header.component";
import NavbarBootStrapLifestyle from "../../components/navbar-lifestyle/navbar-lifestyle.component";
import Footer from "../../components/footer/footer.component";

import { updateCollections } from "../../redux/shop/shop.actions";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    return (
      <ShopContainer>
        <NavbarBootStrapLifestyle />
        <Routes>
          <Route exact path="/" element={<CollectionsOverview />} />
          <Route path="/:collectionId" element={<CollectionPage />} />
        </Routes>
        <Footer />
      </ShopContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);