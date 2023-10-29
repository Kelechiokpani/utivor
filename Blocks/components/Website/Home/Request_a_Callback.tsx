"use client"

import styled from "styled-components";
import {Header_Top, HR_Line} from "../../../ReusedComponent/Text_Typography";
import Form_Input from "../../../ReusedComponent/Form_Input";

export default function Request_a_Callback() {
  return (
    <Container className="px-4 py-8 md:px-6 lg:px-12 lg:flex justify-content-center  align-content-center ">
      <div className=" lg:px-6">
        <div className="flex flex-column">
          <div className="mb-7 text-center">
            <Header_Top label="Request a Callback" />
            <HR_Line className="w-4 md:w-4 lg:w-2" />
            <Paragraph className="mt-4">
              There is more than one approach to help you identify the ideal
              brand management technique that suites your brand. Fill this form
              and let’s learn how you want us to serve you.
            </Paragraph>
          </div>
        </div>

      </div>

      <div className=' lg:col-6 justify-content-center align-items-center  '>
        <Form_Input/>
      </div>

    </Container>
  );
}

export const Container = styled.div`
  background-color: white;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
`;
