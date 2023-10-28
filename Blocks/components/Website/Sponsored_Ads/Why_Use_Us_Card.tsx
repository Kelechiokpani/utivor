import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import {Header_Span_Description} from "../../../ReusedComponent/Text_Typography";

interface Image_and_Text_Props {
  title: string;
  description: string;
  image: string;
  imageOnRight?: boolean;
}

const Why_Use_Us_Card = (props: Image_and_Text_Props) => {
  const { title, description, image, imageOnRight } = props;

  const router = useRouter();

  const NewRoute = () => {
    router.push("/sign_up");
  };

  return (
    <Container
      $imageOnRight={imageOnRight}
      className="grid w-full text-800 lg:p-6 p-2"
    >
      <div className="col-12 md:col-5 overflow-hidden p-1">
        <Image
          src={image}
          alt="hero-1"
          className="mx-auto block w-full h-full w-8 md:w-12"
        />
      </div>
      <div
        className={`col-12 md:col-7 lg:p-6 p-4 surface-0 border-round-md text-center ${
          imageOnRight ? "md:text-right" : "md:text-left"
        } flex align-items-center`}
      >
        <section>
          <p className="font-bold">{title}</p>
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

export default Why_Use_Us_Card;
