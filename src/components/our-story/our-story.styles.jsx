import styled from "styled-components";

export const OurStoryContainer = styled.div`
  margin: 0 0 0 0;
  padding: 80px;
  background: #252427;

  @media screen and (max-width: 800px) {
    margin: 0;
    padding: 0;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 3fr 1.5fr;
  grid-gap: 10px;

@media screen and (max-width: 800px) {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
`;
export const Column1 = styled.div`

`;
export const Title = styled.h1`
  font-family: Bw Vivant;
  font-family: Elipses;
  font-size: 65px;
  font-weight: 300;
  text-transform: uppercase;
  color: #d6a26d;

  @media screen and (max-width: 800px) {
    font-size: 45px;
    text-align: center;
    padding: 30px 35px 0 35px;
  }
`;
export const Descrip = styled.p`
  font-family: Rehn;
  font-size: 15px;
  letter-spacing: 1.5px;
  text-transform: capitalize;
  color: #fff;

  @media screen and (max-width: 800px) {
    font-size: 15px;
    text-align: left;
    padding: 5px 25px 20px 25px;
  }
`;

export const ButtonT = styled.button`

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const ImageOne = styled.img`
  width: 100%;
  height: 100%;
  margin: 20px 0 0 0;
  background-size: cover;

  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;

export const ImageTwo = styled.img`
  width: 100%;
  height: 110.2%;
  background-size: cover;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Empty = styled.div``;
