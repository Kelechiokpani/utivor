"use client"
import HeroImg from "../../../../public/image/website/mobile_texting/Sales consulting-pana 2.png";
import Image from "next/image";
import styled from "styled-components";
import {Header_Span, Header_Span_Description, Header_Span_sub} from "../../../ReusedComponent/Text_Typography";
import {CustomButton} from "../../../ReusedComponent/Styled_Button";
import Loading from "../../../ReusedComponent/Bounce_Loader";
import {useRouter} from "next/navigation";




const HeroSection = () => {
  const router = useRouter();

  const NewRoute = () => {
    router.push("/register");
    console.log("clicked")
  };

  return (
    <Container
      className=" relative grid w-full mt-0 ml-0 text-800 lg:p-6 p-2 overflow-hidden justify-center"
      style={{
        background: "linear-gradient(to right, #e7fffb, #ffdaa08c, #e7fffb)",
      }}
    >
      {/*<Image src={Hero} alt="hero" className="absolute inset-0 object-cover w-full  h-full"/>*/}

      <div className="col-12 md:col-7 lg:p-6 p-4 text-center text-left flex align-items-center ">
        <section>
          <Header_Span label="Stay connected with your " />
          <Header_Span_sub label="customers" />

          <Header_Span_Description label="Send and receive text messages using our easy-to-use platform" />
          <CustomButton
            label={`Get Started`}
            className="capitalize"
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
              // className="md:ml-auto block "
              className="md:ml-auto block w-full"
            />
          }
        />
      </div>

    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 42rem;
  //background-image:url("../../../public/website/bg.svg");
  background-size: cover;
  background: linear-gradient(to right, #e7fffb, #ffdaa08c, #e7fffb);
  //background: linear-gradient(
  //  to right,
  //  rgba(0, 204, 167, 0.21),
  //  rgba(255, 121, 0, 0.17),
  //  rgba(0, 204, 167, 0.21)
  //);
  //background: linear-gradient(25deg, #00CCA793,   lightgray 50%, #FF79006E, #00CCA793);
  //backdrop-filter: blur(20deg);
  border: none;
  color: #000;
  //opacity: 0.6;
`;

export default HeroSection;
