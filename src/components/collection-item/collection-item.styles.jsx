import styled from "styled-components";
import Button from "../button/button.component";

export const CollectionItemContainer = styled.div`
  width: 22vw;
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
      font-family: "Rehn";
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
        .image {
          opacity: unset;
        }
        button {
          opacity: unset;
          font-family: "Rehn";
        }
      }
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  background-size: cover;
  background-position: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-size: cover;
  background-position: center;
  margin-bottom: 10px;
`;

export const AddButton = styled(Button)`
  width: 70%;
  background: rgba(255, 255, 255, 0.479);
  color: #000;
  position: absolute;
  margin: -100px 0 0 -5px;
  display: none;
  font-family: Rehn;
  font-size: 22px;
  border: none;

  &:hover {
    outline: none;
    border: none;
    background: rgba(255, 255, 255, 0.479);
    color: #000;
    font-size: 25px;
  }

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: column;
  font-size: 18px;
`;

export const FooterName = styled.span`
  width: 100%;
  margin-bottom: 15px;
  font-size: 25px;
  font-family: Axiforma;
  text-align: center
`;

export const FooterPrice = styled.span`
  width: 100%;
  font-size: 25px;
  font-weight: 800;
  font-family: Axiforma;
  text-align: center
`
