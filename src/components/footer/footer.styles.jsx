import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 50px 80px 50px 30px;
  background: #263238;
  color: #fff;

  @media screen and (max-width: 800px) {
    padding: 20px 30px 20px 30px;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Brand = styled.div`
  
  @media screen and (max-width: 800px) {
    
  }
`;
export const BrandLogo = styled.img`
  width: 100%;

  @media screen and (max-width: 800px) {
    // width: 100%;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Option = styled.p`
  font-family: Bw Vivant;
  font-size: 15px;
  text-transform: capitalize;
  font-weight: 400;
`;

export const FormContainer = styled.div`
  background: transparent;
  width: 100%;
  color: #fff;
  border: 0.15rem solid #fff;
  border-radius: 5px;
  padding: 15px 15px 15px 10px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #fff;
    text-transform: capitalize;
  }

  @media screen and (max-width: 800px) {
    margin: 10px 0 0 0;
  }
`;
export const Option1 = styled.div`
  font-family: Bw Vivant;
  font-size: 30px;
  text-transform: capitalize;
  font-weight: 400;
  letter-spacing: 2px;
`;

export const FooterBottom = styled.p`
  font-family: Bw Vivant;
  font-size: 15px;
  text-transform: capitalize;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: center;
  margin: 40px 0 0 0;
`;