import React from "react";
import {
  HomepageContainer,
  Title,
  Descrip,
  ImageSrc,
  Details,
  Row,
  Empty,
  ButtonThingy
} from "./homepage-banner.styles";
import BannerImg from "../../assets/images/model1.jpg";
import Button from "../button/button.component";

const HomepageBanner = () => (
  <HomepageContainer>
    <Row>
      <Empty></Empty>
      <Empty></Empty>
      <ImageSrc src={BannerImg} />
    </Row>
    <Title>make yourself elegant</Title>
    {/* <Title>express your elegance</Title> */}
    <Descrip>with our store</Descrip>
    <Details>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet
      repellendus eaque ut asperiores veritatis voluptate nihil iusto nemo magni
      dicta assumenda fugiat eum quasi repudiandae in laborum inventore natus,
      odit, eos dignissimos harum nostrum? Omnis qui modi perferendis cum!
    </Details>
    <ButtonThingy as={Button}>shop now</ButtonThingy>
  </HomepageContainer>
);

export default HomepageBanner;
