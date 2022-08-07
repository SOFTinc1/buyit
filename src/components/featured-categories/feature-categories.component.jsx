import {
  Head,
  FeaturedComponentContainer,
  Row,
  Col1,
  Img,
  ButtonCon,
  ItemName,
  Col2,
  Col3,
  Col4,
} from "./feature-categories.styles";
import watches from "../../assets/images/Watches/watch1.jpg";
import shoes from "../../assets/images/Shoes/shoe1.jpg";
import clothes from "../../assets/images/Clothes/cloth1.jpg";
import bags from "../../assets/images/Bags/bag1.jpg";
import glasses from "../../assets/images/Glasses/glasses1.jpg";
import hats from "../../assets/images/Hats/hat1.jpg";
import hookah from "../../assets/images/Hookah/hookah1.jpg";
import perfume from "../../assets/images/Perfume/perfume1.jpg";

const FeaturedCategories = () => (
  <FeaturedComponentContainer>
    <Head>featured categories</Head>
    <Row>
      <Col1>
        <ItemName>clothes</ItemName>
        <Img src={clothes} />
        <ButtonCon>shop now</ButtonCon>
      </Col1>
      <Col2>
        <ItemName>shoes</ItemName>
        <Img src={shoes} />
        <ButtonCon>shop now</ButtonCon>
      </Col2>
      <Col3>
        <ItemName>watches</ItemName>
        <Img src={watches} />
        <ButtonCon>shop now</ButtonCon>
      </Col3>
      <Col4>
        <ItemName>bag</ItemName>
        <Img src={bags} />
        <ButtonCon>shop now</ButtonCon>
      </Col4>

      <Col1>
        <ItemName>glasses</ItemName>
        <Img src={glasses} />
        <ButtonCon>shop now</ButtonCon>
      </Col1>
      <Col2>
        <ItemName>hat</ItemName>
        <Img src={hats} />
        <ButtonCon>shop now</ButtonCon>
      </Col2>
      <Col3>
        <ItemName>hookah</ItemName>
        <Img src={hookah} />
        <ButtonCon>shop now</ButtonCon>
      </Col3>
      <Col4>
        <ItemName>perfume</ItemName>
        <Img src={perfume} />
        <ButtonCon>shop now</ButtonCon>
      </Col4>
    </Row>
  </FeaturedComponentContainer>
);

export default FeaturedCategories;
