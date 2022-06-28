import styled from "styled-components";

export const CatalogueOverviewContainer = styled.div`
  // margin: -200px 0 0 0;
  padding: 0 80px 50px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #252427;
  height: 100%;

  @media screen and (max-width: 800px) {
    margin: 0;
    padding: 0;
  }
`;

export const Title = styled.h1`
  margin: 20px 0 0 0;
  text-align: center;
  color: #d6a26d;
  font-family: Elipses;
  font-weight: 400;
  font-size: 115px;
  text-transform: capitalize;
  padding: 40px 30px 40px 30px;

  @media screen and (max-width: 800px) {
    font-size: 45px;
    margin: 0;
  }
`;

export const ImageSrc = styled.img`
  width: 100%;
  margin: 40px  0 0 0;
  height: 70%;
`;