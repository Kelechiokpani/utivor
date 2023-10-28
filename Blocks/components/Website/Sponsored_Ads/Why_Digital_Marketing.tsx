"use client";
import styled from "styled-components";
import {Header_Top, Header_Top_Span, HR_Line} from "../../../ReusedComponent/Text_Typography";

const Why_Digital_Marketing = () => {
  return (
    <Container className="text-700 lg:text-center flex justify-content-center lg:p-8 lg:pb-6 surface-0">
      <div className="p-4 lg:px-8 lg:pt-6">
        <Header_Top label="Why Digital Marketing?" />
        <HR_Line className="w-7 md:w-4 lg:w-3 mb-5" />
        <Header_Top_Span
          label="Scaling your business in recent times requires that you leverage technology 
        to reach your exact audience wherever they are around the globe. Digital marketing gives you the 
        targeted leverage & tools to achieve and surpass your marketing expectations. 
        At KreativeRock, we understand how social media & digital marketing works and how it 
        can be used to positively influence your audience, drive better engagement, increase conversions, and position your brands better to achieve your business goals"
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: #f5f8fc;
  color: #000;
  padding-bottom: 10px;
  padding-top: 10px;
  line-height: 164%;
  border-bottom: 1px solid #dddddd;

  background-image: url("/website/sponsored_ads/blob_right.svg");
  background-position: 108% 20%;
  background-repeat: no-repeat;
  display: none;
`;

export default Why_Digital_Marketing;
