import React from "react";
import {
  SongsContainer,
  H1,
  Row,
  Col,
  InnerRow,
  ImageTag,
  FlexRow,
  Span1,
  Span2
} from "./songs-overview.styles";
import ImageSrc from "../../assets/images/music2.jpg";

const SongsOverview = () => (
  <SongsContainer>
    <H1>All Songs</H1>
    <Row>
      <Col>
        <InnerRow>
          <ImageTag src={ImageSrc} />
          <FlexRow>
            <Span1>artist name</Span1>
            <Span2>song title</Span2>
          </FlexRow>
        </InnerRow>
      </Col>
      <Col>
        <InnerRow>
          <ImageTag src={ImageSrc} />
          <FlexRow>
            <Span1>artist name</Span1>
            <Span2>song title</Span2>
          </FlexRow>
        </InnerRow>
      </Col>
      <Col>
        <InnerRow>
          <ImageTag src={ImageSrc} />
          <FlexRow>
            <Span1>artist name</Span1>
            <Span2>song title</Span2>
          </FlexRow>
        </InnerRow>
      </Col>
      <Col>
        <InnerRow>
          <ImageTag src={ImageSrc} />
          <FlexRow>
            <Span1>artist name</Span1>
            <Span2>song title</Span2>
          </FlexRow>
        </InnerRow>
      </Col>
    </Row>
  </SongsContainer>
);

export default SongsOverview;
