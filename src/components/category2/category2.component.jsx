import React from "react";
import {
  CategoryContainer,
  Row,
  GridRow,
  Title3,
  Title4,
  FlexRow,
  GridA,
  GridB,
  RealFlexRow,
  Move,
  Image3,
  Image4,
  But
} from "./category2.styles";
import Button from "../button/button.component";
import Women from "../../assets/images/model4.jpg";
import Shoes from "../../assets/images/cloth2.jpg";

const Category2 = () => (
  <CategoryContainer>
    <Row>
      <FlexRow>
        <GridA>
          {/* <Empty></Empty> */}
          <Move as={Button}>enter shoes section</Move>
        </GridA>
        <GridB>
          <Image3 src={Shoes} />
          <Title3>all shoes</Title3>
        </GridB>
      </FlexRow>

      <GridRow>
        <RealFlexRow>
          <Title4>women's Wear</Title4>
          <But as={Button}>enter women's section</But>
        </RealFlexRow>
        <Image4 src={Women} />
      </GridRow>
    </Row>
  </CategoryContainer>
);

export default Category2;
