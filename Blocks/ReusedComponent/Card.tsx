import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface CardProps {
  title: string;
  content: string;
  icon: any;
  index:number
}

export default function Card(props: CardProps) {
  const { title, content, icon, index} = props;

  return (
    <div key={index} className="col-12 md:col-6 xl:col-4 lg:p-3 mb-3">
      <CardContainer className="surface-card shadow-2 border-round p-4">
        <div className="flex flex-row justify-content-center mb-3">
          <Image src={icon} className="mr-3" alt="1" />
        </div>
        <div className="flex flex-row justify-content-center surface-border mb-2 pb-2">
          {/* <div className="flex"> */}
          <span className="text-lg font-bold mb-1">{title}</span>
          {/* </div> */}
        </div>
        <TextDiv className="text-sm">{content}</TextDiv>
      </CardContainer>
    </div>
  );
}

const CardContainer = styled.div`
  height: 18rem;
`;

const TextDiv = styled.div`
  color: #6f7070;
`;
