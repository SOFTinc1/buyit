import styled from "styled-components";

export const CategoryContainer = styled.div`
  padding: 50px 80px 50px 80px;
  background: #fafaf4;

  @media screen and (max-width: 800px) {
    padding: 0 30px 10px 30px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin: 30px 0 0 0;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin: 10px 0 0 0;
  }
`;

export const GridRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`;
export const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
`;
export const GridA = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`;
export const Empty = styled.div``;
export const GridB = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`;
export const Image3 = styled.img`
  width: 100%;
  height: 100%;
`;
export const Title3 = styled.h1`
  font-size: 30px;
  font-family: Axiforma;
  width: 100px;
  margin: 0 0 0 10px;

  @media screen and (max-width: 800px) {
    font-size: 25px;
    margin: 20px 0 0 0;
  }
`;
export const Move = styled.button`
  margin: 0 0 10px 0;

`;
export const Image4 = styled.img`
  width: 100%;
  height: 100%;
`;
export const Title4 = styled.h1`
  font-size: 30px;
  font-family: Axiforma;

  @media screen and (max-width: 800px) {
    margin: 0 0 0 0px;
  }
`;
export const RealFlexRow = styled.div`
  margin: 30px 0 0 170px;

  @media screen and (max-width: 800px) {
    margin: 20px 0 0 0;
  }
`;

export const But = styled.button`
  margin: 0 0 0 -60px;

  @media screen and (max-width: 800px) {
    margin: 20px 0 0 0;
  }
`;