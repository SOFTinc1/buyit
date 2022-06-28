import styled from "styled-components";
import BackgroundImg from "../../assets/images/yellow.jpg";

export const BannerMusicContainer = styled.div`
  // padding: 80px 80px 0 80px;
  // background: #D6A26D;
  background: url(${BackgroundImg});
  background-size: cover;
  height: 700px;

  @media screen and (max-width: 800px) {
    background-size: auto;
    overflow: hidden;
  }
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.658);
  padding: 80px 80px 0 30px;
  height: 100%;

  @media screen and (max-width: 800px) {
    padding: 20px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 80px 0 0 0;
`;

export const H1 = styled.h1`
  font-size: 80px;
  text-align: left;
  font-family: Mighty;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #d6a26d;

  @media screen and (max-width: 800px) {
    font-size: 50px;
  }
`;
export const Col1 = styled.div``;
export const Col2 = styled.div``;
export const Col3 = styled.div``;
export const P1 = styled.h2`
  font-size: 35px;
  text-align: left;
  font-family: Mighty;
  font-weight: 800;
  text-transform: Capitalize;
  letter-spacing: 2px;
  margin: 90px 0 0 0;
  color: #fff;

  @media screen and (max-width: 800px) {
    font-size: 30px;
  }
`;
export const P2 = styled.p`
  width: 400px;
  font-size: 15px;
  letter-spacing: 2px;
  font-family: Mighty;
  font-weight: 400;
  text-align: left;
  text-transform: capitalize;
  color: #fff;

  @media screen and (max-width: 800px) {
    padding: 20px 40px 0 0;
  }
`;
export const Image1 = styled.img`
  width: 100%;
  height: 70%;
`;
