"use client";

import {Container} from "../../../../styles/Styled_component/StyledComponent";
import {Header_Top, Header_Top_Span, HR_Line} from "../../../ReusedComponent/Text_Typography";

const Why_KreativeRock = () => {
  return (
    <Container className="text-700 lg:text-center flex justify-content-center lg:p-8 ">
      <div className="w-12 p-3 ">
        <Header_Top label="Why KreativeRock Mobile Texting?" />
        <HR_Line />
        <Header_Top_Span
          label="Our Mobile Texting
            system empowers you to send direct or interactive text
            (SMS) messages to your customers, employees, friends,
            networks, or targeted audience across the globe to
            nurture, build or amplify existing relationships. Send
            and receive messages in real time, engage your audience better and achieve more with KreativeRock Mobile Texting Solutions."
        />
      </div>
    </Container>
  );
};

//
// const Container = styled.div`
//   background: #F5F8FCCB;
//   color: #000;
//   padding-bottom: 10px;
//   padding-top: 10px;
//   line-height: 60px;
// `

export default Why_KreativeRock;
