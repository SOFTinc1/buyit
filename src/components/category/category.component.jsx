import React from "react";
import {
  CategoryContainer,
  Row,
  GridRow,
  Image1,
  Title,
  Title2,
  FlexRow,
  GridA,
  Empty,
  GridB,
  Image2,
  RealFlexRow
} from "./category.styles";
import Button from "../button/button.component";
import Men from "../../assets/images/men.jpg";
import Cloth from "../../assets/images/cloth1.jpg";

const Category = () => (
  <CategoryContainer>
    <Row>
      <GridRow>
        <Image1 src={Men} />
        <RealFlexRow>
          <Title>Men's Wear</Title>
          <Button>view all</Button>
        </RealFlexRow>
      </GridRow>

      <FlexRow>
        <GridA>
          <Empty></Empty>
          <Button>view all</Button>
        </GridA>
        <GridB>
          <Title2>all clothes</Title2>
          <Image2 src={Cloth} />
        </GridB>
      </FlexRow>
    </Row>
  </CategoryContainer>
);

export default Category;
