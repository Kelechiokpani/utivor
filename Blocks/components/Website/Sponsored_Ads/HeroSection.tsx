import HeroImg from "../../../../public/image/website/sponsored_ads/amico.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import {
  Header_Span,
  Header_Span_Description,
  Header_Span_Highlighted_sub,
  Header_Span_sub
} from "../../../ReusedComponent/Text_Typography";
import {CustomButton} from "../../../ReusedComponent/Styled_Button";
import Loading from "../../../ReusedComponent/Bounce_Loader";

const HeroSection = () => {
  const router = useRouter();

  const NewRoute = () => {
    router.push("/sign_up");
  };

  return (
    <Container
      className="grid w-full mt-0 ml-0 text-800 lg:p-6 p-2"
      style={{
        background: "linear-gradient(to right, #e7fffb, #ffdaa08c, #e7fffb)",
      }}
    >
      <div className="col-12 md:col-7 lg:p-6 p-4 text-center text-left flex align-items-center ">
        <section>
          <Header_Span label="Grow your Business " />
          <Header_Span_sub label="with " />
          &nbsp;
          <Header_Span_Highlighted_sub label=" Digital Marketing" />
          <br />
          <Header_Span_Description
            label="Stay in the eyes of your exact audience through
regular posts publishing & sponsored posts. Drive the
right traffic and generate qualified leads."
          />
          <CustomButton
            label={`Get Started`}
            className="custom-blue-button"
            icon="add"
            onClick={NewRoute}
          />
        </section>
      </div>
      {/*<div className="col-12 md:col-5 overflow-hidden p-1">*/}
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
      </div>
    </Container>
  );
};

const Container = styled.div`
  //background: linear-gradient(25deg, #00CCA793,   lightgray 50%, #FF79006E, #00CCA793);
  //backdrop-filter: blur(20deg);
  height:42rem;
  border: none;
  background-size: cover;
  color: #000;
  //opacity: 0.6;
`;

export default HeroSection;
