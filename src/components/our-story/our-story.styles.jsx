import styled from "styled-components";

export const OurStoryContainer = styled.div`
  margin: 200px 0 0 0;
  padding: 80px;
  background: #fff;

  @media screen and (max-width: 800px) {
    margin: 200px 0 0 0;
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
  font-family: Axiforma;
  font-size: 35px;
  font-weight: 800;
  text-transform: capitalize;

  @media screen and (max-width: 800px) {
    font-size: 22px;
    margin: 40px 0 20px 0;
    text-align: center;
  }
`;
export const Descrip = styled.p`
  font-family: archwaltz;
  font-size: 15px;
  letter-spacing: 1.5px;
  text-transform: capitalize;

  @media screen and (max-width: 800px) {
    font-size: 15px;
    margin: 0 0 20px 0;
    text-align: center;
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
