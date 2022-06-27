import React from "react";
import { StartUpContainer } from "./start-up.styles";
import StartUpLifestyle from "../../components/startup-lifestyle/startup-lifestyle.component";
import StartUpMusic from "../../components/startup-music/startup-music.component";

const StartUp = () => (
  <StartUpContainer>
    <StartUpLifestyle />
    <StartUpMusic />
  </StartUpContainer>
);

export default StartUp;
