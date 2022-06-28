import styled from "styled-components";

export const SongsContainer = styled.div`
  padding: 30px 0 20px 60px;

  @media screen and (max-width: 800px) {
    padding: 20px 10px 0 30px;
    height: 100vh;
  }
`;
export const H1 = styled.div`
  padding: 0 0 30px 0;
  font-size: 50px;
  text-align: left;
  font-family: Elipses;
  // text-transform: uppercase;
  letter-spacing: 2px;
`;
export const Row = styled.div`
  height: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin: 0 0 20px 0;
  }
`;
export const Col = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0px;

  @media screen and (max-width: 800px) {
    margin: 0 0 30px 0;
    // background: #252427;
  }
`;
export const InnerRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
export const ImageTag = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
`;
export const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Span1 = styled.div`
  margin: 30px 0 0 0;
  width: 100px;
  font-size: 13px;
  font-family: Axiforma;
  font-weight: 400;
  text-align: left;
  text-transform: Uppercase;
`;
export const Span2 = styled.div`
  width: 100px;
  font-size: 13px;
  font-family: Axiforma;
  font-weight: 400;
  text-align: left;
  text-transform: capitalize;
`;
