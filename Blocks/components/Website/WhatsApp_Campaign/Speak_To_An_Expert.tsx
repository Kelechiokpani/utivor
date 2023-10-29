import { Button } from "primereact/button";
import Image from "next/image";
import image from "../../../../public/imagewebsite/whatsapp_campaign/speak_to_an_expert.svg";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import {Header_Span, Header_Span_Description} from "../../../ReusedComponent/Text_Typography";
import {CustomButton} from "../../../ReusedComponent/Styled_Button";

const Speak_To_An_Expert = () => {
  const router = useRouter();

  const NewRoute = () => {
    router.push("/sign_up");
  };

  return (
    <Container className="grid w-full ml-0 surface-0 text-800 lg:p-6 p-2 ">
      <div className="col-12 md:col-6 lg:p-6 lg:pr-8 mt-8 rem p-4 text-left flex align-items-center ">
        <section>
          <Header_Span label="Speak to an Expert" />
          <br />
          <Header_Span_Description
            label="Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin
      faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque aliquam
      enim."
          />
          <br />
          <CustomButton
            label={`Get Started`}
            className="custom-blue-button border-round w-10rem"
            icon="add"
            onClick={NewRoute}
          />
        </section>
      </div>
      <div className="flex flex-column align-items-center col-12 md:col-6 overflow-hidden p-1">
        <div className="w-8 mt-8">
          <Image
            src={image}
            alt="hero-1"
            className="md:ml-auto block w-full h-full md:h-[80%]"
          />
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
