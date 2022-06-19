import styled from "styled-components";

export const HomepageContainer = styled.div`
  padding: 140px 80px 80px 100px;
  height: 100%;
  background: #fafaf4;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;
export const Empty = styled.div``;

export const Title = styled.h1`
  font-family: archwaltz;
  font-size: 95px;
  text-transform: uppercase;
  margin: -660px 0 0 0;
  transform: scale(1, 2);
`;
export const Descrip = styled.h2`
  font-family: archwaltz;
  font-size: 50px;
  text-transform: uppercase;
  color: #8d6648;
  margin: 10px 0 0 0;
  transform: scale(1, 1.5);
`;
export const ImageSrc = styled.img`
  width: 100%;
  height: 150%;
  margin: -100px 0 0 -270px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;
export const Details = styled.p`
  font-family: Rehn;
  font-size: 13px;
  text-align: left;
  width: 374px;
  margin: 220px 0 20px 0;
`;
