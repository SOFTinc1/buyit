import React from "react";
import {
  CatalogueOverviewContainer,
  Title,
  ImageSrc,
} from "./catalogue-overview.styles";
import Button from "../button/button.component";
import Image1 from "../../assets/images/banner2.jpg";

const CatalogueOverview = () => (
  <CatalogueOverviewContainer>
    <Title>elegant dresses for every ocassion</Title>
    <Button>view catalog</Button>
    <ImageSrc src={Image1} />
  </CatalogueOverviewContainer>
);

export default CatalogueOverview;
