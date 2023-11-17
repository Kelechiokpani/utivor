
import styled from "styled-components";
import {Header_Top, HR_Line} from "../../../ReusedComponent/Text_Typography";
import Form_Input from "../../../ReusedComponent/Form_Input";

export default function Request_a_Callback() {
  return (
    <Container className="px-4 py-8 md:px-6 lg:px-12 lg:flex justify-content-center  align-content-center " style={{height:"40rem"}}>
      <div className=" lg:px-6">
        <div className="flex flex-column">
          <div className="mb-7 lg:text-center">
          <h3 className='text-indigo-500 font-bold'>WE WORK WITH THE BIGGEST NAMES </h3>

          </div>
        </div>

      </div>

      {/*<div className=' lg:col-6 justify-content-center align-items-center  '>*/}

      {/*</div>*/}

    </Container>
  );
}

export const Container = styled.div`
  background-color: white;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
`;
