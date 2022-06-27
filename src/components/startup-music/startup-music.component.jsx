import React from "react";
import {
  StartUpMusicContainer,
  BackgroundOverlay,
  H1,
  H2,
  ButtonContainer,
  Enter,
} from "./startup-music.styles";
import CustomButton from "../custom-button/custom-button.component";

const StartUpMusic = () => (
  <StartUpMusicContainer>
    <BackgroundOverlay>
      <H1>nitonovaz</H1>
      <H2>music</H2>
      <ButtonContainer to="/music">
        <Enter as={CustomButton}>Enter</Enter>
      </ButtonContainer>
    </BackgroundOverlay>
  </StartUpMusicContainer>
);

export default StartUpMusic;
