import styled from "styled-components";
import BackgroundImg from "../../assets/images/music.jpg";
import { Link } from "react-router-dom";

export const StartUpMusicContainer = styled.div`
  background: url(${BackgroundImg});
  height: 100vh;
  background-size: cover;
  width: 100%;

  @media screen and (max-width: 800px) {
    height: 80vh;
    width: 100%;
  }
`;
export const BackgroundOverlay = styled.div`  
  background-color: #f9a82596;
  height: 100vh;
  width: 100%;

  @media screen and (max-width: 800px) {
    height: 80vh;
    width: 100%;
  }
`;
export const H1 = styled.h1`
  padding: 100px 0 0 0;
  font-family: Bw Vivant;
  font-size: 90px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  color: #000;
  letter-spacing: 2px;

  @media screen and (max-width: 800px) {
    font-size: 40px;
    padding: 160px 0 0 0;
  }
`;
export const H2 = styled.h2`
  font-family: Bw Vivant;
  font-size: 90px;
  text-transform: uppercase;
  text-align: center;
  color: #000;
  letter-spacing: 2px;

  @media screen and (max-width: 800px) {
    font-size: 100px;
  }
`;
export const ButtonContainer = styled(Link)``;
export const Enter = styled.button`
  margin: 0 auto;
`;