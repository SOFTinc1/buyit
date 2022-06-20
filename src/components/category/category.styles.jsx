import styled from "styled-components";

export const CategoryContainer = styled.div`
  padding: 80px;

  @media screen and (max-width: 800px) {
    padding: 0 30px 10px 30px;
    margin: 40px 0 0 0;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`;
export const GridRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
export const Image1 = styled.img`
  width: 100%;
  height: 100%;
`;
export const Title = styled.h1`
  font-size: 30px;
  font-family: archwaltz;

  @media screen and (max-width: 800px) {
    margin: 0 0 0 -1px;
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
  }
`;
export const Image2 = styled.img`
  width: 100%;
  height: 100%;
  margin: 10px 0 0 0;
`;

export const Title2 = styled.h1`
  font-size: 30px;
  font-family: archwaltz;
  margin: 30px 0 0 190px;
  width: 100px;

  @media screen and (max-width: 800px) {
    margin: 10px 0 0 5px;
    font-size: 22px;
  }
`;
export const RealFlexRow = styled.div`
  margin: 30px 0 0 0;
`;

export const But = styled.button`


  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;