import styled from "styled-components";
import Button from "../button/button.component";

export const CollectionItemContainer = styled.div`
  width: 21vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
      font-family: "Axiforma";
    }
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0 20px 0;
  background: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 400px;
    padding: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  // border-radius: 100px;
  margin-bottom: 10px;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 200px;
  }
`;

export const AddButton = styled(Button)`
  width: 100%;
  background: rgba(255, 255, 255, 0.479);
  border: none;
  color: #000;
  position: absolute;
  margin: -100px 0 0 0;
  display: none;
  font-family: Rehn;
  font-size: 22px;
  border: none;

  &:hover {
    outline: none;
    border: none;
    background: rgba(255, 255, 255, 0.479);
    color: #000;
    font-weight: 400;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
    display: block;
    opacity: 0.9;
    padding: 0 10px;
    font-size: 15px;
    margin: 75px 0 0 12px;
    border: 2px solid #8d6648;

    &:hover {
      border: 2px solid #8d6648;
    }
  }
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: column;
`;

export const FooterName = styled.span`
  width: 100%;
  margin-bottom: 15px;
  font-size: 25px;
  font-family: Axiforma;
  text-align: left;
  padding: 0 0 0 10px;
  
  @media screen and (max-width: 800px) {
    font-size: 19px;
  }
`;

export const FooterPrice = styled.span`
  width: 100%;
  font-size: 25px;
  font-weight: 600;
  font-family: Axiforma;
  text-align: left;
  padding: 0 0 0 10px;
  margin: -10px 0 0 0;
  
  @media screen and (max-width: 800px) {
    font-size: 19px;
  }
`;
