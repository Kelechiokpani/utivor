
import React from "react";
import styled from "styled-components";
import Image from "next/image";

interface TogglableLandingCardProps {
  title: string;
  content: string;
  icon: string;
  idx: number;
  selected: boolean;
  onToggle: (idx: number) => void;
}

const CardContainer = styled.div<{ $isEven?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  cursor: pointer;
  @media (min-width: 992px) {
    ${(props) =>
      props.$isEven ? "padding-right: 20px;" : "padding-right: 0;"} 
    width: 50%;
    margin: 4rem 0;
  }
  @media (min-width: 992px) {
    padding-bottom: 20px;
  }
  @media (min-width: 992px) {
    margin: 0;
  }
`;

// const CardWrapper = styled.div<{ isselected: boolean }>`
const CardWrapper = styled.div`
  min-height: 200px;
  padding: 0.75rem;
  padding-left: 0rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    min-height: 200px;
  }
  
`;
//   border: 3px solid
//     ${(props) => (props.isselected ? "var(--tw-primary-color)" : "transparent")};
//   background-color: ${(props) =>
//     props.isselected ? "#ffffff" : "transparent"};


const CardContent = styled.div`
  padding: 0.75rem 0;
  display: flex;
  flex-direction: row;
`;

//const CardImage = styled.div<{ isselected: boolean }>`
const CardImage = styled.div`
  flex: 0 0 auto;
  height: 6rem;
  margin-top: 1rem;
  padding-right: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
  
  img {
    max-height: 100%;
    max-width: 100%;
  }
`;
// border-left: ${(props) =>
//     props.isselected ? `4px solid var(--tw-primary-color)` : "none"};

const CardInfo = styled.div`
  flex: 1 1 auto;
`;

const CardTitle = styled.h5`
  margin-bottom: 1rem;
  font-weight: 700;
`;

const CardText = styled.p`
  font-weight: 400;
`;

const TogglableLandingCard: React.FC<TogglableLandingCardProps> = (props) => {
  const { title, content, icon, selected, idx, onToggle } = props;

  const handleClick = () => {
    onToggle(idx);
  };

  return (
    <CardContainer $isEven={(idx + 1) % 2 === 0} onClick={handleClick} className='p-1'>
      {/*<CardWrapper isselected={selected}>*/}
      <CardWrapper>
        <CardContent>
          <CardImage>
          {/*<CardImage isselected={selected}>*/}
            <Image src={icon} alt="KreativeRock Digital Logo" />
          </CardImage>
          <CardInfo>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardText className="text-base">{content}</CardText>
          </CardInfo>
        </CardContent>
      </CardWrapper>
    </CardContainer>
  );
};

export default TogglableLandingCard;
