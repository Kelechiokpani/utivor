import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import {
  Header_Span,
  Header_Span_Description,
  Header_Span_sub,
} from "./Text_Typography";

interface Image_and_Text_Props {
  label: string;
  subLabel: string;
  description: string;
  image: string;
  imageOnRight?: boolean;
}

const Image_and_Text = (props: Image_and_Text_Props) => {
  const { label, subLabel, description, image, imageOnRight } = props;

  const router = useRouter();

  const NewRoute = () => {
    router.push("/sign_up");
  };

  return (
    <Container
      $imageOnRight={imageOnRight}
      className="grid w-full surface-0 text-800 p-2 md:px-4 lg:px-8 md:mb-4 lg:mb-6"
      style={{
        direction: `${imageOnRight ? "rtl" : "ltr"}`,
        textAlign: `${imageOnRight ? "left" : "right"}`,
      }}
    >
      <div className="col-12 md:col-5 lg:col-4 overflow-hidden p-4">
        <Image
          src={image}
          alt="hero-1"
          className="mx-auto block w-full h-full lg:w-12 md:w-12"
        />
      </div>
      <div
        className={`col-12 md:col-7 lg:col-8 lg:py-6 p-4 lg:text-center ${
          imageOnRight ? "lg:text-right" : "lg:text-left"
        } flex align-items-center`}
      >
        <section>
          <Header_Span label={label} />
          {subLabel && <Header_Span_sub label={subLabel} />}
          <br />
          <br />
          <Header_Span_Description label={description} />
        </section>
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

export default Image_and_Text;
