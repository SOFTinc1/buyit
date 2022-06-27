import React from "react";
import {
  StartUpLifestyleContainer,
  BackgroundOverlay,
  H1,
  H2,
  Enter,
  ButtonContainer
} from "./startup-lifestyle.styles";
import Button from "../button/button.component";

const StartUpLifestyle = () => (
  <StartUpLifestyleContainer>
    <BackgroundOverlay>
      <H1>nitonovaz</H1>
      <H2>lifestyle</H2>
      <ButtonContainer to="/lifestyle">
        <Enter as={Button}>Enter</Enter>
      </ButtonContainer>
    </BackgroundOverlay>
  </StartUpLifestyleContainer>
);

export default StartUpLifestyle;
