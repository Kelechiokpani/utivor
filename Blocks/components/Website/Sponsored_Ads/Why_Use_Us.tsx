"use client";

import styled from "styled-components";
import image1 from "../../../../public/image/website/sponsored_ads/rafiki-1.svg";
import image2 from "../../../../public/image/website/sponsored_ads/rafiki-2.svg";
import {Header_Top, HR_Line} from "../../../ReusedComponent/Text_Typography";
import Why_Use_Us_Card from "./Why_Use_Us_Card";

const WhyUseUseItems = [
  {
    title:
      "1. Reach the right people, in the right place, at the right time, with less resources.",
    description: `We will help you reach your exact customers and prospective 
                  customers anywhere they are in the world with less resources 
                  through targeted marketing. You don’t have to break the bank.`,
    image: image1,
    imageOnRight: true,
  },
  {
    title: "2. Get measurable results",
    description: `We will deliver excellent reporting in real time on your ads 
                  spend.We will deliver excellent reporting in real time on 
                  your ads spend..`,
    image: image2,
  },
];

const Why_Use_Us = () => {
  return (
    <Container className="-mt-6">
      <div className="px-4 py-8 md:px-6 lg:px-8 text-center">
        <div className="p-2 m-6 mt-0">
          <Header_Top label="Why Use Us" />
          <HR_Line className="w-6 md:w-6 lg:w-2 mb-3" />
        </div>
        <div className="grid text-center">
          {WhyUseUseItems?.map((data, idx) => (
            <Why_Use_Us_Card
              title={data.title}
              description={data.description}
              image={data.image}
              imageOnRight={data?.imageOnRight}
              key={idx}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: #dbf7f7;
  color: #000;
  padding-bottom: 10px;
  padding-top: 10px;
  font-family: Lora;

  .feature_cards {
    border-radius: 16px;
    background: var(--white-900, #fff);
    box-shadow: 0px 1px 2px 0px rgba(85, 105, 135, 0.1);
    width: 32%;
    //height: 258px;
    margin: 6px;
  }

  @media (max-width: 480px) {
    .feature_cards {
      width: 100%;
      max-width: 350px;
    }
  }

  @media (max-width: 1024px) {
    .feature_cards {
      width: 100%;
      max-width: 350px;
    }
  }
`;

export default Why_Use_Us;
