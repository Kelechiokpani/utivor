"use client";
import styled from "styled-components";
import F1 from "../../../public/website/mobile_texting/F1.svg";
import F2 from "../../../public/website/mobile_texting/F2.svg";
import F3 from "../../../public/website/mobile_texting/F3.svg";
import F4 from "../../../public/website/mobile_texting/F4.svg";
import F5 from "../../../public/website/mobile_texting/F5.svg";
import F6 from "../../../public/website/mobile_texting/F6.svg";
import { Fragment } from "react";
import {
  Header_Top,
  Header_Top_Description,
} from "../../ReusedComponent/Text_Typography";

const UseCaseItems = [
  {
    id: 1,
    icon: F1.src,
    title: "Simple Texting",
    description:
      "Send text messages in mass or to a few of your contacts in real time.",
  },
  {
    id: 2,
    icon: F2.src,
    title: "Interactive Texting ",
    description:
      "  Engage in real-time or automated conversations with customers through text messaging. Send and receive text messages",
  },
  {
    id: 3,
    icon: F3.src,
    title: " Sender ID",
    description: " Customize your sender ID to engage your audience better. ",
  },
  {
    id: 4,
    icon: F4.src,
    title: "Keyword & Inbox ",
    description:
      "View and manage all incoming text messages from customers. Monitor and respond to text messages in real-time. and Set-up specific word or phrase to trigger a message or response",
  },
  {
    id: 5,
    icon: F5.src,
    title: "Personalization",
    description:
      "Customize messages with the recipient's details or other information.",
  },
  {
    id: 6,
    icon: F6.src,
    title: "Analytics & reporting",
    description:
      "Whether you think you can or you think you can’t, you’re right.",
  },
];

const UseCase = () => {
  return (
    <Container>
      <div className=" px-4 py-8 md:px-6 lg:px-8 text-center">
        <div className="p-2 m-6 mt-0">
          <Header_Top label="Use Case" />
        </div>
        <div className="grid text-center">
          {UseCaseItems?.map((data: any) => (
            <div
              className="feature_cards col-12 lg:col-3  md:col-3  mb-4"
              key={data?.id}
            >
              <span
                className="inline-block  border-circle w-4rem h-4rem mb-3 mt-3"
                style={{ background: "#FFF2F2" }}
              >
                <img
                  src={data?.icon}
                  alt="data?.icon"
                  key={data?.id}
                  className="mt-3"
                />
              </span>
              <div className="text-900 text-xl mb-5 font-medium">
                {data?.title}
              </div>
              <span className="text-700 text-sm line-height-3 p-4">
                {data?.description}
              </span>
            </div>
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

export default UseCase;
