import React from "react";
import {
  OurStoryContainer,
  Row,
  Column1,
  Title,
  Descrip,
  ImageOne,
  ImageTwo,
  //   Empty
} from "./our-story.styles";
import Button from "../button/button.component";
import Image1 from "../../assets/images/story2.jpg";
import Image2 from "../../assets/images/POTRAIT.jpg";

const OurStory = () => (
  <OurStoryContainer>
    <Row>
      <Column1>
        <Title>our story</Title>
        <Descrip>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          id voluptatem sequi nulla, quidem asperiores blanditiis numquam
          officiis ipsum voluptates, animi autem repudiandae incidunt! Nostrum
          itaque ad praesentium facilis illo.
        </Descrip>
        <Button>enter now</Button>
        <ImageOne src={Image1} />
      </Column1>
      <ImageTwo src={Image2} />
      {/* <Empty /> */}
      {/* <Empty /> */}
    </Row>
  </OurStoryContainer>
);

export default OurStory;
