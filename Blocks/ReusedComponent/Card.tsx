import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface CardProps {
  title: string;
  content: string;
  icon: any;
  index:number
}

export const Card =(props: CardProps)=> {
  const { title, content, icon, index} = props;

  return (
    <div key={index} className="col-12 md:col-6 xl:col-3 lg:p-2 md:p-2  mb-3">
      <CardContainer className="shadow-2  border-round p-4 border-indigo-300  border-3">
        <div className="flex flex-row justify-content-center">
          <Image src={icon} className="mr-3 w-2 h-2" alt="1" />
        </div>
        <div className="flex flex-row justify-content-center surface-border mb-1 pb-2">
          <span className="text-lg font-bold">{title}</span>
        </div>
        <TextDiv className="text-sm">{content}</TextDiv>
      </CardContainer>
    </div>
  );
}



export  const Card_About = (props: CardProps)=> {
  const { title, content, icon, index} = props;

  return (
      <div key={index} className="col-12 md:col-4 xl:col-4 lg:p-2 md:p-4  mb-3 relative">
        <CardContainer className="shadow-2  border-round p-4  border-indigo-300  border-3">
          <div className="flex flex-row">
            <Image src={icon} className="mr-3 w-2 h-2" alt="1" />
          </div>
          <div className="flex flex-row  surface-border mb-3 mt-3 pb-2">
            <span className="text-lg font-bold">{title}</span>
          </div>
          <p className="text-sm mt-4 text-start">{content}</p>
        </CardContainer>
      </div>
  );
}


export const Card_Services =(props: any)=> {
  const {  content, icon, index} = props;

  return (
      <div key={index} className="col-12 md:col-6 xl:col-6 lg:p-2 md:p-2  mb-3">
        <ContainerService className="shadow-2  border-round  p-4">
          <div className="flex flex-row justify-content-center">
            <div className="border-circle w-2rem h-1rem m-4  p-3 bg-indigo-600 text-white font-bold flex align-items-center justify-content-center">{icon}</div>
          </div>
          <TextDiv className="text-md">{content}</TextDiv>
        </ContainerService>
      </div>
  );
}

const ContainerService = styled.div`
  height: 15rem;
  background: #454545;
  color: #ffffff;
`;

const CardContainer = styled.div`
  height: 20rem;
  background: #000000;
  color: #ffffff;
`;

const TextDiv = styled.div`
  color: #ffffff;
`;
