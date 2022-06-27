import styled from "styled-components";
import BackgroundImage from "../../assets/images/bg.jpg";

export const HomepageContainer = styled.div`
  padding: 30px 50px;
  background: url(${BackgroundImage});
  background-size: cover;
  height: 100%;

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  grid-gap: 0px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
export const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  font-family: Mighty;
  font-size: 90px;
  text-align: left;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  transform: scale(1, 2);
  color: #d6a26d;
  padding: 60px 0 0 0;

  @media screen and (max-width: 800px) {
    letter-spacing: 1px;
    font-size: 50px;
    transform: scale(1, 1);
    padding: 30px 35px 0 35px;
  }
`;
export const Descrip = styled.div`
  font-family: Elipses;
  font-size: 85px;
  text-align: left;
  text-transform: uppercase;
  color: #fff;

  @media screen and (max-width: 800px) {
    letter-spacing: 1px;
    font-size: 40px;
    padding: 0 35px;
  }
`;
export const ImageSrc = styled.img`
  width: 100%;
  // margin: -200px 0 0 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  @media screen and (max-width: 800px) {
    padding: 0;
  }
`;
export const Details = styled.div`
  font-family: Axiforma;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 400;
  text-align: left;
  // width: 600px;
  color: #fff;
  margin: 50px 0 20px 0;

  @media screen and (max-width: 800px) {
    margin: 20px 0 20px 0;
    padding: 0 35px;
  }
`;
export const ButtonThingy = styled.div`
  width: 20%;

  @media screen and (max-width: 800px) {
    width: 60%;
    margin: 0 0 30px 35px;
  }
`;

// export const HomepageContainer = styled.div`
//   padding: 140px 80px 50px 80px;
//   height: 100%;
//   background: #0d0d0d;

//   @media screen and (max-width: 1400px) {
//     padding: 140px 80px 50px 80px;
//   }
//   @media screen and (max-width: 800px) {
//     padding: 0;
//   }

//   @media screen and (max-width: 800px) {
//     padding: 0;
//   }
// `;

// export const Row = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   grid-gap: 20px;

//   @media screen and (max-width: 800px) {
//     display: flex;
//     flex-direction: column;
//   }
// `;
// export const Empty = styled.div``;

// export const Title = styled.h1`
//   font-family: archwaltz;
//   font-size: 95px;
//   font-weight: 400;
//   text-transform: uppercase;
//   margin: 0px 0 0 0;
//   transform: scale(1, 2);
//   color: #F9A825;

//   @media screen and (max-width: 1240px) {
//     margin: -610px 0 0 0;
//     font-size: 88px;
//   }
//   @media screen and (max-width: 1200px) {
//     margin: -610px 0 0 0;
//     font-size: 80px;
//   }
//   @media screen and (max-width: 1194px) {
//     margin: -580px 0 0 0;
//     font-size: 80px;
//   }
//   @media screen and (max-width: 1152px) {
//     margin: -560px 0 0 0;
//     font-size: 80px;
//   }
//   @media screen and (max-width: 1129px) {
//     margin: -550px 0 0 0;
//     font-size: 79px;
//   }
//   @media screen and (max-width: 1108px) {
//     margin: -530px 0 0 0;
//     font-size: 79px;
//   }
//   @media screen and (max-width: 1134px) {
//     margin: -550px 0 0 0;
//     font-size: 79px;
//   }
//   @media screen and (max-width: 1123px) {
//     margin: -540px 0 0 0;
//     font-size: 78px;
//   }
//   @media screen and (max-width: 1107px) {
//     margin: -530px 0 0 0;
//     font-size: 77px;
//   }
//   @media screen and (max-width: 1100px) {
//     margin: -520px 0 0 0;
//     font-size: 76px;
//   }
//   @media screen and (max-width: 1082px) {
//     margin: -480px 0 0 0;
//     font-size: 73px;
//   }
//   @media screen and (max-width: 958px) {
//     margin: -410px 0 0 0;
//     font-size: 60px;
//   }
//   @media screen and (max-width: 890px) {
//     margin: -370px 0 0 0;
//     font-size: 50px;
//   }
//   @media screen and (max-width: 424px) {
//     margin: -640px 0 0 0;
//     font-size: 25px;
//     text-align: center;
//     font-weight: 800;
//   }
// `;
// export const Descrip = styled.h2`
//   font-family: Elipses;
//   font-size: 90px;
//   text-transform: uppercase;
//   color: #F9A825;
//   margin: 10px 0 0 0;
//   transform: scale(1, 1.5);

//   @media screen and (max-width: 800px) {
//     font-size: 25px;
//     position: relative;
//     text-align: center;
//     font-weight: 800;
//   }
// `;
// export const ImageSrc = styled.img`
//   width: 100%;
//   height: 150%;
//   margin: -100px 0 0 -270px;
//   box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
//     rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

//   @media screen and (max-width: 1250px) {
//     margin: -90px 0 0 -210px;
//     height: 160%;
//   }
//   @media screen and (max-width: 1240px) {
//     margin: -90px 0 0 -270px;
//     height: 160%;
//   }
//   @media screen and (max-width: 1194px) {
//     margin: -90px 0 0 -230px;
//   }
//   @media screen and (max-width: 1152px) {
//     margin: -90px 0 0 -190px;
//   }
//   @media screen and (max-width: 800px) {
//     margin: 0;
//     width: 100%;
//     height: 100%;
//     margin: -40px 0 0 0;
//     box-shadow: none;
//   }
// `;
// export const Details = styled.p`
//   font-family: Axiforma;
//   font-size: 13px;
//   font-weight: 400;
//   text-align: left;
//   width: 374px;
//   margin: 220px 0 20px 0;

//   @media screen and (max-width: 424px) {
//     text-align: center;
//     margin: 240px 0 0 30px;
//     width: 300px;
//     font-size: 15px;
//     position: relative;
//     text-align: center;
//     font-weight: 800;
//   }
// `;

// export const ButtonThingy = styled.button`

//   @media screen and (max-width: 800px) {
//     display: none;
//   }
// `;
