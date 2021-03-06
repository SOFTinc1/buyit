import styled from "styled-components";

export const AllContainer = styled.div`
  padding: 50px 80px 50px 200px;

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
export const ImageSrc = styled.img`
  width: 100%;

  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;
export const TextContainer = styled.div`
  margin: 0px 0 0 0;

  @media screen and (max-width: 800px) {
    padding: 0 30px 10px 30px;
    margin: 0;
  }
`;
export const Title = styled.h1`
  font-family: Bw Vivant;
  font-weight: 400;
  font-size: 55px;
  text-transform: uppercase;
  text-align: left;
  letter-spacing: 2px;

  @media screen and (max-width: 800px) {
    font-size: 40px;
  }
`;
export const Title2 = styled.h1`
  font-family: Bw Vivant;
  font-weight: 800;
  font-size: 55px;
  color: #D6A26D;
  text-transform: uppercase;
  margin: 0 0 0 120px;
  letter-spacing: 2px;

  @media screen and (max-width: 800px) {
    font-size: 40px;
  }
`;
export const Title3 = styled.h1`
  font-family: Bw Vivant;
  font-weight: 400;
  font-size: 55px;
  text-transform: uppercase;
  text-align: left;
  letter-spacing: 2px;

  @media screen and (max-width: 800px) {
    font-size: 40px;
  }
`;
export const Title4 = styled.h1`
  font-family: Bw Vivant;
  font-weight: 800;
  font-size: 55px;
  color: #D6A26D;
  text-transform: uppercase;
  margin: 0 0 0 120px;
  letter-spacing: 2px;

  @media screen and (max-width: 800px) {
    font-size: 27px;
  }
`;
export const Descrip = styled.p`
  width: 380px;
  font-family: Axiforma;
  font-size: 12px;
  text-transform: capitalize;
  text-align: left;
  margin: 0 0 0 50px;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 10px 0 0 0;
  }
`;
export const ButtonContainer = styled.button`
  margin: 20px 0 0 50px;

  @media screen and (max-width: 800px) {
    margin: 20px 0 0 0;
  }
`;
