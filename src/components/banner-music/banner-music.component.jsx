import React from "react";
import {
  BannerMusicContainer,
  H1,
  Overlay,
  Row,
  Col1,
  Col2,
  Col3,
  P1,
  P2,
  Image1,
} from "./banner-music.styles";

import ImageSrc from "../../assets/images/music.jpg";

const BannerMusic = () => (
  // <BannerMusicContainer>
  //   <H1>
  //     the coolest selection <br /> of finest music
  //   </H1>
  //   <Row>
  //     <Col1>
  //       <P1>explore our vast collection of music</P1>
  //     </Col1>
  //     <Col2>
  //       <Image1 src={ImageSrc} />
  //     </Col2>
  //     <Col3>
  //       <P2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum ipsa dolorum beatae, fugiat possimus nam quibusdam nihil obcaecati in doloremque facere reprehenderit dolor repellendus accusamus totam optio quam rem!</P2>
  //     </Col3>
  //   </Row>
  // </BannerMusicContainer>

  <BannerMusicContainer>
    <Overlay>
      <H1>
        the coolest selection <br /> of finest music
      </H1>
      <P1>explore our vast collection of music</P1>
      <P2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illum ipsa dolorum beatae, fugiat possimus nam quibusdam nihil obcaecati in doloremque facere reprehenderit dolor repellendus accusamus totam optio quam rem!</P2>
    </Overlay>
  </BannerMusicContainer>
);

export default BannerMusic;
