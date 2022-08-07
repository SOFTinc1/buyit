import {
  Head,
  FeaturedComponentContainer,
  Row,
  Col1,
  Img,
  InnerRow,
  Title,
  Price,
  ButtonCon,
  ItemName,
  Col2,
  Col3,
  Col4,
} from "./recomended.styles";
import reco1 from "../../assets/images/recomended/reco1.jpg";
import reco2 from "../../assets/images/recomended/reco2.jpg";
import reco3 from "../../assets/images/recomended/reco3.jpg";
import reco4 from "../../assets/images/recomended/reco4.jpg";

const Recomended = () => (
  <FeaturedComponentContainer>
    <Head>recomended items</Head>
    <Row>
      <Col1>
        <ItemName>clothes</ItemName>
        <Img src={reco1} />
        <InnerRow>
          <Title>low denim top skirt aloof</Title>
          <Price>$1220</Price>
          <ButtonCon>shop now</ButtonCon>
        </InnerRow>
      </Col1>
      <Col2>
        <ItemName>shoes</ItemName>
        <Img src={reco2} />
        <InnerRow>
          <Title>low denim top skirt aloof</Title>
          <Price>$1220</Price>
          <ButtonCon>shop now</ButtonCon>
        </InnerRow>
      </Col2>
      <Col3>
        <ItemName>watches</ItemName>
        <Img src={reco3} />
        <InnerRow>
          <Title>low denim top skirt aloof</Title>
          <Price>$1220</Price>
          <ButtonCon>shop now</ButtonCon>
        </InnerRow>
      </Col3>
      <Col4>
        <ItemName>bag</ItemName>
        <Img src={reco4} />
        <InnerRow>
          <Title>low denim top skirt aloof</Title>
          <Price>$1220</Price>
          <ButtonCon>shop now</ButtonCon>
        </InnerRow>
      </Col4>
    </Row>
  </FeaturedComponentContainer>
);

export default Recomended;
