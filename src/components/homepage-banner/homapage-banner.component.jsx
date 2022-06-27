import React from "react";
import {
  HomepageContainer,
  Title,
  Descrip,
  ImageSrc,
  Details,
  Row,
  FlexRow,
  ButtonThingy,
  // Empty,
} from "./homepage-banner.styles";
import BannerImg from "../../assets/images/lifestyle.jpg";
import Button from "../button/button.component";

const HomepageBanner = () => (
  <HomepageContainer>
    {/* <Row>
      <Empty></Empty>
      <Empty></Empty>
      <ImageSrc src={BannerImg} />
    </Row> */}
    {/* <Title>make yourself elegant</Title> */}
    {/* <Title>express your elegance</Title> */}
    {/* <Descrip>with our store</Descrip>
    <Details>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet
      repellendus eaque ut asperiores veritatis voluptate nihil iusto nemo magni
      dicta assumenda fugiat eum quasi repudiandae in laborum inventore natus,
      odit, eos dignissimos harum nostrum? Omnis qui modi perferendis cum!
    </Details>
    <ButtonThingy as={Button}>shop now</ButtonThingy> */}

    <Row>
      <FlexRow>
        <Title>make yourself elegant</Title>
        <Descrip>with our store</Descrip>
        <Details>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et amet
        repellendus eaque ut asperiores veritatis voluptate nihil iusto nemo
        magni dicta assumenda fugiat eum quasi repudiandae in laborum inventore
        natus, odit, eos dignissimos harum nostrum? Omnis qui modi perferendis
        cum!
      </Details>
      <ButtonThingy as={Button}>shop now</ButtonThingy>
      </FlexRow>
      <ImageSrc src={BannerImg} />
    </Row>
  </HomepageContainer>
);

export default HomepageBanner;
