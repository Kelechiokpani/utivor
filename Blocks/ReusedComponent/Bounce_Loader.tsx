import React from "react";
import styled, { keyframes } from "styled-components";



const LOGO_SIZE = "100px";
const LOGO_WIDTH = "80px";
const LOGO_HEIGHT = "300px";
const DURATION = "4s";
const DROP_HEIGHT = "40px";
const OFFSET = "40px";



const bounce = keyframes`
  from {
    transform: translateY(0) scale(1);
  }
  to {
    transform: translateY(${DROP_HEIGHT}) 
  }
`;


const Container = styled.div`
  position: relative;
`;

const LogoWrapper = styled.div`
   //width: ${LOGO_WIDTH};
  //height: ${LOGO_HEIGHT};
  position: absolute;
  top: ${OFFSET};
  //left: calc(50% - ${LOGO_SIZE} / 2);

  animation-name: ${bounce};
  animation-duration: ${DURATION};
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.3, 0.8, 0.7, 1);
  animation-iteration-count: infinite;
`;


function Loading({logo}:any) {
    return (
        <Container>
            <LogoWrapper>{logo}</LogoWrapper>
        </Container>
    );
}

export default Loading;
