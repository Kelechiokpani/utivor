"use client"

import Image from "next/image";
import image from "../../../../public/image/website/whatsapp_campaign/how_it_works.svg";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import {Header_Span, Header_Span_Description, Header_Top} from "../../../ReusedComponent/Text_Typography";

const Speak_To_An_Expert = () => {
  const router = useRouter();

  const NewRoute = () => {
    router.push("/register");
  };

  return (
    <Container className="w-full surface-0 text-800 p-1">
      <div className="flex flex-row ">
        <div className="col-12 md:col-6 lg:p-8 p-1 flex align-items-center text-center">
          <section>
            {/*<Header_Top label="How It Works" />*/}
            <Header_Top label="The conversational chat experience" />
            <br />
            <Header_Span_Description label="Provide an integrated shopping with WhatsApp's native catalogue and cart function." />
            <br />
          </section>
        </div>
        <div className="hidden lg:flex flex-column align-items-center col-12 md:col-6 overflow-hidden p-1">
          <div className="w-8">
            <Image
              src={image}
              alt="hero-1"
              className="md:ml-auto block w-full h-full md:h-[80%]"
            />
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

export default Speak_To_An_Expert;
