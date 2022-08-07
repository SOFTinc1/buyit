import styled from "styled-components";
import Button from "../button/button.component";

export const FeaturedComponentContainer = styled.div`
  width: 100%;
  padding: 0 50px 50px 50px;
  background: #252427;

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
    display: flex;
    flex-direction: column;
  }
`;
export const Col1 = styled.div``;
export const Img = styled.img`
  width: 100%;
  height: 300px;

  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    overflow: hidden;
  }
`;
export const InnerRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  margin: 10px 0 0 0;
  // box-shadow: #d6a26d 0px 0px 0px 1px;
  // padding: 10px;
`;
export const Title = styled.span`
  font-size: 17px;
  text-transform: capitalize;
  color: #d6a26d;
`;
export const Price = styled.span`
  font-size: 17px;
  text-transform: capitalize;
  color: #d6a26d;
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
  width: 50%;
  margin: 5px 0 0 0;
`;
export const Col2 = styled.div`
  // box-shadow: #eeeeee 0px 0px 0px 1px;
`;
export const Col3 = styled.div`
  // box-shadow: #eeeeee 0px 0px 0px 1px;
`;
export const Col4 = styled.div`
  // box-shadow: #eeeeee 0px 0px 0px 1px;
`;
