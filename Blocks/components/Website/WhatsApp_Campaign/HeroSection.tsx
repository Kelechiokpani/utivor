"use client"

import HeroImg from "../../../../public/image/website/whatsapp_campaign/iphones.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import {Header_Span, Header_Span_Description} from "../../../ReusedComponent/Text_Typography";
import {CustomButton} from "../../../ReusedComponent/Styled_Button";
import Loading from "../../../ReusedComponent/Bounce_Loader";

const HeroSection = () => {
  const router = useRouter();

  const NewRoute = () => {
    router.push("/sign_up");
  };

  return (
    <Container
      className="grid w-full  ml-0 text-800 lg:p-6 p-29"
      style={{
        background: "linear-gradient(to right, #e7fffb, #ffdaa08c, #e7fffb)",
      }}
    >
      <div className="col-12 md:col-7 lg:p-6 p-4 text-center text-left flex align-items-center ">
        <section>
          <Header_Span label="Connect with your customers like " />
          <Header_Span label="never before with personalized " />
          <Header_Span label="WhatsApp " />
          <br />
          <Header_Span_Description label="Send and receive WhatsApp messages seamlessly." />
          <br />
          <br />
          <CustomButton
            label={`Get Started`}
            className="custom-blue-button"
            icon="add"
            onClick={NewRoute}
          />
        </section>
      </div>

        <div className="col-12 md:col-5  p-1 hidden md:block">
        <Loading
            logo={
              <Image
                  src={HeroImg}
                  alt="hero-1"
                  className="md:ml-auto block md:h-full w-full h-full"
              />
            }
        />
        {/*<Image*/}
        {/*  src={HeroImg}*/}
        {/*  alt="hero-1"*/}
        {/*  className="md:ml-auto block md:h-full w-full h-full"*/}
        {/*/>*/}
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 45rem;
  border: none;
  background-size: cover;
  color: #000;
  //opacity: 0.6;
`;

export default HeroSection;
