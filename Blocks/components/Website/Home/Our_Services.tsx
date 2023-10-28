import { useState } from "react";
import {Service} from "../LandingPage/data/data";
import TogglableLandingCard from "./TogglableLandingCard";
import styled from "styled-components";
import {Header_Top, Header_Top_Span, HR_Line} from "../../../ReusedComponent/Text_Typography";

export default function Our_Services() {
  const [selected, setSelected] = useState(0);

  const handleChangeSelected = (idx: number) => {
    setSelected(idx);
  };

  return (
    <Container className="px-4 lg:px-8">
      <div className="mb-8 text-center">
        <Header_Top label="Our Services" />
        <HR_Line className="w-4 md:w-4 lg:w-2 mb-3" />
        <Header_Top_Span
          label={`"Improve customer engagements & drive more conversion with tailored
            services built for you"`}
          className="font-light lg:text-2xl"
        />
      </div>

      <div className="grid lg:px-4 ">
        {Service?.map((item, idx) => (
          <TogglableLandingCard
            title={item.title}
            content={item?.content}
            icon={item?.icon}
            idx={idx}
            selected={idx === selected}
            onToggle={handleChangeSelected}
            key={idx}
          />
        ))}
        <ImageDiv></ImageDiv>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 0;
  min-height: 800px;
  padding: 2rem 4rem;
  background-color: #f9fcff;
  background-image: url("/layout/images/page-svgs/section-3-bg.svg");
  background-size: cover;
`;

const GridDiv = styled.div`
  display: grid;
  @media (min-width: 992px) {
    padding: 0 2rem; /* Adjust padding as needed for large screens */
  }
`;

const ImageDiv = styled.div`
  width: 100%; /* 100% width on smaller screens */
  padding: 0;
  height: 18rem;
  cursor: pointer;
  background-image: url("/website/landing_page/gen-z-rafiki.svg");
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto; /* Center horizontally */

  @media (min-width: 768px) {
    width: 50%; /* 50% width from tablet size and upwards */
  }
`;
