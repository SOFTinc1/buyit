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
  background: #F5F5F5;
  padding: 50px;
  border-radius: 5px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 800px) {
      padding: 40px 10px;
    }
  }
`;
export const Verify = styled.span`
  font-size: 15px;
  text-transform: capitalize;
  color: #B71C1C;
`;
export const Col1 = styled.div``;
export const Img = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  

  &:hover {
    border: 2px solid #F44336;
  }
`;
export const InnerRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  margin: 10px 0 0 0;
`;
export const Title = styled.span`
  font-size: 15px;
  text-transform: capitalize;
  color: #000;
`;
export const Price = styled.span`
  font-size: 15px;
  text-transform: capitalize;
  color: #000;
  font-weight: 800;
`;
export const ItemName = styled.span`
  font-size: 20px;
  text-transform: capitalize;
  text-align: center;
  padding: 15px 0;
  cursor: pointer;
  color: #d6a26d;
  margin: 0 0 10px 0;
`;
export const ButtonCon = styled(Button)`
  width: 70%;
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
