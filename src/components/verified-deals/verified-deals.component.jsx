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
  Verify,
  Col2,
  Col3,
  Col4,
} from "./verified-deals.styles";
// import reco3 from "../../assets/images/recomended/reco1.jpg";
import reco2 from "../../assets/images/recomended/reco2.jpg";
import reco3 from "../../assets/images/recomended/reco3.jpg";
import reco4 from "../../assets/images/recomended/reco4.jpg";

const VerifiedDeals = () => (
  <FeaturedComponentContainer>
    <Head>verified products</Head>
    <Row>
      <Col1>
        <Img src={reco3} />
        <InnerRow>
          <Title>low denim top skirt aloof</Title>
          <Price>$1220</Price>
          <ButtonCon>shop now</ButtonCon>
        </InnerRow>
      </Col1>
      <Col2>
        <Img src={reco2} />
        <InnerRow>
          <Title>low denim top skirt aloof</Title>
          <Price>$1220</Price>
          <ButtonCon>shop now</ButtonCon>
        </InnerRow>
      </Col2>
      <Col3>
        <Img src={reco3} />
        <InnerRow>
          <Title>low denim top skirt aloof</Title>
          <Price>$1220</Price>
          <ButtonCon>shop now</ButtonCon>
        </InnerRow>
      </Col3>
      <Col4>
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

export default VerifiedDeals;
