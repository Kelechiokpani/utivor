"use client";
import styled from "styled-components";
import {Header_Top, Header_Top_Span, HR_Line} from "../../../ReusedComponent/Text_Typography";

const What_We_Can_Do = () => {
  return (
    <Container className="-mb-3 text-700 lg:text-center flex justify-content-center lg:py-8 surface-0">
      <BgImgSpan></BgImgSpan>
      <TextDiv className="w-full mt-8 p-4 lg:px-8 lg:pt-6">
        <Header_Top label="What we can do for you" />
        <HR_Line className="w-7 md:w-4 lg:w-3 mb-4" />
        <Header_Top_Span label="List of our several service as listed below" />
      </TextDiv>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  color: #000;
  padding-bottom: 10px;
  padding-top: 10px;
  line-height: 164%;
  z-index: 100;
`;

const BgImgSpan = styled.div`
  width: 280px;
  height: 280px;
  position: absolute;
  right: 10%;
  bottom: 15%;
  background-image: url("/website/sponsored_ads/what_we_can_do.svg");
  background-size: 100%, 100%; /* Adjust this property as needed */
  background-position: 90% 10%;
  background-repeat: no-repeat;
  display: none;

  @media (min-width: 768px) {
    width: 20%;
    height: 180px;
    right: 4%;
    bottom: 0%;
    display: block;
  }

  @media (min-width: 992px) {
    width: 280px;
    height: 280px;
    right: 4%;
    bottom: 12%;
    display: block;
  }
`;

const TextDiv = styled.div`
  background: #e3fffa;
`;

export default What_We_Can_Do;
