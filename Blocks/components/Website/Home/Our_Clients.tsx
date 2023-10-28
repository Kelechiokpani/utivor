import React from "react";
import styled from "styled-components";
import {Header_Top, Header_Top_Span, HR_Line} from "../../../ReusedComponent/Text_Typography";
import {portfolioCardContents} from "../LandingPage/data/data";
import PortfolioCard from "./Portfolio_Card";

const Our_Clients =()=> {
  return (
    <Container>
      <div className="text-center">
        <Header_Top label="Our Clients" />
        <HR_Line className="w-3 md:w-2 lg:w-1 mb-3" />
        <Header_Top_Span
          label="We serve companies of all sizes, all around the globe.
          We speak your language"
          className="font-light text-2xl"
        />
      </div>

      <CardGrid>
        {portfolioCardContents.map((item:any, id:any) => (
          <PortfolioCard icon={item.icon} key={id} />
        ))}
      </CardGrid>
    </Container>
  );
}
export default Our_Clients
const Container = styled.div`
  width: 100%;
  margin-top: 0rem;
  padding: 4rem 0 4rem 0;
  background-color: #f9fcff;
  box-shadow: none;
  background-image: url("/image/website/landing_page/more/client-section-bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const SectionTitle = styled.h2`
  font-weight: 400;
  margin-bottom: 2rem;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
`;

const CardGrid = styled.div`
  padding: 0 2rem;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 0 4rem;
  }

  @media (min-width: 992px) {
    padding: 0 8rem;
  }
`;
