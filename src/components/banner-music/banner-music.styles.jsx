import styled from "styled-components";
import BackgroundImg from "../../assets/images/yellow.jpg";

export const BannerMusicContainer = styled.div`
  // padding: 80px 80px 0 80px;
  // background: #D6A26D;
  background: url(${BackgroundImg});
  background-size: cover;
  height: 700px;
`;

export const Overlay = styled.div`
  // background: #d6a16d88;
  padding: 80px 80px 0 30px;
  height: 100%;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 80px 0 0 0;
`;

export const H1 = styled.h1`
  // padding: 20px 0 0 0;
  font-size: 80px;
  text-align: left;
  font-family: Elipses;
  text-transform: uppercase;
  letter-spacing: 2px;
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
`;
export const P2 = styled.p`
  width: 400px;
  font-size: 15px;
  letter-spacing: 2px;
  font-family: Mighty;
  font-weight: 400;
  text-align: left;
  text-transform: capitalize;
`;
export const Image1 = styled.img`
  width: 100%;
  height: 70%;
`;
