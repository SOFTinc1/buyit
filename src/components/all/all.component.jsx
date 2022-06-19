import React from "react";
import {
  AllContainer,
  Row,
  ImageSrc,
  TextContainer,
  Title,
  Title2,
  Title3,
  Title4,
  Descrip,
  ButtonContainer
} from "./all.styles";
import Button from "../button/button.component";
import Image from "../../assets/images/section.jpg";

const AllExplain = () => (
  <AllContainer>
    <Row>
      <ImageSrc src={Image} />
      <TextContainer>
        <Title>aesthetic</Title>
        <Title2>classic</Title2>
        <Title3>personal</Title3>
        <Title4>all fashion</Title4>
        <Descrip>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse nisi
          accusantium asperiores similique modi perferendis, amet eos, at vitae
          possimus deleniti ipsum ut omnis et provident explicabo nihil quam
          fugiat beatae. Voluptatibus doloremque explicabo repellat aliquid modi
          possimus, velit vitae!
        </Descrip>
        <ButtonContainer as={Button}>find all </ButtonContainer>
      </TextContainer>
    </Row>
  </AllContainer>
);

export default AllExplain;