"use client";
import styled from "styled-components";
import S1 from "../../../../public/image/website/sponsored_ads/S1.svg";
import S2 from "../../../../public/image/website/sponsored_ads/S2.svg";
import S3 from "../../../../public/image/website/sponsored_ads/S3.svg";
import S4 from "../../../../public/image/website/sponsored_ads/S4.svg";
import S5 from "../../../../public/image/website/sponsored_ads/S5.svg";
import S6 from "../../../../public/image/website/sponsored_ads/S6.svg";
import S7 from "../../../../public/image/website/sponsored_ads/S7.svg";


import Card from "../../../ReusedComponent/Card";


const FeatureItems = [
  {
    id: 1,
    icon: S1,
    title: "Simple Texting",
    description: `We will deliver ads to multiple third-party webpages on side bars, 
      header, or footer sections of a website where they can easily be seen. 
      End users will get to know about your products or services when they visit 
      any website of their choice as we will strategically place ads to target your 
      exact audience`,
  },
  {
    id: 2,
    icon: S2,
    title: "Interactive Texting ",
    description: `YouTube is the second biggest search engine. People visit YouTube for video
                  contents. Delivering Ads on YouTube will help you reach
                  your audience faster. We will use through YouTube ads
                  to run Sponsored ads or drive engagement through
                  content marketing that will help you achieve your goals
                  faster.”
                  `,
  },
  {
    id: 3,
    icon: S3,
    title: " Sender ID",
    description: `Your target audience have
                  the habit to use Google, Yahoo or Bing search engine to
                  find information about anything. We will optimize your
                  digital presence on Search Engine Result Pages through
                  relevant keywords to help your digital growth.`,
  },
  {
    id: 4,
    icon: S4,
    title: "Personalization",
    description: `Facebook is a major player in the digital world. 
                  We will use through Facebook marketing platform to run 
                  sponsored ads or drive engagement through content marketing 
                  to help you achieve your goals faster`,
  },
  {
    id: 5,
    icon: S5,
    title: "Analytics & reporting",
    description: `LinkedIn has the largest group of influential, affluent, 
                  and educated people network. We will use through LinkedIn 
                  marketing to run sponsored ads & help you achieve your goals faster.`,
  },
  {
    id: 6,
    icon: S6,
    title: "Keyword & Inbox ",
    description: `Instagram helps connect  more with millennials. We  will use through 
                  Instagram  marketing to run sponsored  ads that help you achieve your 
                  goals faster.`,
  },
  {
    id: 7,
    icon: S7,
    title: "Keyword & Inbox ",
    description: `Twitter is a social platform to find the latest information 
                  about virtually any topic. We will use through Twitter marketing 
                  to run sponsored ads or drive engagement to help you achieve your 
                  goals faster.`,
  },
];

interface IData {
  title: string;
  icon: string;
  description: string;
}

const Services = () => {
  return (
    <Container>
      <div className="mt-0 px-4 pt-0 pb-8 md:px-6 lg:px-8 surface-0 text-center">
        {/* <div className="grid text-center"> */}

        <div className="grid grid-nogutter lg:px-4">
          {FeatureItems?.map((data: IData, index) => (
            <Card
              index={index}
              title={data.title}
              icon={data.icon}
              content={data.description}
              key={data.title}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: #f5f8fccb;
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

export default Services;
