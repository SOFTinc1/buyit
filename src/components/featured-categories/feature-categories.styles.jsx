import styled from "styled-components";
import Button from "../button/button.component";

export const FeaturedComponentContainer = styled.div`
  width: 100%;
  padding: 0 50px 50px 50px;
  background: #212121;

  @media screen and (max-width: 800px) {
    padding: 0 10px 50px 10px;
  }
`;
export const Head = styled.h1`
  font-size: 30px;
  padding: 30px 0 50px 0;
  margin: 0;
  text-transform: uppercase;
  font-family: Bw Vivant;
  color: #eee;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 50px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;
export const Col1 = styled.div``;
export const Img = styled.img`
  width: 100%;
  height: 300px;
  box-shadow: #757575 0px 2px 8px 0px;
`;
export const ItemName = styled.span`
  font-size: 20px;
  text-transform: capitalize;
  text-align: center;
  padding: 20px 0;
  cursor: pointer;
  color: #d6a26d;
  margin: 0 0 10px 0;
`;
export const ButtonCon = styled(Button)`
  margin: 20px 0;
`;
export const Col2 = styled.div``;
export const Col3 = styled.div``;
export const Col4 = styled.div``;
