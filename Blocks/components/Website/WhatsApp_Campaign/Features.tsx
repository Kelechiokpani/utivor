"use client";
import styled from "styled-components";
import ColoredBox from "../../../ReusedComponent/Colored_Box";

const Features = () => {
  return (
    <Container className=" hidden lg:block text-700  lg:text-center lg:p-8 lg:pt-2 lg:px-8">
      <div className="mb-6 lg:flex lg:flex-row  justify-content-between align-items-center">
        <ColoredBox label="Connect your chatbot conversational Artificial Intelligence" />
        <ColoredBox label="Flexible & Affordable Pricing" />
      </div>

      <div className="mb-6 ">
        <ColoredBox label="End-to-end encryption" />
      </div>

      <div className=" lg:flex lg:flex-row  justify-content-between align-items-center">
        <ColoredBox label="Personalized Experience" />
        <ColoredBox label="Reliable" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  //background: #ffffff;
  height:40rem;
  background-image: url("/image/website/whatsapp_campaign/why_kreativerock_whatsapp_business.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: -10% 40%;
  color: #000;
  padding-bottom: 10px;
  padding-top: 10px;
  line-height: 164%;
`;

export default Features;
