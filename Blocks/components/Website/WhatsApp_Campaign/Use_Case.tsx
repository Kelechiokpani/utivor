"use client"

import Image from "next/image";
import brown_bullet from "../../../../public/image/website/whatsapp_campaign/brown_bullet.svg";
import green_bullet from "../../../../public/image/website/whatsapp_campaign/green_bullet.svg";
import blue_bullet from "../../../../public/image/website/whatsapp_campaign//blue_bullet.svg";

import { useRouter } from "next/navigation";
import styled from "styled-components";
import {Header_Top} from "../../../ReusedComponent/Text_Typography";

const useCasesGroup = [
  { text: "Customer Support" },
  { text: "Mass Messaging" },
  { text: "Sales & Marketing" },
  { text: "Appointment Booking & Confirmation" },
  { text: "Surveys & Questionaire" },
  { text: "Order & Tracking" },
  { text: "Quiz & Trivia" },
  { text: "Conversational Texting" },
  { text: "Transactional Messaging" },
];

const Use_Case = () => {
  const router = useRouter();

  const NewRoute = () => {
    router.push("/sign_up");
  };

  return (
    <Container className="w-full surface-0 text-800 lg:p-6 lg:px-8 p-2">
      <div className="p-4 lg:p-8 lg:pt-0 lg:pb-0 lg:pr-8">
        <Header_Top label="Use Case" className="mb-6" />
        <br />

        <div className="flex flex-row ">
          <div className="grid">
            {useCasesGroup.map((item, idx) => (
              <div key={idx} className="w-6 lg:w-4  flex flex-row gap-4  lg:justify-content-start">
                <div className="mt-6 pt-1 ">
                  {idx % 3 === 0 ? (
                    <Image src={brown_bullet} alt="brown_bullet" width={18} />
                  ) : (idx + 1) % 3 === 0 ? (
                    <Image src={blue_bullet} alt="blue_bullet" width={18} />
                  ) : (
                    <Image src={green_bullet} alt="green_bullet" width={18} />
                  )}
                  {/* {idx % 2 === 0 && (
                    <Image src={green_bullet} alt="green_bullet" width={18} />
                  )} */}
                </div>
                <div className="mt-6">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div<{ $imageOnRight?: boolean }>`
  //background: linear-gradient(25deg, #00CCA793,   lightgray 50%, #FF79006E, #00CCA793);
  //backdrop-filter: blur(20deg);
  direction: ${(props) => (props.$imageOnRight ? "rtl" : "ltr")};
  border: none;
  background-size: cover;
  color: #000;
  //opacity: 0.6;
`;

export default Use_Case;
