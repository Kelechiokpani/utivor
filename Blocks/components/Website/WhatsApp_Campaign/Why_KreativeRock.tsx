"use client";
import styled from "styled-components";
import {Header_Top, Header_Top_Span} from "../../../ReusedComponent/Text_Typography";

const Why_KreativeRock = () => {
  return (
    <Container className="text-700 lg:text-center flex justify-content-center lg:p-10 lg:pt-6">
      <div className="p-4 lg:px-8 lg:pt-0 lg:pr-8 ">
        <Header_Top label="Why KreativeRock WhatsApp Business"  />
        <br />
        <div className="flex flex-row justify-content-center lg:text-center ">
          <Header_Top_Span  label="Connect with your customers better.
                 Use WhatsApp Business for personalize message experience."
            className="lg:w-12 lg:text-center "
          />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: #ffffff;
  color: #000;
  padding-bottom: 10px;
  padding-top: 10px;
  line-height: 164%;
`;

export default Why_KreativeRock;
