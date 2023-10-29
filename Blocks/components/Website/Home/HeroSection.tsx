
import styled from "styled-components";
import {CustomButton} from "../../../ReusedComponent/Styled_Button";
import {Header_Top_Span} from "../../../ReusedComponent/Text_Typography";



const HeroSection = () => {
  return (
    <Container
      id="hero"
      className="flex flex-column pt-4 px-2 lg:px-8 overflow-hidden"
    >
      <div className="mx-4 md:mx-8 mt-0 md:mt-4 md:pt-6  text-center">
        <Heading className="text-2xl md:text-4xl font-bold text-gray-900 line-height-2">
          Take Control with KreactiveRock Technology
        </Heading>
        <Header_Top_Span
          label="Our support is top-notch, get started now!"
          className="text-2xl"
        />
        <ButtonDiv className="flex justify-content-center">
          <CustomButton
            label="Get Started"
            className="text-xl border-none mt-3 capitalize font-normal line-height-3 px-3 text-white"
            icon="add"
          />
        </ButtonDiv>
      </div>
      <div className="flex justify-content-between mt-4 md:-mt-7">
        <div className="flex justify-content-center md:justify-content-end">
          <img
            src="/image/website/landing_page/hero-graphic-1.svg"
            alt="Hero Image"
            className="w-9 md:w-auto"
          />
        </div>
        <div className="flex justify-content-center md:justify-content-end">
          <img
              src="/image/website/landing_page/hero-graphic-2.svg"
            alt="Hero Image"
            className="w-9 md:w-auto"
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;

const Container = styled.div`
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    radial-gradient(
      77.36% 256.97% at 77.36% 57.52%,
      #f9dfc7 0%,
      #bdefe8 20%,
      #f9dfc7 70%
    );
  clippath: "inset(0% 0% 0% 0%)";
`;

const Heading = styled.h1`
  text-transform: uppercase;
  padding-top: 3rem;

  @media (min-width: 768px) {
    background-image: url("/image/website/landing_page/curvy-arrow-2.svg"),
      url("/image/website/landing_page/stars.svg");
    background-size: 12%, 6%; 
    background-position: 3% 40%, 2% 6%;
    background-repeat: no-repeat no-repeat;
  }
`;

const ButtonDiv = styled.div`
  width: 12.7rem;
  margin: 0 auto;
  margin-top: 2rem;

  @media (min-width: 768px) {
    width: 23rem;
    background-image: url("/image/website/landing_page/curvy-arrow-2.svg"); /* Specify the path to your image */
    background-size: 15%; /* Adjust this property as needed */
    background-position: 10% 0%;
    background-repeat: no-repeat;
  }
`;

const TaglineParagraph = styled.p`
  background-image: url("/image/website/landing_page/scribble.svg"); /* Specify the path to your image */
  background-size: 9%; /* Adjust this property as needed */
  background-repeat: no-repeat;
  background-position: 92% 90%;

  @media (min-width: 768px) {
    background-position: 90% 90%;
  }

  @media (min-width: 992px) {
    background-position: 78% 90%;
  }

  @media (min-width: 1024px) {
    background-position: 80% 90%;
  }
`;
