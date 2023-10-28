import React from "react";
import { Header_Top } from "./Text_Typography";
import styled from "styled-components";
import Form_Input from "../ReusedComponent/Form_Input";

export default function Request_a_Callback() {
  return (
    <Container className="px-4 py-8 md:px-6 lg:px-8">
      <div className="flex justify-content-center">
        <div className="flex flex-column">
          <div className="mb-4 text-center">
            <Header_Top label="REQUEST A CALL BACK" className="mb-3" />
            <p>Recieve a feedback within 24hrs from on our price listing</p>
          </div>
          <div className="flex justify-content-center">
            <div className="col-12 md:col-8 lg:col-6">
              <Form_Input />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export const Container = styled.div`
  background-color: #f9fcff;
`;
